<?php

namespace App\Http\Controllers;

use App\Classes\Auth\AuthHelper;
use App\Classes\Response\HTTPCodes;
use App\Classes\Response\Messages;
use App\Classes\User\UserCRUD;
use App\Classes\Validator\ValidatorHelper;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends ApiController
{
    /**
     * Sign up
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function signup(Request $request)
    {
        $data = $request->all();
        $validator = ValidatorHelper::validate($data, ValidatorHelper::SIGN_UP);
        if ($validator === true) {
            $user = UserCRUD::add($data);
            $user = AuthHelper::responseWithToken($user);
            $message = Messages::CREATE_USER_SUCCESS;
            return $this->sendResponse($user->toArray(), $message, HTTPCodes::CREATED);
        } else {
            return $this->sendError($validator, null, HTTPCodes::BAD_REQUEST);
        }
    }

    /**
     * Login
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $data = $request->all();
        $validator = ValidatorHelper::validate($data, ValidatorHelper::LOGIN);
        $credentials = [
            'email' => $data['email'],
            'password' => $data['password'],
        ];
        if ($validator === true && Auth::attempt($credentials)) {
            $user = Auth::user();
            $user = AuthHelper::responseWithToken($user, $data['remember_me']);
            return $this->sendResponse($user);
        } else {
            return $this->sendResponse($validator);
        }
    }
}
