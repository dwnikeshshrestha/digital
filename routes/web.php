<?php

use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\MenuController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home/index');
})->name('home');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
//      Route::resource('category', CategoryController::class);
//     Route::resource('menus', MenuController::class);

// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // Group routes with dashboard prefix
    Route::prefix('dashboard')->group(function () {
        Route::resource('category', CategoryController::class);
        Route::resource('menus', MenuController::class);
        Route::resource('blogs', BlogController::class);
        Route::resource('faqs', FaqController::class);
    });
});

// Route::middleware(['auth', 'verified'])->prefix('dashboard')->group(function () {
//     // Dashboard (URL: /dashboard, Named route: dashboard)
//     Route::get('/', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');

//     // Categories resource (URL: /dashboard/category.tsx, Named route: category.tsx.*)
//     Route::resource('category', CategoryController::class);
//     Route::resource('menus', MenuController::class);
// });


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
