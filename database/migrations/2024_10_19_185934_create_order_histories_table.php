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
        Schema::create('order_histories', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('order_id');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');

            $table->unsignedBigInteger('ticket_id')->nullable();
            $table->foreign('ticket_id')->references('id')->on('tax_tickets')->onDelete('cascade');
            
            $table->decimal('amount_paid', 10, 2);
            $table->decimal('total_amount', 10, 2);
            
            // $table->enum('payment_status', ['paid', 'pending', 'failed'])->default('pending');
            $table->string('payment_status'); // paid, pending, failed

            
            $table->enum('status', ['pending_payment', 'completed', 'ticket_issued'])->default('pending_payment');
            $table->enum('action', ['order_created', 'payment_received', 'ticket_generated', 'order_canceled', 'refund_initiated'])->default('order_created');

            $table->json('old_value')->nullable(); // Previous values before change
            $table->json('new_value')->nullable(); // New values after change

            $table->unsignedBigInteger('changed_by_id');
            $table->enum('changed_by_user_type', ['admin', 'customer', 'system', 'vender']);

            $table->string('payment_method')->nullable(); // credit_card, bank_transfer, etc.
            $table->string('reference_code')->nullable(); // Payment gateway reference
            $table->timestamps();
            
            // Foreign key constraints
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_histories');
    }
};


// Order Creation: When the customer places an order for a tax ticket.
// Installment Payment: Track when the first and second installment payments are made.
// Payment Completion: Log when the payment is fully settled (either through a full payment or completing the installments).
// Ticket Issuance: When the system issues the e-ticket after payment is confirmed.
// Refund Initiation: If a refund is required, this should be logged.
// Cancellation: If the order is canceled before or after payment.
