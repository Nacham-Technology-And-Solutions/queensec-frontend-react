<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderHistory;
use Carbon\Carbon;

class OrderHistoryController extends Controller
{
    //


    function logOrderHistory($order, $action, $oldValue, $newValue, $changedBy)
    {
        OrderHistory::create([
            'order_id' => $order->id,
            'ticket_id' => $order->ticket_id,
            'payment_type' => $order->payment_type,
            'installment_status' => $newValue['installment_status'] ?? null, // Only if applicable
            'amount_paid' => $newValue['amount_paid'],
            'total_amount' => $order->total_amount,
            'payment_status' => $newValue['payment_status'],
            'status' => $newValue['status'],
            'action' => $action,
            'old_value' => json_encode($oldValue),
            'new_value' => json_encode($newValue),
            'changed_by' => $changedBy,
            'payment_method' => $newValue['payment_method'] ?? null,
            'reference_code' => $newValue['reference_code'] ?? null,
        ]);
    }
}

// $order = Order::find($orderId); // Assuming you have the order ID
// $oldValue = $order->toArray(); // Get the old state of the order before payment

// // Simulating new values after payment
// $newValue = [
//     'installment_status' => 'installment_1_paid',
//     'amount_paid' => 5000.00,
//     'payment_status' => 'paid',
//     'status' => 'pending_installment', // Next step if installment, else 'completed'
//     'payment_method' => 'credit_card',
//     'reference_code' => 'TX1234567890'
// ];

// // Log order payment activity
// logOrderHistory($order, 'payment_received', $oldValue, $newValue, Auth::user()->name);
