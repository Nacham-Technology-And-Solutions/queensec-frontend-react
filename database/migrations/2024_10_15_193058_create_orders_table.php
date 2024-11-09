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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('payer_id');
            $table->foreign('payer_id')->references('id')->on('users');
            
            $table->unsignedBigInteger('payee_id');
            $table->foreign('payee_id')->references('id')->on('users');
            
            $table->unsignedBigInteger('payee_hauler_id');
            $table->foreign('payee_hauler_id')->references('id')->on('haulers');

            $table->unsignedBigInteger('mineral_id');
            $table->foreign('mineral_id')->references('id')->on('minerals');
             
            $table->decimal('total_amount', 10, 2);
            $table->enum('status', ['pending', 'completed', 'cancelled'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
