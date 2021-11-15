<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'email' => 'lucas.germano@gmail.com',
            'username' => 'legermano',
            'password' => 'secret',
            'background_color' => '#FFCA28',
            'text_color' => '#333'
        ]);
    }
}
