<?php

namespace App\Http\Controllers;

use App\Classes\Response\HTTPCodes;

class ApiController extends Controller
{
    private const FAILED = 'Failed';

    /**
     * Success response
     * @param $data
     * @param $message
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendResponse($data, $message = null, int $code = HTTPCodes::OK)
    {
        $response = [
            'data' => $data,
        ];
        if (!empty($message)) {
            $response['message'] = $message;
        }
        return response()->json($response, $code);
    }

    /**
     * Error response
     * @param $errorMessages
     * @param $message
     * @param int $code
     * @return \Illuminate\Http\JsonResponse
     */
    public function sendError($errorMessages, $message = null, int $code = HTTPCodes::UNAUTHORIZED)
    {
        is_null($message) ? $response['message'] = self::FAILED : $response['message'] = $message;
        if (!empty($errorMessages)) {
            $response['data'] = $errorMessages;
        }
        return response()->json($response, $code);
    }
}
