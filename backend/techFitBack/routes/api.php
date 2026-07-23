<?php

use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Rotas de teste
Route::get('/roles', [RolesController::class, 'index']);