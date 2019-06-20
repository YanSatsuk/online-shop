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
        Order::insert($data);
    }
}
