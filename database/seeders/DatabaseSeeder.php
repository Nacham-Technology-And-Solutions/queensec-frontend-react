<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
 
use App\Models\AdminUser;
use App\Models\LocLocality;
use App\Models\LocState;
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
    }
    
}
