<?php

namespace Database\Factories;

use App\Models\TaxPayer;
use Illuminate\Database\Eloquent\Factories\Factory;
    use Illuminate\Support\Str;
    use Illuminate\Support\Facades\Hash;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TaxPayer>
 */
class TaxPayerFactory extends Factory
{  // Define the model that this factory is for
    protected $model = TaxPayer::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'phone_number' => $this->faker->phoneNumber,
            'address' => $this->faker->address,
            'tax_identification_number' => 'TAX-' . strtoupper(Str::random(8)),
            // 'password' => bcrypt('12345678'), // Same password for all
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
