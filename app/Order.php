<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'product_id',
        'amount',
        'delivery',
        'name',
        'email',
        'phone',
        'address',
        'payment',
        'status',
        'reason',
        'created_at',
        'updated_at',
    ];
}
