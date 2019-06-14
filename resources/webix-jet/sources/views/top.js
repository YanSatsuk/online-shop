import {JetView} from "webix-jet";
import header from "./header/header";

export default class TopView extends JetView {
    config() {
        return {
            rows: [
                header,
                {
                    $subview: true,
                }
            ]
        };
    }

    /*	init() {

		}*/
}
