<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\AdminUser;
use App\Models\EnforcerUser;
use App\Models\Hauler;
use App\Models\HaulerType;
use App\Models\LocLocality;
use App\Models\LocState;
use App\Models\Mineral;
use App\Models\Order;
use App\Models\OrderHistory;
use App\Models\Payment;
use App\Models\TaxTicket;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        LocState::create([
            'name' => "Nasarawa",
            'code' => "NAS",
        ]);
        LocState::create([
            'name' => "Ondo",
            'code' => "OND",
        ]);
        LocLocality::create([
            'name' => "Ascend",
            'code' => "ASC",
            'locstate_id' => LocState::inRandomOrder()->first()->id,

        ]);
        LocLocality::create([
            'name' => "Decend",
            'code' => "DEC",
            'locstate_id' => LocState::inRandomOrder()->first()->id,
        ]);
        AdminUser::factory()->create([

            
            'id' => "0",
            'first_name' => "Queensec",
            'username' => "system",
            'last_name' => "System",
            'email' => "info@queensec.com",
            'email_verified_at' => now(),
            'phone' => "08112853404",
            'password' => Hash::make('password'), // you can change this to a random password
            'remember_token' => "s1XXXHlplj",
            'account_type' => 2,

        ]);
        AdminUser::factory()->count(10)->create();
        AdminUser::factory()->create([

            'first_name' => "first_name",
            'middle_name' => "middle_name",
            'last_name' => "last_name",
            'email' => "em@g.com",
            'email_verified_at' => now(),
            'phone' => "08112853404",
            'password' => Hash::make('password'), // you can change this to a random password
            'remember_token' => "s1XXXHlplj",
            'account_type' => 2,

        ]);

        
        User::factory()->count(10)->create();
        User::factory()->create([
            'first_name' => "first_name",
            'middle_name' => "middle_name",
            'last_name' => "last_name",
            'email' => "em@g.com",
            'email_verified_at' => now(),
            'phone' => "08112853404",
            'password' => Hash::make('password'), // you can change this to a random password
            'remember_token' => "s1XXXHlplj",
            'account_type' => 2,
            
        ]);

        EnforcerUser::factory()->count(10)->create();
        EnforcerUser::factory()->create([
            'first_name' => "first_name",
            'middle_name' => "middle_name",
            'last_name' => "last_name",
            'email' => "em@g.com",
            'email_verified_at' => now(),
            'phone' => "08112853404",
            'state' => LocState::inRandomOrder()->first()->code,
            'password' => bcrypt('password'), // you can change this to a random password
            // 'password' => Hash::make('password'), // you can change this to a random password
            'remember_token' => "s1XXXHlplj",
            
        ]);


        HaulerType::create([
            'name' => "Truck(8)",
            'volume' => "8 Tires",
            'description' => "Can carry 5 Tons"
        ]);
        HaulerType::create([
            'name' => "Truck(10)",
            'volume' => "10 Tires",
            'description' => "Can carry 8 Tons"
        ]);
        HaulerType::create([
            'name' => "Keke",
            'volume' => "500 KG",
            'description' => "Can carry 500KG"
        ]);
        Hauler::factory()->count(20)->create();
        Mineral::factory()->count(10)->create();
        Order::factory()->count(30)->create();
        Payment::factory()->count(200)->create();
        TaxTicket::factory()->count(20)->create();
        OrderHistory::factory()->count(90)->create();
    }
}
