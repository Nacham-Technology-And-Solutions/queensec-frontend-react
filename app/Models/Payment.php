<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'order_id',
        'tx_ref',
        'flw_ref',
        'status',
        'payment_method',
        'amount',
        'payment_date',
        'flw_payload',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }
    
}
