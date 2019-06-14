import {JetView} from "webix-jet";

export default class OrderForm extends JetView {
    config() {
        return {
            view: "form",
            elements: [
                {
                    rows: [
                        {
                            view: "text",
                            name: "name",
                            label: "Your Name*",
                        },
                        {
                            view: "text",
                            name: "Email",
                            label: "Your Name*",
                        },
                        {
                            view: "text",
                            name: "Phone",
                            label: "Your Name*",
                        },
                        {
                            view: "button",
                            label: "Checkout",
                        },
                    ]
                }
            ],
        }
    }
}
