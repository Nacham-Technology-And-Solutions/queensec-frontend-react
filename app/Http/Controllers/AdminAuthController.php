<?php

namespace App\Http\Controllers;

use App\Models\AdminUser;
use App\Models\Order;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

class AdminAuthController extends Controller
{

    // Show Login Form
    public function showLoginForm()
    {
        return view('pages.admins.login');
    }

    // Authenticate Admin User
    public function authenticate(Request $request)
    {
        $form_field = $request->validate(
            [
                'email' => 'required|string',
                'password' => 'required|string',
            ]
        );

        // Check for the user with their email
        // $user = AdminUser::where('email', $form_field['email'])->first();

        // // Check if password is correct  or email found
        // if (!$user || !Hash::check($form_field['password'], $user->password)) {

        //     return back()->withErrors(['email' => 'Invalid Credentials!'])->onlyInput();
        // }


        if (Auth::guard('admin')->attempt($form_field)) {
            return redirect('/')->with('message', 'Login Successful!');
        }

        return back()->withErrors(['email' => 'Invalided Credentials!'])->onlyInput();
        // if (Auth::login($form_field)) {
        //     $request->session()->regenerate();

        //     return redirect('/')->with('message', 'Login Successful!');
        // }

        // return back()->withErrors(['email' => 'Invalid Credentials!'])->onlyInput();
    }


    // Logout Admin
    public function logout(Request $request)
    {
        Auth::guard('admin')->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login')->with('message', 'Logout Successful');
    }

    // Create New Admin Form
    public function create()
    {
        return view('admin.create');
    }

    public function store(Request $request)
    {
        $form_field =  $request->validate([
            'first_name' => 'required|string',
            'middle_name' => 'string',
            'last_name' => 'required|string',
            'email' => 'required|string|unique:users,email',
            'phone' => 'string',
            'password' => 'required|string|confirmed',
            'account_type' => 'required|int',
        ]);

        $user_type = "User";
        // 0 - Moderator || 1 - Customer Care || 2 - Admin || 3 - Investor 
        if ($form_field['account_type'] == 0) {
            $user_type = "Moderator";
        } else 
        if ($form_field['account_type'] == 1) {
            $user_type = "Customer Care";
        } else 
        if ($form_field['account_type'] == 2) {
            $user_type = "Admin";
        } else 
        if ($form_field['account_type'] == 3) {
            $user_type = "Investor";
        }

        // dd($form_field);

        $form_field['password'] = bcrypt($form_field['password']);

        $user = AdminUser::create($form_field);

        return redirect('/')->with('message', $user_type . ' Created Successfully');
    }

    public function dashboard()
    {
        $users = User::whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)
            ->get();
        $orders = Order::whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)
            ->get();
        $pending_orders = Order::whereMonth('created_at', Carbon::now()->month)
            ->whereYear('created_at', Carbon::now()->year)
            ->where('status', '=', 'pending')
            ->get();

        $stats = [
            'pending_orders' => $pending_orders->count(),
            'orders' => $orders->count(),
            'users' => $users->count(),
        ]; 

        return view(
            'dashboard',
            [
                'stats' => $stats
            ]
        );
    }

    // public function showForgotPasswordForm()
    // {
    //     return view('oneui.forgot_password');
    // }

    // // Handle forgot password request
    // public function sendResetLinkEmail(Request $request)
    // {
    //     $request->validate(['email' => 'required|email']);

    //     $status = Password::sendResetLink(
    //         $request->only('email')
    //     );

    //     return $status === Password::RESET_LINK_SENT
    //         ? back()->with(['status' => __($status)])
    //         : back()->withErrors(['email' => __($status)]);
    // }

}
