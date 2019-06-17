import {JetView} from "webix-jet";

export default class OrderForm extends JetView {
    getElements() {
        return [
            {
                margin: 20,
                rows: [
                    {
                        view: "text",
                        name: "name",
                        label: "Your Name*",
                        labelWidth: 250,
                        invalidMessage: "Your Name can not be empty",
                    },
                    {
                        view: "text",
                        name: "email",
                        label: "Email*",
                        labelWidth: 250,
                        invalidMessage: "Incorrect email",
                    },
                    {
                        view: "text",
                        name: "phone",
                        label: "Phone*",
                        labelWidth: 250,
                        invalidMessage: "Incorrect phone",
                    },
                    {
                        view: "combo",
                        name: "deliveryType",
                        label: "Delivery type",
                        labelWidth: 250,
                        options: ['Courier', 'Pickup'],
                        invalidMessage: "Delivery type can not be empty",
                    },
                    {
                        view: "text",
                        name: "address",
                        label: "Delivery address*",
                        labelWidth: 250,
                        invalidMessage: "Delivery address can not be empty",
                    },
                    {
                        view: "combo",
                        name: "paymentType",
                        label: "Payment type",
                        labelWidth: 250,
                        options: ['Card', 'Cash'],
                        invalidMessage: "Payment type can not be empty",
                    },
                    {
                        view: "button",
                        label: "Checkout",
                        click: () => this.makeOrder(),
                    },
                ]
            }
        ]
    }
    config() {
        return {
            type: "clean",
            rows: [
                {
                    localId: "orderForm",
                    view: "form",
                    padding: 20,
                    rules: {
                        "name": webix.rules.isNotEmpty,
                        "email": webix.rules.isEmail,
                        "phone": webix.rules.isNotEmpty,
                        "deliveryType": webix.rules.isNotEmpty,
                        "address": webix.rules.isNotEmpty,
                        "paymentType": webix.rules.isNotEmpty,
                    },
                    elements: this.getElements(),
                },
                {},
            ],
        };
    }

    makeOrder() {
        let form = this.$$('orderForm');
        if (form && form.validate()) {
            console.log(form.getValues());
        }
    }
}
