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
            start: "/top/main.main",
            routes: {
                "/top/main": "/top/main.main",
                "/top/login": "/top/auth.auth/auth.login",
                "/top/register": "/top/auth.auth/auth.signup",
                "/top/reset": "/top/auth.auth/auth.reset",
                "/top/bag": "/top/bag.bag",
            }
        };

        super({...defaults, ...config});

        this.use(auth);
    }
}

if (!BUILD_AS_MODULE) {
    webix.ready(() => new MyApp().render());
}
