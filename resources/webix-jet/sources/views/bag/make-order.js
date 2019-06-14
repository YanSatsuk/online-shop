import {JetView} from "webix-jet";

export default class MakeOrderView extends JetView {
    config() {
        return {
            view: "button",
            label: "Make order",
            width: 300,
            css: "webix_primary",
            click: () => this.makeOrder(),
        };
    }

    makeOrder() {
        let table = $$('bagTable') ? $$('bagTable') : null;
        if (table && table.count()) {
            this.app.show("/top/main.main/bag.order-form");
        }
    }
}
