<?php

namespace App\Http\Controllers;

use App\Classes\Order\OrderCRUD;
use Illuminate\Http\Request;

class OrderController extends ApiController
{
    public function make(Request $request)
    {
        $data = $request->all();
        $order = OrderCRUD::add($data);
        $this->sendResponse($order);
    }
}
