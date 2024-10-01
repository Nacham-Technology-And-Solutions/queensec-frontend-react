<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
 
use App\Models\AdminUser;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        \App\Models\AdminUser::factory()->count(10)->create();
        \App\Models\TaxPayer::factory()->count(10)->create();
        \App\Models\TruckDriver::factory()->count(10)->create();
    }
    
}
