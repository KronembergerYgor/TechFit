<?php

use App\Http\Controllers\Api\RolesController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Rotas de teste
Route::get('/roles', [RolesController::class, 'index']);

//Api Cadastro
Route::post('/register', [UserController::class, 'store']);

Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum', 'active'])->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me', [AuthController::class, 'me']);
});

Route::post('/ForgotPassword', [AuthController::class, 'forgotPassword']);
Route::post('/ResetPassword', [AuthController::class, 'resetPassword']);

Route::post('/validate-reset-token', [AuthController::class, 'validateResetToken']);