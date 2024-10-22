<?php

namespace Database\Factories;

use App\Models\Hauler;
use App\Models\Mineral;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $pt =  ['full', 'installment'];
        $s =  ['pending', 'completed', 'cancelled'];
        return [
            'payer_id' => User::inRandomOrder()->first()->id,
            'payee_id' =>  User::inRandomOrder()->first()->id,
            'payee_hauler_id' =>  Hauler::inRandomOrder()->first()->id,
            'mineral_id' =>  Mineral::inRandomOrder()->first()->id,
            'total_amount' => rand(1000, 50000),
            'payment_type' => $pt[rand(0, 1)],
            'status' => $s[rand(0, 2)], 
        ];
    }
}
