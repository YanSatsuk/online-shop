import {JetView} from "webix-jet";
import bag from "../../helpers/bag";

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
				id: "model",
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
/*            data: [
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
            ],*/
            onClick: {
                "img-padding": function(e, col) {
                    self.decreaseAmount(col, this);
                }
            },
        };
    }

    init(view) {
        this.setDataFromStorage(view);
    }

    setDataFromStorage(view) {
        let items = bag.get();
        let data = [];
        if (Object.keys(items).length) {
            for (let key in items) {
                data.push(items[key]);
            }
            view.parse(data);
        }
    }

    decreaseAmount(col, self) {
        let item = self.getItem(col.row);
        if (item.amount > 1) {
            item.amount--;
            self.updateItem(col.row, item);
            bag.decreaseAmount(col.row);
        } else {
            self.remove(col.row);
            bag.remove(col.row);
        }
    }
}
