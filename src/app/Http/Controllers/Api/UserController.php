<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Link;
use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Returns infos from a specifc user and they links
    public function show($username)
    {
        $user = User::where('username', $username)->first();
        $user->load('links');
        return $user;
    }

    // Returns all links from a user
    public function links($id)
    {
        return User::find($id)->links()->get();
    }

    // Store a user record in the database, creating a new one or updates an existing
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

    // Uploads a image on the server and link it to the user image
    public function imageUpload(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:jpg,jpeg,png|max:2048'
         ]);

        if($request->file() AND $request->input('user_id')) {
            $file_name = time().'_'.$request->file->getClientOriginalName();
            $file_path = $request->file('file')->storeAs('uploads', $file_name, 'public');

            $user = User::find($request->input('user_id'));
            $user = $user->update([
                'image_path' => $file_path,
                'updated_at' => date(now())
            ]);

            return $file_path;
        }
    }
}
