let bag = {
    _key: "bag",
    add(data) {
        let bag = this.get();
        if (bag && Object.keys(bag).length) {
            bag[data.id] = data;
            this._setItems(bag);
        } else {
            bag = {};
            bag[data.id] = data;
            this._setItems(bag);
        }
        this._changeCountInHeader();
    },
    remove(id) {
        let items = this.get();
        delete items[id];
        this._addAfterChanged(items);
        this._changeCountInHeader();
    },
    decreaseAmount(id) {
        let items = this.get();
        items[id]['amount'] = --items[id]['amount'];
        this._addAfterChanged(items);
    },
    getCount() {
        let items = this.get();
        return Object.keys(items).length;
    },
    _addAfterChanged(data) {
        sessionStorage.removeItem(this._key);
        this._setItems(data);
    },
    get() {
        return JSON.parse(sessionStorage.getItem(this._key));
    },
    _setItems(data) {
        sessionStorage.setItem(this._key, JSON.stringify(data));
    },
    _changeCountInHeader() {
        let bag = $$('bagLabel');
        if (bag) {
            bag.callEvent('changeCount', []);
        }
    },
}

export default bag;
