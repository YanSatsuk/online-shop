import {getPostPromise} from "./requests";
import Messages from "./messages";
import {setValues, user} from "../models/user";

function Auth(app) {
    const auth = {
        signup(data) {
            getPostPromise('/api/auth/signup', data).then((res) => {
                let { data, message, data: { token, expires_at } } = res.json();
                Messages.showMessage(message);
                saveInLocalStorage({ token, expires_at });
                setValues(data);
                console.log(data);
                $$('nameLogo').setValues({ value: data.name });
            }).fail((xhr) => {
                let { data } = JSON.parse(xhr.response);
                Messages.getErrors(data);
            });
        },
        getUser() {
            console.log(user);
            $$('nameLogo').setValues({ value: user.name });
        }
    };

    app.setService('auth', auth);

    const saveInLocalStorage = (items) => {
        var item;
        if (typeof items === 'object' && Object.keys(items).length) {
            for (item in items) {
                localStorage.setItem(item, items[item]);
            }
        }
    }

    const clearLocalStorage = (keys) => {
        if (Array.isArray(keys) && keys.length) {
            keys.forEach(key => {
                localStorage.removeItem(key);
            })
        }
    }

    const getFromLocalStorage = (keys) => {
        let items = [];
        if (Array.isArray(keys) && keys.length) {
            keys.forEach(key => {
                items.push(localStorage.getItem(key));
            })
        }
        return items;
    }

    const isExistAndNotExpired = () => {
        let [token, expires_at] = this.getFromLocalStorage(['token', 'expires_at']);
        const expiresTime = new Date(expires_at).getTime();
        const dateNow = new Date().getTime();
        if (token && (expires_at && expiresTime > dateNow)) {
            return true;
        }  else if (!token || (!expires_at || expiresTime < dateNow)) {
            return false;
        }
    }
};

export default Auth;

