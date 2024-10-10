<?php

namespace App\Models;

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
        'payer_vehicle_id',
        'mineral_id',
        'total_amount',
        'payment_type',
        'status',
    ];

    public function payer()
    {
        return $this->belongsTo(User::class, 'payer_id');
    }

    public function payee()
    {
        return $this->belongsTo(User::class, 'payee_id');
    }

    public function haulerVehicle()
    {
        return $this->belongsTo(Hauler::class, 'payer_vehicle_id');
    }

    public function mineral()
    {
        return $this->belongsTo(Mineral::class, 'mineral_id');
    }

}
