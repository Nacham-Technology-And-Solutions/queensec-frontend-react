<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

     protected $fillable = [
        'mineral_image',
        'mineral_name',
        'price',
        'unit',
        'status',
        'date',
        'order',
        'ticket',
        'payments',
    ];

    public static function fromOrder(Order $order)
    {
        $transaction = new Transaction();
        $transaction->mineral_image = $order->mineral()->img;
        $transaction->mineral_name = $order->mineral()->name;
        $transaction->price = $order->total_amount;
        $transaction->unit = $order->mineral()->measurement_unit;
        $transaction->status = $order->status;
        $transaction->date = $order->created_at;
        $transaction->order = $order;
        $transaction->ticket = $order->ticket();
        $transaction->payments = $order->payments();

        return $transaction;
    }
}
