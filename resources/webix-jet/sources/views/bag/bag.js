import {JetView} from "webix-jet";
import navigationTree from "../main/navigation-tree";
import bagTable from "./bag-table";

export default class BagView extends JetView {
	config() {
		return {
			cols: [
				navigationTree,
				bagTable,
			]
		};
	}
}