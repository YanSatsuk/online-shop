<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 10.06.2019
 * Time: 15:51
 */

namespace App\Classes\Validator;

use Validator;

class ValidatorHelper
{
    const SIGN_UP = 'signUp';
    const LOGIN = 'login';

    private static $validateMap = [
        self::SIGN_UP => [
            'name' => 'required|string|min:2',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|min:6',
            'c_password' => 'required|same:password',
        ],
        self::LOGIN => [
            'email' => 'required|string|email',
            'password' => 'required|string|min:6',
            'remember_me' => 'boolean',
        ],
    ];

    /**
     * Validate data
     * @param array $data
     * @param string $mapKey
     * @return bool or array of errors
     */
    public static function validate(array $data, string $mapKey)
    {
        $valid = true;
        $validator = Validator::make($data, self::$validateMap[$mapKey]);
        if ($validator->fails()) {
            $valid = $validator->errors();
        }
        return $valid;
    }
}
