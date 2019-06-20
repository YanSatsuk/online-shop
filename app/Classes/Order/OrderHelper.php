<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 19.06.2019
 * Time: 18:10
 */

namespace App\Classes\Order;


use Carbon\Carbon;

class OrderHelper
{
    public static function prepareData(array $data)
    {
        $prepareData = [];
        $user_data = json_decode($data['user_data']);
        $nowDate = Carbon::now('Europe/Minsk')->toDateTimeLocalString();
        foreach ($data as $key => $item) {
            if ($key !== 'user_data') {
                $obj = new \stdClass();
                $decodeItem = json_decode($item);
                $obj = self::getDataFromProduct($decodeItem, $obj);
                $obj = self::getUserData($user_data, $obj);
                $obj = self::getUserId($obj);
                $prepareData[] = self::getArrayData($obj, $nowDate);
            }
        }
        return $prepareData;
    }

    private static function getDataFromProduct($item, $obj)
    {
        foreach ($item as $prop => $value) {
            if ($prop === 'id') {
                $obj->product_id = $value;
            } elseif ($prop === 'amount') {
                $obj->amount = $value;
            }
        }
        return $obj;
    }

    private static function getUserData($user_data, $obj)
    {
        foreach ($user_data as $prop => $value) {
            $obj->$prop = $value;
        }
        return $obj;
    }

    private static function getUserId($obj)
    {
        if (!property_exists($obj, 'user_id')) {
            $obj->user_id = 0;
        }
        return $obj;
    }

    private static function getArrayData($obj, $nowDate)
    {
        return [
            'user_id' => $obj->user_id,
            'product_id' => $obj->product_id,
            'amount' => $obj->amount,
            'delivery' => $obj->delivery,
            'name' => $obj->name,
            'email' => $obj->email,
            'phone' => $obj->phone,
            'address' => $obj->address,
            'payment' => $obj->payment,
            'created_at' => $nowDate,
        ];
    }
}
