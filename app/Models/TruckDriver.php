<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TruckDriver extends Model
{
    use HasFactory;

    // Specify which attributes are mass assignable
    protected $fillable = [
        'name',
        'email',
        'phone_number',
    ];
}
