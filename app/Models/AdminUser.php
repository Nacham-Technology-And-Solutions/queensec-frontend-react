<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class AdminUser extends Authenticatable
{

    use Notifiable, HasFactory;

    protected $table = 'admin_users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'middle_name',
        'last_name',
        'username',
        'email',
        'phone',
        'account_type',
        'password',
        'active',
        'google_id',
        'image_url'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Return the full name of the user.
     * by combining the first, middle and last names 
     */
    public function name()
    {
        return $this->first_name . " " . $this->last_name;
    }

    public function userType()
    {
        $user_type = "User";
        // 0 - Moderator || 1 - Customer Care || 2 - Admin || 3 - Investor 

        if ($this->account_type == 0) {
            $user_type = "Moderator";
        } else 
        if ($this->account_type == 1) {
            $user_type = "Customer Care";
        } else 
        if ($this->account_type == 2) {
            $user_type = "Admin";
        } else 
        if ($this->account_type == 3) {
            $user_type = "Investor";
        }

        return $user_type;
    }
}
