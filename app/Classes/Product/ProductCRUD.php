<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 17.06.2019
 * Time: 16:18
 */

namespace App\Classes\Product;


use App\Product;

class ProductCRUD
{
    public static function getProductByCategoryId($id)
    {
        $products = Product::where('category_id', $id)->where('status', 'active')->get();
        return $products;
    }

    public static function getProductByBrandId($id)
    {
        $products = Product::where('brand_id', $id)->where('status', 'active')->get();
        return $products;
    }
}
