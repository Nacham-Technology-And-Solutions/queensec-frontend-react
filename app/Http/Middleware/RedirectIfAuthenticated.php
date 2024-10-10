<?php 
namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\Middleware\RedirectIfAuthenticated as Middleware;
use Illuminate\Support\Facades\Auth;

class RedirectIfAuthenticated
// class RedirectIfAuthenticated extends Middleware
{
    // Custom logic here

    // public function handle($request, Closure $next, $guard = null)
    // {
    //     if ($guard == "admin" && Auth::guard($guard)->check()) {
    //         return redirect('/');
    //     }
    //     if (Auth::guard($guard)->check()) {
    //         return redirect('/home');
    //     }

    //     return $next($request);
    // }
}
