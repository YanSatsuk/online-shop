<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 17.06.2019
 * Time: 14:21
 */

namespace App\Classes\Brand;


use App\Brand;
use App\Classes\Product\ProductCRUD;

class BrandCRUD
{
    public static function getBrandsByCategoryId(int $id) {
        $brands = Brand::where([['status', 'active'], ['category_id', $id]])->select('id', 'name as value')->get();
        foreach ($brands as $key => $brand) {
            if (!ProductCRUD::getProductByBrandId($brand->id)->count()) {
                $brands->forget($key);
            } else {
                $brand->_id = $id . '.' . $brand->id;
                $brand->type = 'brand';
                unset($brand->id);
            }
        }
        return $brands;
    }
}
