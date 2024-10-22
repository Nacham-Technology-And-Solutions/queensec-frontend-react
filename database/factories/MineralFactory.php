<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\mineral>
 */
class MineralFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->userName(),
            'advalorem' => rand(0, 100), 
            'market_value' => rand(10000, 100000),
            'royalty_rate' => rand(1000, 10000),
            'measurement_unit' => "Tons",
        ];
    }
}
