<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocState extends Model
{
    use HasFactory;

    protected $table = 'loc_states';


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'name',
        'code',
        'active',
    ];

    public function locLocalities()
    {
        return $this->hasMany(LocLocality::class, 'locstate_id')->get();
    }
    
    public function users()
    {
        return User::where("state", "=", $this->code)->get();
    }


}
