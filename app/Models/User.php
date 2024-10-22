<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'username',
        'business_name',
        'state',
        'locality',
        'email',
        'phone',
        'account_type',
        'password',
        'image_url',
        'tax_id',
        'active',
        'google_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    /**
     * Return the full name of the user.
     * by combining the first, middle and last names 
     */
    public function name()
    {
        return $this->first_name . " " . $this->last_name;
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'payer_id')->get();
    }

    public function tickets()
    {
        return $this->hasMany(Order::class, 'payee_id')->get();
    }

    public function haulers()
    {
        return $this->hasMany(Hauler::class, 'user_id')->get();
    }

    public function payments()
    {
        return $this->hasMany(Payment::class, 'payee_id')->get();
    }

    public function paymentsAsVender()
    {
        return $this->hasMany(Payment::class, 'payer_id')->get();
    }

    public function ticketsAsVender()
    {
        return $this->hasMany(Order::class, 'payer_id')->get();
    }

    public function address()
    {
        return $this->hasMany(Address::class, 'user_id')->first();
    }

    public function addressToLineString()
    {
        $str =  $this->hasMany(Address::class, 'user_id')->first();
        return $str->line_address . ", " . $str->city . ", " . $str->state;
    }

    public function userType()
    {
        $user_type = "User";
        // 0 - Individual || 1 - Corperate || 2 - Federal Agency 
        // 3 - State Agency || 4 - Vendor

        if ($this->account_type == 0) {
            $user_type = "Individual";
        } else 
        if ($this->account_type == 1) {
            $user_type = "Corperate";
        } else 
        if ($this->account_type == 2) {
            $user_type = "Federal Agency";
        } else 
        if ($this->account_type == 3) {
            $user_type = "State Agency";
        } else 
        if ($this->account_type == 4) {
            $user_type = "Vendor";
        }

        return $user_type;
    }
}
