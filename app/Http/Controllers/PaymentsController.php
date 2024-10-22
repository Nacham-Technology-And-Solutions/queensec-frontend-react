<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use Carbon\Carbon;
use Illuminate\Http\Request;

class PaymentsController extends Controller
{
    
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $payments = Payment::latest()->filter(request(['search', 'status', 'payment_type']))->paginate(20);


        // Today
        $todayRecords = Payment::whereDate('created_at', Carbon::today())->count();

        // Yesterday
        $yesterdayRecords = Payment::whereDate('created_at', Carbon::yesterday())->count();

        // This Month
        $thisMonthRecords = Payment::whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()])->count();

        $states = [
            'pending' => Payment::where('status', 'pending')->count(),
            'completed' => Payment::where('status', 'completed')->count(),
            'cancelled' => Payment::where('status', 'cancelled')->count(),
            // 'full' => Payment::where('payment_type', 'full')->count(),
            // 'installment' => Payment::where('payment_type', 'installment')->count(),
            'all' => Payment::all()->count(),
            'today' => $todayRecords,
            'yesterday' => $yesterdayRecords,
            'month' => $thisMonthRecords
        ];

        return view(
            'pages.payments.index',
            [
                'payments' => $payments,
                'states' => $states
            ]
        );
    
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'advalorem' => ['required', 'int'],
            'market_value' => ['required', 'decimal:0,2'],
            'royalty_rate' => ['required', 'decimal:0,2'],
            'measurement_unit' => ['required', 'string'],
            'description' => ['string'],
            'img' => ['string']
        ]);

        $payment = Payment::create($form_field);

        return back()->with('message', 'Payment Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $payment = Payment::find($id);

        return view(
            'pages.payments.show',
            [
                'payment' => $payment,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $payment = Payment::find($id);

        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'advalorem' => ['required', 'int'],
            'market_value' => ['required', 'decimal:0,2'],
            'royalty_rate' => ['required', 'decimal:0,2'],
            'measurement_unit' => ['required', 'string'],
            'description' => ['string'],
            'img' => ['string']
        ]);

        $payment->update($form_field);

        return back()->with('message', 'Payment Updated Successfully');
    }

    // /**
    //  * Remove the specified resource from storage.
    //  */
    // public function destroy(string $id)
    // {
    //     $payment = Payment::find($id);
    //     $payment->delete();

    //     return redirect()->route('payments.index')->with('message', 'Payment #' . $payment->id . ',' . $payment->name . ', Successfully Deleted from the Database.');
    // }

}
