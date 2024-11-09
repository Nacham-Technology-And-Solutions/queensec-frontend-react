<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\User;
use DateTime;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $s =  ['successful', 'failed', 'pending', 'abandoned', 'cancelled', 'reversed', 'timeout', 'processing', 'initiated', 'partially_successful', 'on_hold'];

        return [

            'order_id' => Order::inRandomOrder()->first()->id,
            'payer_id' => User::inRandomOrder()->first()->id,
            'payee_id' =>  User::inRandomOrder()->first()->id,

            'transaction_id' => Str::random(10) . rand(1000, 5000),
            'tx_ref' => Str::random(10) . rand(1000, 5000),
            'flw_ref' =>  Str::random(10) . rand(1000, 5000),
            'amount' => rand(1000, 50000),
            'currency' => 'NGN',
            'charged_amount' => rand(1000, 50000),
            'app_fee' => rand(1000, 5000),
            'merchant_fee' => rand(1000, 5000),
            'processor_response' => "",
            'status' => $s[rand(0, 3)],
            'payment_type' => 'card',
            'account_id' => rand(1, 1200),
            'amount_settled' => rand(1000, 50000),
            'card' => json_encode(['stuff' => Str::random(255)]),
            'customer' => json_encode(['stuff' => Str::random(255)]),

            'payment_date' => new DateTime(),
            'flw_payload' => json_encode(['stuff' => Str::random(255)]),
        ];
    }
}
