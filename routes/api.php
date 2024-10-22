<?php

use App\Http\Controllers\EnforcerAuthController;
use App\Http\Controllers\UserAuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Users API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Authentication Routes
Route::prefix('auth/user')->group(function () {
    Route::post('/register', [UserAuthController::class, 'register']);
    Route::post('/login', [UserAuthController::class, 'login']);
    Route::middleware('auth:sanctum')->post('/logout', [UserAuthController::class, 'logout']);
});

// Basic Operations
Route::get('/fee_category', [UserController::class, 'feeCategories']);  
Route::middleware('auth:sanctum')->get('/transactions', [UserController::class, 'transactions']);  


/*
|--------------------------------------------------------------------------
| Enforcers API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
// Authentication Routes
Route::prefix('auth/enforcer')->group(function () {
    Route::post('/register', [EnforcerAuthController::class, 'register']);
    Route::post('/login', [EnforcerAuthController::class, 'login']);
    Route::middleware('auth:sanctum')->post('/logout', [EnforcerAuthController::class, 'logout']);
});