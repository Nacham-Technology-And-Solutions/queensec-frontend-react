<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\UserAdminController;
use App\Http\Controllers\UserController;
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


 
// Admin Authentication Routes
Route::get('/login', [AdminAuthController::class, 'showLoginForm'])->name('login');
Route::match(['get', 'post'], '/logout', [AdminAuthController::class, 'logout'])->name('logout'); 
Route::post('/admins/authenticate', [AdminAuthController::class, 'authenticate'])->name('authenticate');


// Access Required Routes
Route::middleware('auth:admin')->group(function () {

    // Home Page
    Route::view('/', '/dashboard');
    Route::match(['get', 'post'], '/dashboard', function () {
        return view('dashboard');
    })->middleware('auth:admin')->name('admin.dashboard');
    
    Route::get('/register', [AdminAuthController::class, 'create']);
    Route::post('/admins', [AdminAuthController::class, 'store']);

    // Users Routes
    Route::get('users', [UserAdminController::class, 'index'])->name('users.index');
    Route::post('users', [UserAdminController::class, 'store'])->name('users.store');
    Route::get('users/create', [UserAdminController::class, 'create'])->name('users.create');
    Route::get('users/{user}', [UserAdminController::class, 'show'])->name('users.show');
    Route::put('users/{user}', [UserAdminController::class, 'update'])->name('users.update');
    Route::get('users/{user}/edit', [UserAdminController::class, 'edit'])->name('users.edit');
    Route::delete('users/{user}', [UserAdminController::class, 'destroy'])->name('users.destroy');
    Route::patch('users/{user}/enable', [UserAdminController::class, 'enable'])->name('users.enable');
    Route::patch('users/{user}/disable', [UserAdminController::class, 'disable'])->name('users.disable');
});
