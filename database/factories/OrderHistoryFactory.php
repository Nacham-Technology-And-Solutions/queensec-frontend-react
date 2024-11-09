<?php

namespace Database\Factories;

use App\Models\Order;
use App\Models\TaxTicket;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\OrderHistory>
 */
class OrderHistoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $s =  ['pending_payment', 'completed', 'ticket_issued'];
        $a =  ['order_created', 'payment_received', 'ticket_generated', 'order_canceled', 'refund_initiated'];
        $ut =  ['admin', 'customer', 'system', 'vender'];
        $pm =  ['card', 'transfer', 'ussd',];
        $anOrder = Order::inRandomOrder()->first();

        return [
            'order_id' => $anOrder->id,
            'ticket_id' =>  TaxTicket::inRandomOrder()->first()->id,
            'amount_paid' => rand(1000, 50000),
            'total_amount' => rand(1000, 50000),
            // 'mineral_id' =>  Mineral::inRandomOrder()->first()->id,
            'payment_status' => $s[rand(0, 2)],
            'status' => $s[rand(0, 2)],
            'action' => $a[rand(0, 4)],
            'old_value' => json_encode($anOrder),
            'new_value' => json_encode($anOrder),
            'changed_by_id' => User::inRandomOrder()->first()->id,
            'changed_by_user_type' => $ut[rand(0, 2)],
            'payment_method' => $pm[rand(0, 2)],
            'reference_code' => rand(1000, 50000),
        ];
    }
}
