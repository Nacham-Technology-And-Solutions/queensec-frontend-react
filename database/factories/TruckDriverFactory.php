<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\TruckDriver;
use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TruckDriver>
 */
class TruckDriverFactory extends Factory
{
    protected $model = TruckDriver::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'phone_number' => $this->faker->phoneNumber,
            // 'password' => Hash::make('12345678'), // All accounts have the same password
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
