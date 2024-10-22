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
        Schema::create('loc_localities', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code');

            $table->unsignedBigInteger('locstate_id');
            $table->foreign('locstate_id')->references('id')->on('loc_states');
            
            $table->tinyInteger('active')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('loclocalities');
    }
};
