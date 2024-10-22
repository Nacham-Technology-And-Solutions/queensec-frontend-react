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
        'payer_id',
        'payee_id',
        'tx_ref',
        'flw_ref',
        'status',
        'payment_method',
        'amount',
        'payment_date',
        'flw_payload',
    ];

    
    public function scopeFilter($query, array $filters)
    {

        // Filter the items by the tag clicked/selected
        if ($filters['status'] ?? false) {
            $query->where('status', 'like', '%' . request('status') . '%');
        }

        // Filter the items by the tag clicked/selected
        if ($filters['payment_method'] ?? false) {
            $query->where('payment_method', 'like', '%' . request('payment_method') . '%');
        }

        // Filter The Items by the search content
        if ($filters['search'] ?? false) {
            $query->where('id', 'like', '%' . request('search') . '%');
            // ->orWhere('payee_id', 'like', '%' . request('search') . '%');
        }
    }

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id')->get()->first();
    }

    public function payee()
    {
        return $this->belongsTo(User::class, 'payee_id')->get()->first();
    }
    
    public function mineral()
    {
        return $this->order()->mineral();
    }

    public function payer()
    {
        return $this->belongsTo(User::class, 'payer_id')->get()->first();
    }
    
    public function hauler()
    {
        return $this->order()->hauler(); 
    } 

    public function ticketIssued()
    {
        return $this->order()->ticketIssued(); 
    } 

    public function ticket()
    {
        return $this->order()->ticket(); 
    } 
}
