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
        Schema::create('haulers', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('number_plate');

            $table->unsignedBigInteger('hauler_type_id');
            $table->foreign('hauler_type_id')->references('id')->on('hauler_types')->constrained()->onDelete('cascade');

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');  
            $table->tinyInteger('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('haulers');
    }
};
