<?php

namespace App\Http\Controllers;

use App\Models\LocLocality;
use App\Models\LocState;
use App\Models\User;
use Illuminate\Http\Request;

class UserAdminController extends Controller
{
    /**
     * View All User records
     */
    public function index()
    {
        $all = User::all();
        return view(
            'pages.users.index',
            [
                'taxUsers' => $all,
            ]
        );
    }

    /**
     * Show Create User Page
     */
    public function create()
    {
        $locState = LocState::all();
        $locLocality = LocLocality::all();
        return view(
            'pages.users.create',
            [
                'locStates' => $locState,
                'locLocalities' => $locLocality,
            ]
        );
    }

    /**
     * Display a specific User Page
     */
    public function show(int $id)
    {
        $user = User::find($id);

        return view(
            'pages.users.show',
            [
                'taxUser' => $user,
            ]
        );
    }

    /**
     * Edit a specific User Page
     */
    public function edit(int $id)
    {
        $locState = LocState::all();
        $locLocality = LocLocality::all();
        $user = User::find($id);

        return view(
            'pages.users.edit',
            [
                'taxUser' => $user,
                'locStates' => $locState,
                'locLocalities' => $locLocality,
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
            'business_name' => ['required', 'string'],
            'state' => ['required', 'string'],
            // 'locality' => ['required', 'string'],
            'username' => ['required', 'string'],
            'account_type' => ['required', 'int'],
        ]);

        $form_field['locality'] =  LocLocality::inRandomOrder()->first()->code;
        $form_field['password'] = bcrypt($form_field['password']);
        
        $form_field['username'] = $form_field['last_name'] . mt_rand(0, 10000);

        $user = User::create($form_field);

        return back()->with('message', 'Account Created Successfully'); 
    }

    /**
     * Update a specific User Data
     */
    public function update(Request $request, int $id)
    {
        $user = User::find($id);

        $form_field =  $request->validate([
            'first_name' => ['string'],
            'middle_name' => ['string'],
            'last_name' => ['string'],
            'email' => ['string', 'email'],
            'phone' => ['string'],
            'business_name' => ['string'],
            'state' => ['string'],
            'locality' => ['string'],
            'username' => ['string'],
            'account_type' => ['int'],
        ]);

        return back()->with('message', 'User Data Updated');
    }

    /**
     * Enable a specific User
     */
    public function enable(int $id)
    {
        $user = User::find($id);
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
        $user = User::find($id);
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
        $user = User::find($id);
        $user->delete();

        return back()->with('message', 'User Deleted');
    }
}
