<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaxTicket extends Model
{
    use HasFactory;

    protected $fillable = [ 
        'price',
        'vehicle_id',
        'vehicle_owner_id',
        'order_id',
        'driver_name',
        'status',
        'valid_from',
        'valid_until',
        'enforcer_check_status'
    ];

    // Relation to Orders
    public function orders()
    {
        return $this->belongsTo(Order::class, 'order_id');
    }

    // Check if retrieved ticket is past expiration.
    protected static function boot()
    {
        parent::boot();

        static::retrieved(function ($ticket) {
            if ($ticket->status == 'active' && $ticket->valid_until && Carbon::parse($ticket->valid_until)->isPast()) {
                $ticket->status = 'expired';
                $ticket->save();
            }
        });
    }
}
