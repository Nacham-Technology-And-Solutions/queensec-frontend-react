<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('tax_payers', function (Blueprint $table) {
            $table->string('tax_identification_number')->unique()->after('phone_number'); // You can adjust the position accordingly
        });
    }
    
    public function down()
    {
        Schema::table('tax_payers', function (Blueprint $table) {
            $table->dropColumn('tax_identification_number');
        });
    }
    
};
