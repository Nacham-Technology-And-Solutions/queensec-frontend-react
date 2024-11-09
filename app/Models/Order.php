<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'payer_id',
        'payee_id',
        'payee_hauler_id',
        'mineral_id',
        'total_amount',
        'status',
    ];

    public function scopeFilter($query, array $filters)
    {

        // Filter the items by the tag clicked/selected
        if ($filters['status'] ?? false) {
            $query->where('status', 'like', '%' . request('status') . '%');
        }

        // Filter The Items by the search content
        if ($filters['search'] ?? false) {
            $query->where('id', 'like', '%' . request('search') . '%');
            // ->orWhere('payee_id', 'like', '%' . request('search') . '%');
        }
    }

    public function payer()
    {
        return $this->belongsTo(User::class, 'payer_id')->get()->first();
    }

    public function payee()
    {
        return $this->belongsTo(User::class, 'payee_id')->get()->first();
    }

    public function hauler()
    {
        return $this->belongsTo(Hauler::class, 'payee_hauler_id')->get()->first();
    }

    public function mineral()
    {
        return $this->belongsTo(Mineral::class, 'mineral_id')->get()->first();
    }

    public function payments()
    {
        return $this->hasMany(Payment::class, 'order_id')->get();
    }

    public function paymentsFailed()
    {

        // $table->enum('status', ['successful', 'failed', 'pending', 'abandoned', 'cancelled', 'reversed', 'timeout', 'processing', 'initiated', 'partially_successful', 'on_hold'])->default('initiated');

        return Payment::where('order_id', '=', $this->id)
            ->where(function ($query) {
                $query->orWhere('status', 'cancelled')
                    ->orWhere('status',  'reversed')
                    ->orWhere('status',  'abandoned')
                    ->orWhere('status',  'timeout');
            })
            ->get()->count();
    }

    public function histories()
    {
        return $this->hasMany(OrderHistory::class)->get();
    }


    public function paid()
    {
        $all_payments = $this->hasMany(Payment::class, 'order_id')->get();
        $paid = 0;
        // ['successful', 'failed', 'pending', 'abandoned', 'cancelled', 'reversed', 'timeout', 'processing', 'initiated', 'partially_successful', 'on_hold']
        foreach ($all_payments as $payment) {
            if ($payment->status == "successful") {
                $paid += $payment->amount;
            }
        }
        return $paid;
    }

    public function balance()
    {
        $paid = $this->paid();
        $total = $this->total_amount;
        $balance = $total - $paid;

        return $balance;
    }

    public function ticketIssued()
    {
        $issued = false;
        if ($this->status == "completed") {
            $ticket = $this->hasOne(TaxTicket::class, 'order_id')->get()->first();
            if ($ticket) {
                $issued = true;
            }
        }
        return $issued;
    }

    public function IssueTicket()
    {
        $ticket = null;
        if (!$this->ticketIssued()) {
            $ticketData = [
                'price' => $this->total_amount,
                'vehicle_id' => $this->payee_hauler_id,
                'vehicle_owner_id' => $this->payee_id,
                'order_id' => $this->id,
                'driver_name' => 'No Name Provided',
                'status' => 'active',
                'valid_from' => Carbon::now(),
                'valid_until' => Carbon::now()->addWeek(),
                'enforcer_check_status' => "not_checked",
            ];

            $ticket = TaxTicket::create($ticketData);
        } else {

            $ticket = $this->ticket();
        }
        return $ticket;
    }

    public function ticket()
    {
        $ticket = $this->hasOne(TaxTicket::class, 'order_id')->get()->first();
        return $ticket;
    }
}


// $table->enum('payment_type', ['full', 'installment'])->default('full');
// $table->enum('status', ['pending', 'completed', 'cancelled'])->default('pending');