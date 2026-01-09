<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
      User::Create([
        'name'  => 'Admin',
        'email' => 'admin@gmail.com',
        'password' => 'admin123',
        'role' => 'admin'
      ]);

       User::Create([
        'name'  => 'Employee One',
        'email' => 'employee1@gmail.com',
        'password' => 'employee123',
        'role' => 'employee'
       ]);
    }
}
