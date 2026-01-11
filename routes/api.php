<?php
use App\Http\Controllers\JobController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::post('job', [JobController::class, 'add']);
Route::put('job/{id}', [JobController::class, 'update']);
Route::delete('job/{id}', [JobController::class, 'delete']);
Route::get('jobs', [JobController::class, 'getJobs']);
Route::get('job', [JobController::class, 'getJob']);
?>