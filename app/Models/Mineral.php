<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mineral extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'advalorem',
        'market_value',
        'royalty_rate',
        'measurement_unit',
        'description',
        'img',
        'active',
    ];

    public function orders()
    {
        return $this->hasMany(Order::class, 'mineral_id')->get();
    }
    
    public function mineralSubs()
    {
        return $this->hasMany(MineralSub::class, 'mineral_id');
    }
}
