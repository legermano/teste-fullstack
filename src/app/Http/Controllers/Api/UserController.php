<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Link;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function show($username)
    {
        $user = User::where('username', $username)->first();
        $user->load('links');
        return $user;
    }

    public function links($id)
    {
        return User::find($id)->links()->get();
    }
}
