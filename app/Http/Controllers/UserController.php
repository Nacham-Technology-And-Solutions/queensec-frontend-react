<?php

namespace App\Http\Controllers;

use App\Models\FeeCategory;
use App\Models\Mineral;
use App\Models\Order;
use App\Models\Transaction;
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


    /**
     * List of Minerals for Fee Categories
     */
    public function feeCategories()
    {
        // Check for the user with their email
        $minerals = Mineral::where('active', '=', 1)->get();

        $fee_categories = $minerals->map(function (Mineral $mineral, int $key) {
            return FeeCategory::fromMineral($mineral);
        });

        return response(
            [
                'success' => true,
                'message' => 'Fee Categories Loaded',
                'data' => $fee_categories
            ],
            200
        );
    }


    /**
     * List of Transactions
     */
    public function transactions()
    {
        // Check for the user with their email
        $orders = Order::where('payee_id', '=', Auth::user()->id)->get();

        $transaction = $orders->map(function (Order $order, int $key) {
            return Transaction::fromOrder($order);
        });

        return response(
            [
                'success' => true,
                'message' => 'Transactions Loaded Successfully',
                'data' => $transaction
            ],
            200
        );
    }
}
