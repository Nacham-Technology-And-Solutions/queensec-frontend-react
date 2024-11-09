<?php

namespace App\Http\Controllers;

use App\Models\FeeCategory;
use App\Models\Hauler;
use App\Models\HaulerType;
use App\Models\LocLocality;
use App\Models\LocState;
use App\Models\Mineral;
use App\Models\MineralSub;
use App\Models\Order;
use App\Models\Transaction;
use App\Models\User;
use Carbon\Carbon;
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
    public function feeCategories(Request $request)
    {
        $fields = $request->validate(
            [
                'hauler_id' => 'required|string',
            ]
        );

        $hauler = Hauler::where('active',  1)
            ->where('id', $fields['hauler_id'])
            ->where('user_id',   Auth::user()->id)->get();

        $loc_state = LocState::where('active',  1)->where('code',  Auth::user()->state)->get();

        $getTheSubs = MineralSub::where('active', 1)
            ->where('state_id', $loc_state->id)
            ->where('hauler_type_id', $hauler->haulerType()->id)->get();

        $fee_categories = $getTheSubs->map(function (MineralSub $mineral_sub, int $key) {

            // Compile The Category
            $feeCat = new FeeCategory();
            $feeCat->image = $mineral_sub->mineralParent()->get()->img;
            $feeCat->name = $mineral_sub->mineralParent()->get()->name;
            $feeCat->price = $mineral_sub->price;
            $feeCat->unit_price = $mineral_sub->mineralParent()->get()->royalty_rate;
            $feeCat->unit = $mineral_sub->mineralParent()->get()->measurement_unit;

            return $feeCat;
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
     * List of Available Locations
     */
    public function getLocations()
    {
        // Check for the user with their email
        $locations = LocState::where('active', '=', 1)->get();

        $formated = $locations->map(function (LocState $loc_state, int $key) {
            $ls = [
                "name" => $loc_state->name,
                "code" => $loc_state->code,
                "localities" => $loc_state->locLocalities()->map(function (LocLocality $loc_loc, int $key) {
                    $lcs = [
                        "name" => $loc_loc->name,
                        "code" => $loc_loc->code,
                    ];
                    return $lcs;
                })
            ];
            return $ls;
        });

        return response(
            [
                'success' => true,
                'message' => 'Fee Categories Loaded',
                'data' => $formated
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

    /**
     * get Transactions Chart
     * getTotalPricesByWeekday
     */
    public function transactionsChart()
    {
        // Retrieve all records with the price and created_at fields
        $transactions = Order::select('total_amount', 'created_at')
            ->where('payee_id', Auth::user()->id)
            ->where('status', 'completed')->get();

        // Initialize an array to store totals for each day of the week
        $weekTotals = [
            'monday' => 0,
            'tuesday' => 0,
            'wednesday' => 0,
            'thursday' => 0,
            'friday' => 0,
            'saturday' => 0,
            'sunday' => 0,
        ];

        // Loop through each transaction to add the price to the corresponding weekday
        foreach ($transactions as $transaction) {
            $dayOfWeek = strtolower(Carbon::parse($transaction->created_at)->format('l')); // e.g., 'monday', 'tuesday'
            $weekTotals[$dayOfWeek] += $transaction->total_amount; // Sum the prices
        }

        return response(
            [
                'success' => true,
                'message' => 'Transactions Chart Loaded Successfully',
                'data' => $weekTotals
            ],
            200
        );
    }

    /**
     * List of Hauler Types Available
     */
    public function getHaulerTypes()
    {
        // Check for the user with their email
        $haulerTypes = HaulerType::where('active', '=', 1)->get();

        return response(
            [
                'success' => true,
                'message' => 'Hauler Types Loaded Successfully',
                'data' => $haulerTypes
            ],
            200
        );
    }

    /**
     * List of User Haulers
     */
    public function getHaulers()
    {
        // Check for the user with their email
        $hauler = Hauler::where('active', '=', 1)->where('user_id', '=', Auth::user()->id)->get();

        return response(
            [
                'success' => true,
                'message' => 'User Haulers Loaded Successfully',
                'data' => $hauler
            ],
            200
        );
    }


    /**
     * Add Hauler to a user account
     */
    public function addHauler(Request $request)
    {
        $fields = $request->validate(
            [
                'name' => 'required|string',
                'number_plate' => 'required|string',
                'hauler_type_id' => 'required|string',
            ]
        );
        $fields['user_id'] = Auth::user()->id;

        $newHauler = Hauler::create($fields);

        return response(
            [
                'success' => true,
                'message' => 'Hauler Added Successfully',
                'data' => $newHauler
            ],
            201
        );
    }


    /**
     * Edit Hauler in a user account
     */
    public function editHauler(Request $request)
    {
        $fields = $request->validate(
            [
                'hauler_id' => 'required',
                'name' => 'required|string',
                'number_plate' => 'required|string',
            ]
        );

        $fields['user_id'] = Auth::user()->id;

        $hauler = Hauler::find($fields['hauler_id']);

        $hauler->update($fields);

        return response(
            [
                'success' => true,
                'message' => 'Hauler edited Successfully',
                'data' => $hauler
            ],
            201
        );
    }

    /**
     * Delete Hauler in a user account
     */
    public function deleteHauler(int $id)
    {

        $hauler = Hauler::find($id);

        $hauler->delete();

        return response(
            [
                'success' => true,
                'message' => 'Hauler Deleted Successfully',
                'data' => $hauler
            ],
            200
        );
    }
}
