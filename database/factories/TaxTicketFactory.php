<?php

namespace Database\Factories;

use App\Models\Hauler;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TaxTicket>
 */
class TaxTicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    { 
        $s =  ['active', 'inactive', 'expired'];
        $es =  ['checked', 'not_checked'];
        $anOrder = Order::inRandomOrder()->first(); 
        
        return [
            'price' => $anOrder,
            'vehicle_id' =>  $anOrder->hauler()->id,
            'vehicle_owner_id' => $anOrder->hauler()->owner()->id,
            'order_id' => $anOrder->id,
            'driver_name' => $anOrder->hauler()->owner()->name(), 
            'status' => $s[rand(0, 2)], 
            'valid_from' => Carbon::now(), 
            'valid_until' => Carbon::tomorrow(), 
            'enforcer_check_status' => $es[rand(0, 1)]
        ];
    }
}