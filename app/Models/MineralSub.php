<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MineralSub extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'mineral_id',
        'state_id',
        'hauler_type_id',
        'price',
        'active',
    ];

    public function mineralParent()
    {
        return $this->belongsTo(Mineral::class, 'mineral_id');
    }
}
