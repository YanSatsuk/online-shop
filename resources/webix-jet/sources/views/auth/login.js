import {JetView} from "webix-jet";
// import Messages from '../../helpers/messages';

export default class Login extends JetView {
    getElements() {
        return [
            {
                view: "text",
                label: "E-mail Address",
                name: "email",
                labelWidth: 120,
                labelAlign: "right"
            },
            {
                view: "text",
                type: "password",
                label: "Password",
                name: "password",
                labelWidth: 120,
                labelAlign: "right"
            },
            {
                view: "checkbox",
                labelRight: "Remember Me",
                value: 0,
                css: {"padding-left": "40px;"}
            },
            {
                paddingX: 120,
                cols: [
                    {
                        view: "button",
                        value: "Login",
                        width: 100,
                        type: "form",
                        click: this.login,
                    },
                    {
                        template: `<a href="#!/top/reset">Forgot Your Password?</a>`,
                        borderless: true,
                        css: {
                            "line-height": "32px;",
                            "padding-left": "20px;"
                        }
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
                "email": webix.rules.isEmail,
                "password": webix.rules.isNotEmpty,
            },
            elements: this.getElements()
        }
    }

    login() {
        let form = this.getFormView();
        if (form.validate()) {
            let values = form.getValues();
            this.$scope.app.getService("auth").signin(values).then((res) => {
                let { code, data, data: { token, expires_at }, message } = res.json();
                if (code && code == 200) {
                    this.$scope.app.getService("auth").login({ token, expires_at });
                    //this.$scope.app.getService("auth").saveToken(data.token);
                    console.log(this.$scope.app.getService("auth").isAuth());
                    Messages._showMessage(message);
                } else if (code && code == 400) {
                    Messages._showMessage(message);
                }
            })
        }
    }
}
