<?php

use App\Http\Controllers\AdminAuthController;
use App\Http\Controllers\AdminUserController;
use App\Http\Controllers\EnforcerAdminController;
use App\Http\Controllers\HaulerTypeController;
use App\Http\Controllers\LocationsController;
use App\Http\Controllers\MineralController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\PaymentsController;
use App\Http\Controllers\UserAdminController;
use App\Http\Controllers\UserController;
use App\Models\Mineral;
use App\Models\Order;
use App\Models\User;
use Carbon\Carbon;
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
    // Route::view('/', '/dashboard');
    Route::get('/', [AdminAuthController::class, 'dashboard']);
    Route::match(['get', 'post'], '/dashboard', [AdminAuthController::class, 'dashboard'])->name('admins.dashboard');

    Route::get('/register', [AdminAuthController::class, 'create']);
    Route::resource('admins', AdminUserController::class);
    Route::patch('admins/{admin}/enable', [AdminUserController::class, 'enable'])->name('admins.enable');
    Route::patch('admins/{admin}/disable', [AdminUserController::class, 'disable'])->name('admins.disable');

    // Users Routes
    Route::resource('users', UserAdminController::class);
    Route::patch('users/{user}/enable', [UserAdminController::class, 'enable'])->name('users.enable');
    Route::patch('users/{user}/disable', [UserAdminController::class, 'disable'])->name('users.disable');

    // Enforcers Routes
    Route::resource('enforcers', EnforcerAdminController::class);
    Route::patch('enforcers/{enforcer}/enable', [EnforcerAdminController::class, 'enable'])->name('enforcers.enable');
    Route::patch('enforcers/{enforcer}/disable', [EnforcerAdminController::class, 'disable'])->name('enforcers.disable');

    // Orders Routes
    Route::get('orders', [OrdersController::class, 'index'])->name('orders.index');
    //  Route::post('orders', [OrdersController::class, 'store'])->name('orders.store');
    //  Route::get('orders/create', [OrdersController::class, 'create'])->name('orders.create');
    Route::get('orders/{user}', [OrdersController::class, 'show'])->name('orders.show');
    //  Route::put('orders/{user}', [OrdersController::class, 'update'])->name('orders.update');
    //  Route::get('orders/{user}/edit', [OrdersController::class, 'edit'])->name('orders.edit');
    Route::delete('orders/{user}', [OrdersController::class, 'destroy'])->name('orders.destroy');
    //  Route::patch('orders/{user}/enable', [OrdersController::class, 'enable'])->name('orders.enable');
    //  Route::patch('orders/{user}/disable', [OrdersController::class, 'disable'])->name('orders.disable'); 
    
    // Payments Routes
    Route::get('payments', [PaymentsController::class, 'index'])->name('payments.index');
    //  Route::post('payments', [PaymentsController::class, 'store'])->name('payments.store');
    //  Route::get('payments/create', [PaymentsController::class, 'create'])->name('payments.create');
    Route::get('payments/{payment}', [PaymentsController::class, 'show'])->name('payments.show');
    //  Route::put('payments/{payment}', [PaymentsController::class, 'update'])->name('payments.update');
    //  Route::get('payments/{payment}/edit', [PaymentsController::class, 'edit'])->name('payments.edit');
    Route::delete('payments/{payment}', [PaymentsController::class, 'destroy'])->name('payments.destroy');
    //  Route::patch('payments/{payment}/enable', [PaymentsController::class, 'enable'])->name('payments.enable');
    //  Route::patch('payments/{payment}/disable', [PaymentsController::class, 'disable'])->name('payments.disable'); 

    // Locations Routes
    Route::resource('locations', LocationsController::class);
    Route::get('locations/{location}/createLocality', [LocationsController::class, 'createLocality'])->name('locations.createLocality');
    Route::get('locations/{location}/editLocality', [LocationsController::class, 'editLocality'])->name('locations.editLocality');
    Route::patch('locations/{location}/enable', [LocationsController::class, 'enable'])->name('locations.enable');
    Route::patch('locations/{location}/disable', [LocationsController::class, 'disable'])->name('locations.disable');

    // Haulers Routes
    Route::resource('haulers', HaulerTypeController::class);
    Route::patch('haulers/{hauler}/enable', [HaulerTypeController::class, 'enable'])->name('haulers.enable');
    Route::patch('haulers/{hauler}/disable', [HaulerTypeController::class, 'disable'])->name('haulers.disable');

    // Minerals Routes
    Route::resource('minerals', MineralController::class);
    Route::patch('minerals/{mineral}/enable', [MineralController::class, 'enable'])->name('minerals.enable');
    Route::patch('minerals/{mineral}/disable', [MineralController::class, 'disable'])->name('minerals.disable');

    // Minerals Routes
    Route::resource('notifications', MineralController::class);
});
