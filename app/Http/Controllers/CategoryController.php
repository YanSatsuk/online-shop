<?php

namespace App\Http\Controllers;

use App\Classes\Brand\BrandCRUD;
use App\Classes\Category\CategoryCRUD;
use Illuminate\Http\Request;

class CategoryController extends ApiController
{
    public function getAll()
    {
        $categories = CategoryCRUD::getAll();
        return $this->sendResponse($categories);
    }

    public function getAllWithBrands()
    {
        $categories = CategoryCRUD::getAll();
        $tree = [];
        foreach ($categories as $key => $category) {
            $brands = BrandCRUD::getBrandsByCategoryId($category->id);
            if (!$brands->count()) {
                $categories->forger($key);
            } else {
                $object = new \stdClass();
                $object->id = $category->id;
                $object->open = $category->id === 1 ? true : false;
                $object->value = $category->name;
                $object->type = 'category';
                $object->data = BrandCRUD::getBrandsByCategoryId($category->id);
                $tree[] = $object;
            }
        }
        return $this->sendResponse($tree);
    }
}
