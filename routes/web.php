<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth; 
use App\Http\Controllers\AuthController; 
use App\Http\Controllers\AdminUserController;
 
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

// Example Routes
// Route::view('/', 'landing');
// Route::match(['get', 'post'], '/dashboard', function(){
//     return view('dashboard');
// });
// Route::view('/pages/slick', 'pages.slick');
// Route::view('/pages/datatables', 'pages.datatables');
// Route::view('/pages/blank', 'pages.blank');

// Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
// Route::post('/login', [AuthController::class, 'login']);
// Route::get('/forgot_password', [AuthController::class, 'showForgotPasswordForm'])->name('forgot_password');
// Route::post('/forgot_password', [AuthController::class, 'sendResetLinkEmail']);
// Route::get('/signup', [AuthController::class, 'signup'])->name('signup');




// Route::get('admins/users/create', [AdminUserController::class, 'create'])->name('admins.users.create');
// Route::post('admins/users/store', [AdminUserController::class, 'store'])->name('admins.users.store');

// Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
//  





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

// Example Routes
Route::view('/', 'landing');
Route::match(['get', 'post'], '/dashboard', function(){
    return view('dashboard');
});
Route::view('/pages/slick', 'pages.slick');
Route::view('/pages/datatables', 'pages.datatables');
Route::view('/pages/blank', 'pages.blank');

Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
// Route::post('/login', [AuthController::class, 'login']);
Route::get('/forgot_password', [AuthController::class, 'showForgotPasswordForm'])->name('forgot_password');
Route::post('/forgot_password', [AuthController::class, 'sendResetLinkEmail']);
Route::get('/signup', [AuthController::class, 'signup'])->name('signup');
Route::post('/login', [AuthController::class, 'login'])->name('login.post');
// Admin User Routes
Route::get('admins/users', [AdminUserController::class, 'index'])->name('admins.users.index');
Route::get('admins/users/create', [AdminUserController::class, 'create'])->name('admins.users.create');
Route::post('admins/users/store', [AdminUserController::class, 'store'])->name('admins.users.store');
Route::get('admins/users/edit/{id}', [AdminUserController::class, 'edit'])->name('admins.users.edit');
Route::put('admins/users/{id}', [AdminUserController::class, 'update'])->name('admins.users.update');
Route::delete('admins/users/{id}', [AdminUserController::class, 'destroy'])->name('admins.users.destroy');
Route::get('admins/users/index', [AdminUserController::class, 'index'])->name('admin.users.index');
Route::put('admins/users/update/{id}', [AdminUserController::class, 'update'])->name('admin.users.update');
Route::delete('admins/users/delete/{id}', [AdminUserController::class, 'destroy'])->name('admin.users.destroy');



Route::post('/logout', [AuthController::class, 'logout'])->name('logout');




// Route::get('/admins/users', [AdminUserController::class, 'index'])->name('admin.users.index');
// Route::get('/admins/users/create', [AdminUserController::class, 'create'])->name('admin.users.create');
// Route::post('/admins/users', [AdminUserController::class, 'store'])->name('admin.users.store');
// Route::get('/admins/users/{id}', [AdminUserController::class, 'show'])->name('admin.users.show');
// Route::get('/admins/users/{id}/edit', [AdminUserController::class, 'edit'])->name('admin.users.edit');
// Route::put('/admins/users/{id}', [AdminUserController::class, 'update'])->name('admin.users.update');
// Route::delete('/admins/users/{id}', [AdminUserController::class, 'destroy'])->name('admin.users.destroy');