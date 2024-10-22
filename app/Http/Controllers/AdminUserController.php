<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdminUser;
use Illuminate\Support\Facades\Hash;
class AdminUserController extends Controller
{
     /**
     * View All User records
     */
    public function index()
    {
        $all = AdminUser::all();
        return view(
            'pages.admins.index',
            [
                'admins' => $all,
            ]
        );
    }

    /**
     * Show Create User Page
     */
    public function create()
    { 
        return view('pages.admins.create');
    }

    /**
     * Display a specific User Page
     */
    public function show(int $id)
    {
        $admin = AdminUser::find($id);

        return view(
            'pages.admins.show',
            [
                'admin' => $admin,
            ]
        );
    }

    /**
     * Edit a specific User Page
     */
    public function edit(int $id)
    { 
        $admin = AdminUser::find($id);

        return view(
            'pages.admins.edit',
            [
                'admin' => $admin
            ]
        );
    }

    /**
     * Store a new User in the DB
     */
    public function store(Request $request)
    {
        $form_field =  $request->validate([
            'first_name' => ['required', 'string'],
            'middle_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'email' => ['required', 'string', 'unique:users,email'],
            'phone' => ['string'],
            'password' => ['required', 'string'],            
            'account_type' => ['int'],
        ]);
 
        $form_field['password'] = bcrypt($form_field['password']);
        
        $form_field['username'] = $form_field['last_name'] . mt_rand(0, 10000);

        $user = AdminUser::create($form_field);

        return back()->with('message', 'Account Created Successfully'); 
    }

    /**
     * Update a specific User Data
     */
    public function update(Request $request, int $id)
    {
        $enforcer = AdminUser::find($id);

        $form_field =  $request->validate([
            'first_name' => ['string'],
            'middle_name' => ['string'],
            'last_name' => ['string'],
            'email' => ['string', 'email'],
            'phone' => ['string'], 
            'username' => ['string'],
            'account_type' => ['int'],
        ]);

        $enforcer->update($form_field);

        return back()->with('message', 'Admin Data Updated');
    }

    /**
     * Enable a specific User
     */
    public function enable(int $id)
    {
        $user = AdminUser::find($id);
        $user->update([
            'active' => 1
        ]);

        return back()->with('message', 'User Enabled');
    }

    /**
     * Disable a specific User
     */
    public function disable(int $id)
    {
        $user = AdminUser::find($id);
        $user->update([
            'active' => 0
        ]);

        return back()->with('message', 'User Disabled');
    }

    /**
     * Delete a specific User
     */
    public function destroy(int $id)
    {
        $enforcer = AdminUser::find($id);
        $enforcer->delete();

        return redirect()->route('admins.index')->with('message', 'Enforcer #' . $enforcer->id . ','. $enforcer->name() . ', Successfully Deleted from the Database.');
    }


    // // Show the form to create a new admin user
    // public function create()
    // {
    //     return view('admins.users.create');
    // }

    // // Store the new admin user
    // public function store(Request $request)
    // {
    //     // Validate the input data
    //     $validatedData = $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|email|unique:admin_users,email', // Checks if email is unique in admin_users table
    //         'password' => 'required|string|min:8',
    //     ]);

    //     // If validation passes, proceed with user creation
    //     AdminUser::create([
    //         'name' => $validatedData['name'],
    //         'email' => $validatedData['email'],
    //         'password' => Hash::make($validatedData['password']),
    //     ]);

    //     return redirect()->back()->with('success', 'Admin user created successfully!');
    // }


    // // List all admin users
    // public function index()
    // {
    //     $adminUsers = AdminUser::all();
    //     return view('admins.users.index', compact('adminUsers'));
    // }

    // // Edit admin user
    // public function edit($id)
    // {
    //     $adminUser = AdminUser::findOrFail($id);
    //     return view('admins.users.edit', compact('adminUser'));
    // }

    // // Update admin user
    // public function update(Request $request, $id)
    // {
    //     $request->validate([
    //         'name' => 'required|string|max:255',
    //         'email' => 'required|string|email|max:255|unique:users,email,'.$id,
    //         'password' => 'nullable|string|min:8|confirmed',
    //     ]);

    //     $user = AdminUser::findOrFail($id);
    //     $user->name = $request->name;
    //     $user->email = $request->email;
    //     if ($request->filled('password')) {
    //         $user->password = bcrypt($request->password);
    //     }
    //     $user->save();

    //     return redirect()->route('admins.index')->with('success', 'Admin user updated successfully.');
    // }

    // // Delete admin user
    // public function destroy($id)
    // {
    //     $user = AdminUser::findOrFail($id);
    //     $user->delete();
    //     return redirect()->route('admins.index')->with('success', 'Admin user deleted successfully.');
    // }
}
