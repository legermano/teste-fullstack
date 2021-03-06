<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\LinkController;
use App\Http\Controllers\Api\UserController;

Route::get('user/{username}', [UserController::class, 'show']);
Route::get('user/{id}/links', [UserController::class, 'links']);
Route::post('user', [UserController::class, 'store']);
Route::post('user/image', [UserController::class, 'imageUpload']);

Route::get('link/{id}', [LinkController::class, 'show']);
Route::delete('link/{id}', [LinkController::class, 'delete']);
Route::post('link', [LinkController::class, 'store']);
Route::post('link/visit', [LinkController::class, 'storeVisit']);
