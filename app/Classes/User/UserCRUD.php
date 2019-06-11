<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 10.06.2019
 * Time: 16:14
 */

namespace App\Classes\User;


use App\User;

class UserCRUD
{
    /**
     * Add user
     * @param array $data
     * @return mixed
     */
    public static function add(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ])->fresh();
    }
}
