import {JetView} from "webix-jet";

export default class ProductWindow extends JetView {
	config() {
		return {
			view: "window",
			head: "Empty",
			close: true,
			move: true,
			minWidth: 500,
			body: {
				type: "clean",
				cols: [
					{
						template: "FUCK",
					},
					{
						padding: 20,
						margin: 20,
						rows: [
							{
								localId: "name",
								view: "label",
							},
							{
								localId: "price",
								view: "label",
							},
							{
								cols: [
									{
										localId: "rating",
										view: "label",
									},
									{
										borderless: true,
										template: "<img src='/svg/star-outline.svg' class='star-rating'/>",
										onClick: {
											"star-rating": function (e, col) {
												console.log(e);
											}
										}
									}
								]
							}
						]
					}
				]
			},
			modal: true,
			position: "center",
		};
	}

	showWindow(item) {
		this.setValues(item);
		this.getRoot().show();
	}

	setValues(item) {
		this.setHead(item.name);
		this.setValue(item);
	}

	setHead(name) {
		this.getRoot().getHead().getChildViews()[0].setHTML(name);
	}

	setValue(item) {
		const labelId = [
			"name",
			"price",
			"rating",
		];
		labelId.forEach(id => {
			$$(id).setValue(`${this.capitalizeFirstLetter(id)}: <span class="not-bold">${item[id]}</span>`);
		});
	}

	capitalizeFirstLetter(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
}
