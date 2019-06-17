<?php

namespace App\Http\Controllers;

use App\Classes\Product\ProductCRUD;
use Illuminate\Http\Request;

class ProductController extends ApiController
{
    public function getByCategoryId($id)
    {
        $firstCategoryId = 1;
        $products = ProductCRUD::getProductByCategoryId($id ? $id : $firstCategoryId);
        return $this->sendResponse($products);
    }

    public function getByBrandId($id)
    {
        $products = ProductCRUD::getProductByBrandId($id);
        return $this->sendResponse($products);
    }
}
