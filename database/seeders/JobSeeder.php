<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Job;
use Illuminate\Support\Facades\DB;
class JobSeeder extends Seeder{
  public function run(): void{
    Job::create([
            "id" => 0,
            "company_name" => "Company A",
            "job_title" => "Backend Web Developer",
            "job_location" => "Lebanon-Beirut",
            "contact_email" => "A@gmail.com",
            "web_url" => "http://CompanyA.com",
            "tags" => "Laravel,PHP,Postgresql",
            "company_logo" => "companya.png",
            "job_description" => "A backend Developer is needed to develop the backend for client's Web Projects"
    ]);

    Job::create([
            "id" => 1,
            "company_name" => "Company B",
            "job_title" => "Frontend Web Developer",
            "job_location" => "Lebanon-Beirut",
            "contact_email" => "B@gmail.com",
            "web_url" => "http://CompanyB.com",
            "tags" => "React,ts,tailwindCSS",
            "company_logo" => "companyb.png",
            "job_description" => "A frontend Developer is needed to develop the frontend for client's Web Projects"
    ]);
  }
}

?>