import {JetView} from "webix-jet";

export default class BagTable extends JetView {
	getColumns() {
		return [
			{
				id: "image",
				header: "Image",
				width: 150,
				footer: {
					text: "Total:",
					colspan: 4,
				}
			},
			{
				id: "name",
				header: "Name",
				sort: "string",
				fillspace: true,
			},
			{
				id: "amount",
				header: "Amount",
				width: 130,
				sort: "int",
			},
			{
				id: "price",
				header: "Price",
				width: 100,
				sort: "int",
			},
			{
				id: "sum",
				header: "Sum",
				width: 100,
				sort: "int",
                math: "[$r,:2] * [$r,:3]",
				footer: {content:'summColumn'},
			},
			{
				id: "delete",
				header: "",
				width: 60,
				template: "<img src='/svg/trash-can.svg' class='img-padding'/>",
				type: "clean"
			},
		];
	}

    config() {
        this.totalSum = 0;
        let self = this;
        return {
            id: "bagTable",
            view: "datatable",
            footer: true,
            math: true,
            columns: this.getColumns(),
            data: [
                {
                    name: "Lenovo K5",
                    amount: 2,
                    price: 380,
                },
                {
                    name: "Lenovo S920",
                    amount: 1,
                    price: 370,
                },
            ],
            onClick: {
                "img-padding": function(e, col) {
                    self.decreaseAmount(col, this);
                }
            },
        };
    }

    decreaseAmount(col, self) {
        let item = self.getItem(col.row);
        if (item.amount > 1) {
            item.amount--;
            self.updateItem(col.row, item);
        } else {
            self.remove(col.row);
        }
    }
}
