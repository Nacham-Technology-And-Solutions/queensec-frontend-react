<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HaulerType extends Model
{
    use HasFactory;

    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'volume',
        'description',
        'img',
        'active',
    ];


    public function instances()
    {
        return $this->hasMany(Hauler::class, 'hauler_type_id')->get();
    }

    // public function orders()
    // {
        // payee_hauler_id
    //     return $this->hasMany(Order::class, 'payer_id')->get();
    // }
}
