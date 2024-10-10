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
        'vehicle_type',
        'user_id',
    ];

    
    public function owner()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
