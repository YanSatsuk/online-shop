<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 19.06.2019
 * Time: 13:18
 */

namespace App\Classes\Order;


use App\Order;

class OrderCRUD
{
    public static function add(array $data)
    {
        return Order::create([
            'user_id' => $data['user_id'],
            'product_id' => $data['product_id'],
            'amount' => $data['amount'],
            'delivery' => $data['delivery'],
            'name' => $data['name'],
            'email' => $data['email'],
            'phone' => $data['phone'],
            'payment' => $data['payment'],
        ])->fresh();
    }
}
