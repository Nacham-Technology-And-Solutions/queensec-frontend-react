<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\AdminUser;
use Illuminate\Support\Facades\Hash;
class AdminUserController extends Controller
{
    // Show the form to create a new admin user
    public function create()
    {
        return view('admins.users.create');
    }

    // Store the new admin user
    public function store(Request $request)
    {
        // Validate the input data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:admin_users,email', // Checks if email is unique in admin_users table
            'password' => 'required|string|min:8',
        ]);

        // If validation passes, proceed with user creation
        AdminUser::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        return redirect()->back()->with('success', 'Admin user created successfully!');
    }


    // List all admin users
    public function index()
    {
        $adminUsers = AdminUser::all();
        return view('admins.users.index', compact('adminUsers'));
    }

    // Edit admin user
    public function edit($id)
    {
        $adminUser = AdminUser::findOrFail($id);
        return view('admins.users.edit', compact('adminUser'));
    }

    // Update admin user
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,'.$id,
            'password' => 'nullable|string|min:8|confirmed',
        ]);

        $user = AdminUser::findOrFail($id);
        $user->name = $request->name;
        $user->email = $request->email;
        if ($request->filled('password')) {
            $user->password = bcrypt($request->password);
        }
        $user->save();

        return redirect()->route('admins.users.index')->with('success', 'Admin user updated successfully.');
    }

    // Delete admin user
    public function destroy($id)
    {
        $user = AdminUser::findOrFail($id);
        $user->delete();

        return redirect()->route('admins.users.index')->with('success', 'Admin user deleted successfully.');
    }
}
