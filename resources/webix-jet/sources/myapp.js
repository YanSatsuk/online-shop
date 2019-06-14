import "./styles/app.css";
import {JetApp, EmptyRouter, HashRouter} from "webix-jet";
import auth from "./helpers/auth";

class MyApp extends JetApp {
    constructor(config) {
        const defaults = {
            id: APPNAME,
            version: VERSION,
            router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
            debug: !PRODUCTION,
            start: "/top/main.main/main.products-table",
            routes: {
                "/top/main": "/top/main.main/main.products-table",
                "/top/login": "/top/auth.auth/auth.login",
                "/top/register": "/top/auth.auth/auth.signup",
                "/top/reset": "/top/auth.auth/auth.reset",
                "/top/bag": "/top/main.main/bag.bag",
                "/top/order": "/top/main.main/bag.order-form",
            }
        };

        super({...defaults, ...config});

        this.use(auth);
    }
}

if (!BUILD_AS_MODULE) {
    webix.ready(() => new MyApp().render());
}
