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
        
        
        'transaction_id',
        'tx_ref',
        'flw_ref',
        'amount',
        'currency',
        'charged_amount',
        'app_fee',
        'merchant_fee',
        'processor_response',
        'status',
        'payment_type', // 'payment_method',
        'account_id',
        'amount_settled',
        'card',
        'customer',
        'payment_date', 
        
        'flw_payload',
    ];

    // {
    //     "status": "success",
    //     "message": "Transaction fetched successfully",
    //     "data": {
    //       "id": 1163068,
    //       "tx_ref": "akhlm-pstmn-blkchrge-xx6",
    //       "flw_ref": "FLW-M03K-02c21a8095c7e064b8b9714db834080b",
    //       "device_fingerprint": "N/A",
    //       "amount": 3000,
    //       "currency": "NGN",
    //       "charged_amount": 3000,
    //       "app_fee": 1000,
    //       "merchant_fee": 0,
    //       "processor_response": "Approved",
    //       "auth_model": "noauth",
    //       "ip": "pstmn",
    //       "narration": "Kendrick Graham",
    //       "status": "successful",
    //       "payment_type": "card",
    //       "created_at": "2020-03-11T19:22:07.000Z",
    //       "account_id": 73362,
    //       "amount_settled": 2000,
    //       "card": {
    //         "first_6digits": "553188",
    //         "last_4digits": "2950",
    //         "issuer": " CREDIT",
    //         "country": "NIGERIA NG",
    //         "type": "MASTERCARD",
    //         "token": "flw-t1nf-f9b3bf384cd30d6fca42b6df9d27bd2f-m03k",
    //         "expiry": "09/22"
    //       },
    //       "customer": {
    //         "id": 252759,
    //         "name": "Kendrick Graham",
    //         "phone_number": "0813XXXXXXX",
    //         "email": "user@example.com",
    //         "created_at": "2020-01-15T13:26:24.000Z"
    //       }
    //     }
    //   }
    
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
