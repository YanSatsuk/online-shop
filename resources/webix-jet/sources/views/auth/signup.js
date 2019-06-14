import {JetView} from "webix-jet";
import auth from "../../helpers/auth";

export default class Signup extends JetView {
    getElements() {
        return [
            {
                view: "text",
                label: "Name",
                name: "name",
                labelWidth: 140,
                labelAlign:"right"
            },
            {
                view: "text",
                label: "E-mail Address",
                name: "email",
                labelWidth: 140,
                labelAlign:"right"
            },
            {
                view: "text",
                type: "password",
                label: "Password",
                name: "password",
                labelWidth: 140,
                labelAlign:"right"
            },
            {
                view: "text",
                type: "password",
                label: "Confirm Password",
                name: "c_password",
                labelWidth: 140,
                labelAlign:"right"
            },
            {
                paddingX: 140,
                cols: [
                    {
                        view: "button",
                        value: "Register",
                        width: 100,
                        type: "form",
                        click: this.register
                    }
                ]
            }
        ]
    }

    config() {
        return {
            view: "form",
            paddingY: 150,
            width: 600,
            rules: {
                "name": webix.rules.isNotEmpty,
                "email": webix.rules.isEmail,
                "password": webix.rules.isNotEmpty,
                "c_password": webix.rules.isNotEmpty
            },
            elements: this.getElements()
        }
    }

    register() {
        let form = this.getFormView();
        if (form.validate()) {
            let values = form.getValues();
            this.$scope.app.getService('auth').signup(values);
            // this.$scope.app.getService('auth').getUser();
        }
    }
}
