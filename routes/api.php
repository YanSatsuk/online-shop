<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth'], function () {
   Route::post('signup', 'AuthController@signup');
   Route::post('login', 'AuthController@login');
});

Route::group(['prefix' => 'category'], function () {
    Route::get('getall', 'CategoryController@getAll');
    Route::get('getallwithbrands', 'CategoryController@getAllWithBrands');
});

Route::group(['prefix' => 'product'], function () {
    Route::get('getbycategory/{id}', 'ProductController@getByCategoryId');
    Route::get('getbybrand/{id}', 'ProductController@getByBrandId');
});

Route::group(['prefix' => 'order'], function () {
    Route::post('make', 'OrderController@make');
});
