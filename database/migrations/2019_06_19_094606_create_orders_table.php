<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedInteger('user_id')->default(0);
            $table->unsignedInteger('product_id');
            $table->unsignedInteger('amount');
            $table->enum('delivery', ['Courier', 'Pickup']);
            $table->string('name');
            $table->string('email');
            $table->string('phone');
            $table->string('address');
            $table->enum('payment', ['Card', 'Cash']);
            $table->enum('status', ['In process', 'Declined', 'Done'])->default('In process');
            $table->string('reason')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
