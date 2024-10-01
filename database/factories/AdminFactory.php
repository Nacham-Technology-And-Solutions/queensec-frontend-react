<?php

// namespace Database\Factories;

// use Illuminate\Database\Eloquent\Factories\Factory;
// use Illuminate\Support\Facades\Hash;
// use App\Models\Admin;

// /**
//  * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin>
//  */
// class AdminFactory extends Factory
// {
//     /**
//      * Define the model's default state.
//      *
//      * @return array<string, mixed>
//      */
//     public function definition(): array
//     {
   
// $factory->define(App\Models\Admin::class, function (Faker\Generator $faker) {
//     return [
//         'name' => $faker->name,
//         'email' => $faker->unique()->safeEmail,
//         'password' => Hash::make('12345678'), // All accounts have the same password
//         'created_at' => now(),
//         'updated_at' => now(),
//     ];
// });
//     }
// }
namespace Database\Factories;

use App\Models\AdminUser;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AdminFactory extends Factory
{
    protected $model = AdminUser::class;

    public function definition()
    {
        return [
            'name' => $this->faker->name,
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make('12345678'), // All accounts will have the same password
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
