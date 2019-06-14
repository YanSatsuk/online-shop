import {JetView} from "webix-jet";

export default class NavigationTree extends JetView {
	config() {
		return {
			view: "tree",
			select: true,
			width: 250,
			data: [
				{
					value: "Phones",
					open: true,
					data: [
						{
							value: "Lenovo"
						},
						{
							value: "Samsung"
						},
						{
							value: "Nokia"
						},
					],
				}
			],
		};
	}
}