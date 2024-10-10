<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    /**
     * Generate Tax ID.
     */
    public function generateTaxID()
    {
        // Check for the user with their email
        $user = User::where('email', Auth::user()->email)->first();
        
        if ($user->tax_id != null) {
            $newIdex = str_pad(mt_rand(0, 100000), 6, '0', STR_PAD_LEFT);
            $tax_id = $user->state . "/" . $user->locality . "/" . $newIdex;

            $user->update([
                'tax_id' =>  $tax_id
            ]);
            return true;
        }
        
        return false;
    }
}
