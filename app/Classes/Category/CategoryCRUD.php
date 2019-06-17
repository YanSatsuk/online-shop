<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 17.06.2019
 * Time: 13:50
 */

namespace App\Classes\Category;


use App\Category;
use App\Classes\Brand\BrandCRUD;

class CategoryCRUD
{
    public static function getAll()
    {
        $categories = Category::where('status', 'active')->get();
        return $categories;
    }
}
