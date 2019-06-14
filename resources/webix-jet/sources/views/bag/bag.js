import {JetView} from "webix-jet";
import bagTable from "./bag-table";
import makeOrder from "./make-order";

export default class BagView extends JetView {
    config() {
        return {

            rows: [
                bagTable,
                {
                    cols: [
                        makeOrder,
                        {}
                    ]
                }
            ]
        };
    }
}
