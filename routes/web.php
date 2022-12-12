<?php

use App\Http\Controllers\LandingController;
use App\Http\Controllers\MapAdminController;
use App\Http\Controllers\MapController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource('/', LandingController::class)->only([
    'index'
]);


Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('dashboard', MapController::class)->parameters([
        'dashboard' => 'id'
    ]);
    Route::resource('map', MapAdminController::class);
});



require __DIR__ . '/auth.php';
