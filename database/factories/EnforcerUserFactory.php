<?php

namespace Database\Factories;

use App\Models\LocState;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\EnforcerUser>
 */
class EnforcerUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'first_name' => $this->faker->firstName(),
            'middle_name' => $this->faker->firstName(),
            'last_name' => $this->faker->lastName(),
            'username' => $this->faker->userName(),           
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'state' => LocState::inRandomOrder()->first()->code,
            'phone' => $this->faker->unique()->phoneNumber(),
            'password' => Hash::make('password'), // you can change this to a random password
            'remember_token' => Str::random(10),
            'image_url' => $this->faker->imageUrl(),  
        ];
    }
}
