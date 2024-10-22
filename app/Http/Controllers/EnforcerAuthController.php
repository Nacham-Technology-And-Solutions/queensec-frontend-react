<?php

namespace App\Http\Controllers;

use App\Models\EnforcerUser;
use App\Models\User;
use App\Models\UserProfileImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Auth;

class EnforcerAuthController extends  Controller
{


    public function login(Request $request)
    {
        if (!isset($request['login-type'])) {
            return response(
                [
                    'success' => false,
                    'message' => 'Login Type Not Set'
                    // 'data' => null
                ],
                404
            );
        }
        if ($request['login-type'] == 'normal') {

            $fields = $request->validate(
                [
                    'email' => 'required|string',
                    'password' => 'required|string',
                ]
            );

            // Check for the user with their email
            $user = EnforcerUser::where('email', $fields['email'])->first();

            // Check if password is correct  or email found
            if (!$user || !Hash::check($fields['password'], $user->password)) {
                return response(
                    [
                        'success' => false,
                        'message' => 'Check Credetials',
                        'data' => null
                    ],
                    401
                );
            }
            // Generate Login Token
            $token = $user->createToken('myapptoken')->plainTextToken;

            $response = [
                'success' => true,
                'message' => 'Account Logged In Successfully',
                'data' => [
                    'user' => $user,
                    'access_token' => $token,
                ]
            ];

            return response($response, 200);
        } else

        if ($request['login-type'] == 'google') {

            $fields = $request->validate(
                [
                    'email' => 'required|string',
                    'google_id' => 'required|string',
                ]
            );

            // Check if a user with the Google ID already exists.
            $user = EnforcerUser::where('google_id', $fields['google_id'])->first();
            $found_google_account = false;
            if ($user) {
                $found_google_account = true;
            } else {
                // Check if a user with the Google ID already exists.
                $user = EnforcerUser::where('email', $fields['email'])->first();
            }

            // Check if email is found
            if (!$user) {
                return response(
                    [
                        'success' => false,
                        'message' => 'Check Credetials',
                        // 'message' => json_encode($fields),
                        'data' => null
                    ],
                    401
                );
            }

            if (!$found_google_account) {
                $user->update([
                    'google_id' => $fields['google_id']
                ]);
            }

            // Generate Login Token
            $token = $user->createToken('myapptoken')->plainTextToken;

            $response = [
                'success' => true,
                'message' => 'Account Logged In With Google Successfully',
                'data' => [
                    'user' => $user,
                    'access_token' => $token,
                ]
            ];

            return response($response, 200);
        }
    }

    public function logout(Request $request)
    {
        Auth::guard('enforcer')->user()->tokens()->delete();

        $response = [
            'success' => true,
            'message' => 'Account Logged Out',
            'data' => null
        ];

        return response($response, 200);
    }

    public function register(Request $request)
    {
        $form_field =  $request->validate([
            'first_name' => ['required', 'string'],
            'middle_name' => ['required', 'string'],
            'last_name' => ['required', 'string'],
            'email' => ['required', 'string', 'unique:users,email'],
            'phone' => ['string'],
            'password' => ['required', 'string'],
            'state' => ['required', 'string'],
            'username' => ['required', 'string'],
        ]);

        // dd($form_field);
        // dd($request);
        $form_field['password'] = bcrypt($form_field['password']);

        if (isset($request['google_id'])) {
            $form_field['google_id'] = $request['google_id'];
        }

        $form_field['username'] = $form_field['last_name'] . mt_rand(0, 10000);

        // dd($response);
        // dd($form_field);
        $user = EnforcerUser::create($form_field);

        event(new Registered($user));

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'success' => true,
            'message' => 'Account Created Successfully',
            'data' => [
                'user' => $user,
                'access_token' => $token,
            ]
        ];

        return response($response, 201);
    }


    public function profileData(Request $request)
    {
        $response = [
            'success' => true,
            'message' => 'User Data Retrieved.',
            'data' => Auth::guard('enforcer')->user()
        ];

        return response($response, 201);
    }
}
