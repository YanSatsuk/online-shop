import {JetView} from "webix-jet";
import productWindow from "../window/product";

export default class ProductsTable extends JetView {
	getColumns() {
		return [
			{
				id: "image",
				header: "Image",
				width: 150,
			},
			{
				id: "name",
				header: [
					"Name",
					{
						content: "textFilter"
					},
				],
				sort: "string",
				fillspace: true,
			},
			{
				id: "price",
				header: "Price",
				width: 100,
				sort: "int",
			},
			{
				id: "rating",
				header: "Rating",
				width: 100,
				sort: "int",
			},
			{
				id: "amount",
				header: "Amount",
				template: "{common.amountCounter()}",
				width: 130,
			},
			{
				id: "buy",
				header: "Buy",
				width: 60,
				template: "<img src='/svg/cart-outline.svg' class='img-padding'/>",
				type: "clean"
			},
		];
	}

	config() {
		let self = this;
		return {
			view: "datatable",
			type: {
				amountCounter: (obj) => {
					return `<button type="button" class="webix_inp_counter_prev" tabindex="-1" aria-label="Decrease value">-</button>
                            <input type="text" class="webix_inp_counter_value borderless" aria-live="assertive" value=${obj.amount}>
                            <button type="button" class="webix_inp_counter_next" tabindex="-1" aria-label="Increase value">+</button>`;
				}
			},
			columns: this.getColumns(),
			data: [
				{
					name: "Lenovo K5",
					price: 380,
					rating: 68,
					amount: 0,
				},
				{
					name: "Lenovo K6",
					price: 410,
					rating: 69,
					amount: 0,
				},
				{
					name: "Lenovo S920",
					price: 370,
					rating: 85,
					amount: 0,
				},
				{
					name: "Lenovo Vibe K5",
					price: 350,
					rating: 91,
					amount: 0,
				},
			],
			onClick: {
				"webix_inp_counter_prev": function(e, col) {
					self.downAmount(col, this);
				},
				"webix_inp_counter_next": function(e, col) {
					self.upAmount(col, this);
				},
				"img-padding": function(e, col) {
					self.addToBag(col, this);
				}
			},
			on: {
				onItemDblClick: function(col) {
					self.showWindow(col, this);
				}
			}
		};
	}

	init() {
		this.productWindow = this.ui(productWindow);
	}

	downAmount(col, self) {
		let item = self.getItem(col.row);
		if (item.amount > 0) {
			item.amount--;
			self.updateItem(col.row, item);
		}
	}

	upAmount(col, self) {
		let item = self.getItem(col.row);
		item.amount++;
		self.updateItem(col.row, item);
	}

	showWindow(col, self) {
		if (
			col.column === "image" || col.column === "name" ||
			col.column === "price" || col.column === "rating"
		) {
			let item = self.getItem(col.row);
			this.productWindow.showWindow(item);
		}
	}

	addToBag(col, self) {
		let item = self.getItem(col.row);
		webix.message({
			text: `${item.amount} ${item.name} has been added to your bag`
		});
	}
}
