<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

use function Laravel\Prompts\search;
use Carbon\Carbon;

class OrdersController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::latest()->filter(request(['search', 'status', 'payment_type']))->paginate(20);


        // Today
        $todayRecords = Order::whereDate('created_at', Carbon::today())->count();

        // Yesterday
        $yesterdayRecords = Order::whereDate('created_at', Carbon::yesterday())->count();

        // This Month
        $thisMonthRecords = Order::whereBetween('created_at', [Carbon::now()->startOfMonth(), Carbon::now()])->count();

        $states = [
            'pending' => Order::where('status', 'pending')->count(),
            'completed' => Order::where('status', 'completed')->count(),
            'cancelled' => Order::where('status', 'cancelled')->count(),
            'full' => Order::where('payment_type', 'full')->count(),
            'installment' => Order::where('payment_type', 'installment')->count(),
            'all' => Order::all()->count(),
            'today' => $todayRecords,
            'yesterday' => $yesterdayRecords,
            'month' => $thisMonthRecords
        ];

        return view(
            'pages.orders.index',
            [
                'orders' => $orders,
                'states' => $states
            ]
        );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view(
            'pages.orders.create'
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

        $order = Order::create($form_field);

        return back()->with('message', 'Order Created Successfully');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $order = Order::find($id);

        return view(
            'pages.orders.show',
            [
                'order' => $order,
            ]
        );
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $order = Order::find($id);

        return view(
            'pages.orders.edit',
            [
                'order' => $order,
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order = Order::find($id);

        $form_field =  $request->validate([
            'name' => ['required', 'string'],
            'advalorem' => ['required', 'int'],
            'market_value' => ['required', 'decimal:0,2'],
            'royalty_rate' => ['required', 'decimal:0,2'],
            'measurement_unit' => ['required', 'string'],
            'description' => ['string'],
            'img' => ['string']
        ]);

        $order->update($form_field);

        return back()->with('message', 'Order Updated Successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Order::find($id);
        $order->delete();

        return redirect()->route('orders.index')->with('message', 'Order #' . $order->id . ',' . $order->name . ', Successfully Deleted from the Database.');
    }

    /**
     * Enable a specific Order
     */
    public function enable(int $id)
    {
        $order = Order::find($id);
        $order->update([
            'active' => 1
        ]);

        return back()->with('message', 'Order Enabled');
    }

    /**
     * Disable a specific Order
     */
    public function disable(int $id)
    {
        $order = Order::find($id);
        $order->update([
            'active' => 0
        ]);

        return back()->with('message', 'Order Disabled');
    }
}
