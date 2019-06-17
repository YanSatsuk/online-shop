import {JetView} from "webix-jet";
import products from "../../models/product";

export default class NavigationTree extends JetView {
    config() {
        let self = this;
        return {
            view: "tree",
            select: true,
            width: 250,
            url: "/api/category/getallwithbrands",
            on: {
                onItemClick: function (id) {
                    self.itemClick(id, this);
                }
            }
        };
    }

    itemClick(id, self) {
        let item = self.getItem(id);
        if (item.type === "brand" && typeof item._id === "string") {
            let [, id] = item._id.split(".");
            this.filterData(products, `/api/product/getbybrand/${id}`);
        } else if (item.type === "category") {
            this.filterData(products, `/api/product/getbycategory/${item.id}`);
        }
        this.app.show("/top/main.main/main.products-table");
    }

    filterData(data, url) {
        data.clearAll();
        data.load(url);
    }
}
