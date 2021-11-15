<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Link;
use App\User;
use Illuminate\Http\Request;

class LinkController extends Controller
{
    // Returns a specific link object
    public function show($id)
    {
        $link = Link::find($id);
        $link->load('visits');
        return $link;
    }

    // Store a link record in the database, creating a new one or updates an existing
    public function store(Request $request)
    {
        // Since theres as id value, update the link record
        if(!empty($request->input('id')))
        {
            $link = Link::find($request->input('id'));
            $link = $link->update([
                'name'       => $request->input('name'),
                'link'       => $request->input('link'),
                'updated_at' => date(now())
            ]);
        }
        // Create a new link record
        else
        {
            $userLinks = User::find($request->input('user_id'))->links();
            $link = $userLinks->create([
                'name' => $request->input('name'),
                'link' => $request->input('link')
            ]);
        }

        return $link;
    }

    public function storeVisit(Request $request)
    {
        $linkVisits = Link::find($request->input('id'))->visits();
        $visit = $linkVisits->create([
            'user_ip'    => $request->input('user_ip'),
            'user_agent' => $request->input('user_agent')
        ]);

        return $visit;
    }

    public function delete($id)
    {
        $link = Link::find($id);
        // Delete all visits records of the link before
        $link->visits()->delete();
        // Delete the link record
        $link->delete();
    }
}
