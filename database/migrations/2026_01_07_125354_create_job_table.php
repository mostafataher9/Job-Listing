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
                //In a migration, you don’t store the image itself in the database (not recommended for large files). Instead, you store:
//The file path or file name as a string in the database.
//The actual image file is stored in your server storage (storage/app/public or public/images).
//No dashes in column names (company-logo) → use underscores: company_logo.
        Schema::create('job', function (Blueprint $table) {
            $table->integer('id')-> primary();
            $table->string('company_name'); //is not unique bcz it may be the same employer posting jobs for the same company
            $table->string('job_title');
            $table->string('job_location');
            $table->string('contact_email');
            $table->string('web_url');
            $table->string('tags');
            $table->string('company_logo');
            $table->text('job_description');   
                /* string is NOT ideal for many sentences.In Laravel migrations:❌ string  $table->string('job_description');
                Max length: 255 characters  Good for: titles, names, short labels❌ Can be too short for paragraphs or full descriptions */
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job');
    }
};
