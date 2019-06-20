import {JetView} from "webix-jet";
import bagObj from "../../helpers/bag";

export default class HeaderView extends JetView {
	getLogo() {
		return {
			view: "label",
			label: "Online Shop",
			width: 300,
			css: "horizontal-center",
			click: () => {
				this.app.show("/top/main.main/main.products-table");
			}
		};
	}

	getNavLink(url, name) {
		return {
			view: "label",
			template: `<a href="${url}">${name}</a>`,
			width: 100,
			css: "vertical-middle",
		};
	}

	getGreeting() {
		return {
			view: "label",
			template: "Hi, pidr",
			css: "vertical-middle horizontal-center",
		};
	}

	config() {
	    let bag = this.getNavLink("#!/top/bag", "Bag");
	    bag['id'] = 'bagLabel';
		const colsAnonim = [
			this.getLogo(),
			{},
			this.getGreeting(),
			{},
			this.getNavLink("#!/top/login", "Login"),
			this.getNavLink("#!/top/register", "Register"),
			bag,
		];
		const colsLogged = [
			this.getLogo(),
			{},
			this.getGreeting(),
			{},
			this.getNavLink("#!/top/logout", "Logout"),
			this.getNavLink("#!/top/history", "History"),
            bag,
		];
		return {
			view: "toolbar",
			cols: colsAnonim,
		};
	}

	init() {
	    this.attachChangeEvent();
        $$("bagLabel").callEvent('changeCount', []);
    }

    attachChangeEvent() {
        let bag = $$("bagLabel");
        bag.attachEvent('changeCount', function() {
            let count = bagObj.getCount();
            if (count) {
                bag.setValue(`Bag (${count})`);
            } else {
                bag.setValue("Bag");
            }
        });
    }
}
