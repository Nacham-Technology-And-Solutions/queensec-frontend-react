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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->string('tx_ref');
            $table->string('flw_ref');
            // $table->enum('status', ['pending', 'successful', 'cancelled', 'failed']);
            // $table->enum('payment_method', ['card', 'successful', 'cancelled', 'failed']);
            $table->string('status');
            $table->string('payment_method');
            $table->decimal('amount', 10, 2);
            $table->dateTime('payment_date', $precision = 0);
            $table->string('flw_payload');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
