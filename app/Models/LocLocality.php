<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocLocality extends Model
{
    use HasFactory;

    protected $table = 'loc_localities';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'code',
        'locstate_id',
        'active',
    ];

    public function locState()
    {
        return $this->belongsTo(LocState::class, 'locstate_id')->get()->first();
    }

    public function users()
    {
        return User::where("locality", "=", $this->code)->get();
    }

}
