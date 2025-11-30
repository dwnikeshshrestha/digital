<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    //
           protected $fillable = [
        'title',
        'slug',
        'description',
        'image',
        'image_alt',
        'meta_title',
        'meta_description',
        'is_active',

    ];
}
