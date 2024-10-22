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
        Schema::create('tax_tickets', function (Blueprint $table) {
            $table->id();
            $table->decimal('price', 10, 2); // Price of the ticket

            $table->unsignedBigInteger('order_id'); // Order id
            $table->foreign('order_id')->references('id')->on('orders');

            $table->unsignedBigInteger('vehicle_owner_id'); // Owner of the vehicle (for record)
            $table->foreign('vehicle_owner_id')->references('id')->on('users');


            $table->unsignedBigInteger('vehicle_id'); // Hauler vehicle's registration number
            $table->foreign('vehicle_id')->references('id')->on('haulers');


            $table->string('driver_name')->nullable(); // Driver's name (if applicable)
            $table->enum('status', ['active', 'inactive', 'expired'])->default('active'); // active, inactive, expired

            $table->date('valid_from'); // When the ticket is valid from
            $table->date('valid_until')->nullable(); // When the ticket expires
            $table->enum('enforcer_check_status', ['checked', 'not_checked'])->default('not_checked'); // active, inactive, expired

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tax_tickets');
    }
};
