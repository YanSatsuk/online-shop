function getPostPromise(url, data) {
    return webix.ajax().post(url, data);
}

export {
    getPostPromise
}
