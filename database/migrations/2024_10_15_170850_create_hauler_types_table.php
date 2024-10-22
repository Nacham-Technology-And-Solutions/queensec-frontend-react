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
        Schema::create('hauler_types', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('volume');
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
        Schema::dropIfExists('hauler_types');
    }
};
