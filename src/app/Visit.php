<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Visit extends Model
{
    // This make Laravel don't guard any collumn from being mass assigned
    protected $guarded = [];

    // Returns the link that was visited
    public function link()
    {
        return $this->belongsTo(Link::class);
    }
}
