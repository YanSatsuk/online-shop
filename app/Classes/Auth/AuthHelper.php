<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 10.06.2019
 * Time: 17:01
 */

namespace App\Classes\Auth;


use App\User;
use Carbon\Carbon;

class AuthHelper
{
    /**
     * Get token with expires_at time
     * @param User $user
     * @param bool $remember_me
     * @return \Laravel\Passport\PersonalAccessTokenResult
     */
    private static function getToken(User $user, bool $remember_me)
    {
        $token = $user->createToken('access_token');
        $created_at = $token->token->created_at;
        $remember_me ?
            $token->token->expires_at = Carbon::parse($created_at)->addMonths(3) :
            $token->token->expires_at = Carbon::parse($created_at)->addHours(4);
        $token->token->save();
        return $token;
    }

    /**
     * Get response with user data and access token
     * @param User $user
     * @param bool $remember_me
     * @return User
     */
    public static function responseWithToken(User $user, bool $remember_me = false)
    {
        $token = self::getToken($user, $remember_me);
        $user['token'] = $token->accessToken;
        $user['expires_at'] = $token->token->expires_at;
        return $user;
    }
}
