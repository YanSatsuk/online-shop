<?php

namespace App\Http\Controllers;

use App\Classes\Order\OrderCRUD;
use App\Classes\Order\OrderHelper;
use Illuminate\Http\Request;

class OrderController extends ApiController
{
    public function make(Request $request)
    {
        $data = $request->all();
        $orders = OrderHelper::prepareData($data);
        OrderCRUD::add($orders);
        return $this->sendResponse(null, "success");
    }
}
