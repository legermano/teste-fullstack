<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Link extends Model
{
    // This make Laravel don't guard any collumn from being mass assigned
    protected $guarded = [];

    // Return the owner(user) of a link
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Returns all visits of a link
    public function visits()
    {
        return $this->hasMany(Visit::class);
    }
}
