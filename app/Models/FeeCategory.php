<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeeCategory extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

     protected $fillable = [
        'image',
        'name',
        'price',
        'unit_price',
        'unit'
    ];

    public static function fromMineral(Mineral $mineral)
    {
        $feeCat = new FeeCategory();
        $feeCat->image = $mineral->img;
        $feeCat->name = $mineral->name;
        $feeCat->price = $mineral->royalty_rate;
        $feeCat->unit = $mineral->measurement_unit;

        return $feeCat;
    }
}
