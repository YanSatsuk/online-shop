import {JetView} from "webix-jet";
import productsTable from "./products-table";
import navigationTree from "./navigation-tree";

export default class MainView extends JetView {
	config() {
		return {
			cols: [
				navigationTree,
				productsTable,
			]
		};
	}
}