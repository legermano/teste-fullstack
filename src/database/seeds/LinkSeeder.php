<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LinkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $userLinks = User::find('1')->links();
        $userLinks->create([
            'name' => 'Github',
            'link' => 'https://github.com/legermano'
        ]);
        $userLinks->create([
            'name' => 'Github - Laravel + VueJS project',
            'link' => 'https://github.com/legermano/teste-fullstack'
        ]);
    }
}
