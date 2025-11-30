<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('blogs/index', [
            'user' => Blog::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('blogs/create');
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:4096',
        ]);
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $uploadDirectory = 'uploads/blogs/';
            if (!Storage::disk('public')->exists($uploadDirectory)) {
                Storage::disk('public')->makeDirectory($uploadDirectory);
            }
            $filename = uniqid() . '_' . $file->getClientOriginalName();

            // Move the file to the upload directory
            $path = $file->storeAs($uploadDirectory, $filename, 'public');

            // Optionally, store the file path in the database
            // ...
            $data = $request->all();
            $data['image'] = $filename;
            Blog::create($data);
        }


        return Inertia::render('blogs/index', [
            'user' => Blog::all(),
            'message' => 'Blogs created successfully'
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
