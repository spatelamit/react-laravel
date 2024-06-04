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
        Schema::table('users', function (Blueprint $table) {
            $table->string("company")->nullable();
            $table->string("job")->nullable();
            $table->string("country")->nullable();
            $table->string("address")->nullable();
            $table->string("phone")->nullable();
            $table->date("dob")->nullable();
            $table->string("avatar")->nullable();
            $table->string("username")->unique();
            

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
