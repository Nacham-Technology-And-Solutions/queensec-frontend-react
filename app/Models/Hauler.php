<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hauler extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'number_plate',
        'hauler_type_id',
        'user_id',
    ];


    
    public function haulerType()
    {
        return $this->belongsTo(HaulerType::class, 'hauler_type_id')->get()->first();
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'payee_hauler_id')->get();
    }
    
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id')->get()->first();
    }

}
