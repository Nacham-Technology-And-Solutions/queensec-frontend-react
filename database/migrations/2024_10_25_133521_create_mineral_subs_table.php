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
        Schema::create('mineral_subs', function (Blueprint $table) {
            $table->id();

            $table->unsignedBigInteger('mineral_id');
            $table->foreign('mineral_id')->references('id')->on('minerals');

            $table->unsignedBigInteger('state_id');
            $table->foreign('state_id')->references('id')->on('loc_states');

            $table->unsignedBigInteger('hauler_type_id');
            $table->foreign('hauler_type_id')->references('id')->on('hauler_types');

            $table->decimal('price', 10, 2);

            $table->tinyInteger('active')->default(1);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mineral_subs');
    }
};
