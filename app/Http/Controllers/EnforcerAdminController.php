<?php

namespace App\Http\Controllers;

use App\Models\EnforcerUser;
use App\Models\LocLocality;
use App\Models\LocState;
use App\Models\User;
use Illuminate\Http\Request;

class EnforcerAdminController extends Controller
{
    /**
     * View All User records
     */
    public function index()
    {
        $all = EnforcerUser::all();
        return view(
            'pages.enforcers.index',
            [
                'enforcers' => $all,
            ]
        );
    }

    /**
     * Show Create User Page
     */
    public function create()
    {
        $locStates = LocState::all();
        return view(
            'pages.enforcers.create',
            [
                'locStates' => $locStates,
            ]
        );
    }

    /**
     * Display a specific User Page
     */
    public function show(int $id)
    {
        $enforcer = EnforcerUser::find($id);

        return view(
            'pages.enforcers.show',
            [
                'enforcer' => $enforcer,
            ]
        );
    }

    /**
     * Edit a specific User Page
     */
    public function edit(int $id)
    {
        $locStates = LocState::all();
        $enforcer = EnforcerUser::find($id);

        return view(
            'pages.enforcers.edit',
            [
                'enforcer' => $enforcer,
                'locStates' => $locStates,
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
            'state' => ['required', 'string'],
        ]);
 
        $form_field['password'] = bcrypt($form_field['password']);
        
        $form_field['username'] = $form_field['last_name'] . mt_rand(0, 10000);

        $user = EnforcerUser::create($form_field);

        return back()->with('message', 'Account Created Successfully'); 
    }

    /**
     * Update a specific User Data
     */
    public function update(Request $request, int $id)
    {
        $enforcer = EnforcerUser::find($id);

        $form_field =  $request->validate([
            'first_name' => ['string'],
            'middle_name' => ['string'],
            'last_name' => ['string'],
            'email' => ['string', 'email'],
            'phone' => ['string'],
            'state' => ['string'],
            'username' => ['string'],
        ]);

        $enforcer->update($form_field);

        return back()->with('message', 'Enforcer Data Updated');
    }

    /**
     * Enable a specific User
     */
    public function enable(int $id)
    {
        $user = EnforcerUser::find($id);
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
        $user = EnforcerUser::find($id);
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
        $enforcer = EnforcerUser::find($id);
        $enforcer->delete();

        return redirect()->route('enforcers.index')->with('message', 'Enforcer #' . $enforcer->id . ','. $enforcer->name() . ', Successfully Deleted from the Database.');
    }
}
