<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('minerals', function (Blueprint $table) {
            $table->id();
            $table->string('name'); 
            $table->integer('advalorem');
            $table->decimal('market_value', 10, 2);
            $table->decimal('royalty_rate', 10, 2);
            $table->string('measurement_unit');
            $table->string('description')->nullable();
            $table->string('img')->nullable();                   
            $table->tinyInteger('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('minerals');
    }
};
