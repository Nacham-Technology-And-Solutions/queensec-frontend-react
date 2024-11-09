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

            $table->unsignedBigInteger('payer_id');
            $table->foreign('payer_id')->references('id')->on('users');
            
            $table->unsignedBigInteger('payee_id');
            $table->foreign('payee_id')->references('id')->on('users');

            $table->unsignedBigInteger('order_id');
            $table->foreign('order_id')->references('id')->on('orders');
            
            $table->string('transaction_id');
            $table->string('tx_ref');
            $table->string('flw_ref');
            $table->decimal('amount', 10, 2);
            $table->string('currency')->default('NGN');
            $table->decimal('charged_amount', 10, 2);
            $table->decimal('app_fee', 10, 2);
            $table->decimal('merchant_fee', 10, 2);
            $table->string('processor_response');
            $table->enum('status', ['successful', 'failed', 'pending', 'abandoned', 'cancelled', 'reversed', 'timeout', 'processing', 'initiated', 'partially_successful', 'on_hold'])->default('initiated');
            $table->string('account_id');
            $table->json('card')->nullable();
            $table->json('customer')->nullable();

            $table->decimal('amount_settled', 10, 2); 
            $table->string('payment_type');
            $table->dateTime('payment_date', $precision = 0);
            $table->json('flw_payload')->nullable();
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


// 1. successful
// The payment was processed successfully.
// 2. failed
// The payment failed due to an error (e.g., insufficient funds, incorrect card details, or network issues).
// 3. pending
// The payment is pending, meaning it has been initiated but is awaiting completion (e.g., awaiting bank confirmation, user authentication, or additional steps).
// 4. abandoned
// The payment was initiated, but the user did not complete it (e.g., closing the page or not providing further inputs).
// 5. cancelled
// The payment was canceled either by the user or due to inactivity or timeout.
// 6. reversed
// A successful payment was reversed. This can happen due to issues like a dispute or chargeback, or manual reversal by the Flutterwave team.
// 7. timeout
// The payment process timed out, usually due to inactivity or a delay in the customer completing payment.
// 8. processing
// The payment is currently being processed but hasn’t been completed or confirmed yet.
// 9. initiated
// The payment process has started, but no further action has been taken yet (e.g., awaiting user input, such as card details or OTP).
// 10. partially_successful
// This typically applies to split payments where part of the transaction succeeds, but another part may fail or remain pending.
// 11. on_hold
// The payment is on hold for further review, usually by the payment processor or Flutterwave’s compliance team.