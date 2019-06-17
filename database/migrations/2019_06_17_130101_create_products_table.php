<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('model');
            $table->unsignedInteger('price');
            $table->unsignedInteger('rating')->default(0);
            $table->string('image_url')->nullable();
            $table->unsignedInteger('count');
            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->unsignedInteger('category_id');
            $table->unsignedInteger('brand_id');
            $table->foreign('brand_id')->references('id')->on('brands');
            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
