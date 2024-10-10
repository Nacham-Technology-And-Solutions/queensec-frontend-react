<?php

namespace Database\Factories;

use App\Models\AdminUser;
use App\Models\LocLocality;
use App\Models\LocState;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminUserFactory extends Factory
{
    protected $model = AdminUser::class;

    public function definition()
    {
        return [
            'first_name' => $this->faker->firstName(),
            'middle_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'username' => $this->faker->userName(),
           
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'phone' => $this->faker->unique()->phoneNumber(),
            'password' => Hash::make('password'), // you can change this to a random password
            'remember_token' => Str::random(10),
            'image_url' => $this->faker->imageUrl(), 
            'account_type' => rand(0, 3), 
        ];
    }
}
 
