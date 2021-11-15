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

    public function store(Request $request)
    {
        // Since theres as id value, update the user record
        if(!empty($request->input('id')))
        {
            $user = User::find($request->input('id'));
            $user = $user->update([
                'email'            => $request->input('email')            ?? $user->email,
                'username'         => $request->input('username')         ?? $user->username,
                'background_color' => $request->input('background_color') ?? $user->background_color,
                'text_color'       => $request->input('text_color')       ?? $user->text_color,
                'updated_at'       => date(now())
            ]);
        }
        // Create a new user record
        else
        {
            $user = User::create([
                'email'            => $request->input('email'),
                'username'         => $request->input('username'),
                'password'         => $request->input('password'),
                'background_color' => $request->input('background_color'),
                'text_color'       => $request->input('text_color'),
            ]);
        }

        return $user;
    }
}
