import {JetView} from "webix-jet";

export default class OrderForm extends JetView {
    config() {
        return {
            type: "clean",
            rows: [
                {
                    view: "form",
                    padding: 20,
                    elements: [
                        {
                            margin: 20,
                            rows: [
                                {
                                    view: "text",
                                    name: "name",
                                    label: "Your Name*",
                                    labelWidth: 250,
                                },
                                {
                                    view: "text",
                                    name: "email",
                                    label: "Email*",
                                    labelWidth: 250,
                                },
                                {
                                    view: "text",
                                    name: "phone",
                                    label: "Phone*",
                                    labelWidth: 250,
                                },
                                {
                                    view: "combo",
                                    name: "deliveryType",
                                    label: "Delivery type",
                                    labelWidth: 250,
                                    options: ['Courier', 'Pickup'],
                                },
                                {
                                    view: "text",
                                    name: "address",
                                    label: "Delivery address*",
                                    labelWidth: 250,
                                },
                                {
                                    view: "combo",
                                    name: "paymentType",
                                    label: "Payment type",
                                    labelWidth: 250,
                                    options: ['Card', 'Cash'],
                                },
                                {
                                    view: "button",
                                    label: "Checkout",
                                },
                            ]
                        }
                    ],
                },
                {},
            ],
        };
    }
}
