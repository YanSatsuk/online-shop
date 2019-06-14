import {JetView} from "webix-jet";

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
/*		const colsAnonim = [
			this.getLogo(),
			{},
			this.getGreeting(),
			{},
			this.getNavLink("/top/login", "Login"),
			this.getNavLink("/top/register", "Register"),
			this.getNavLink("/top/bag", "Bag"),
		];*/
		const colsLogged = [
			this.getLogo(),
			{},
			this.getGreeting(),
			{},
			this.getNavLink("#!/top/logout", "Logout"),
			this.getNavLink("#!/top/history", "History"),
			this.getNavLink("#!/top/bag", "Bag"),
		];
		return {
			view: "toolbar",
			cols: colsLogged
		};
	}
}
