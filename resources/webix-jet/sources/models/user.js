let user;

function setValues(data) {
    let properties = [
        'name',
        'email',
        'role',
        'phone',
        'address',
    ];
    debugger;
    let values = {};
    if (Object.keys(data).length) {
        properties.forEach(property => {
            if (data.hasOwnProperty(property)) {
                values[property] = data[property];
            }
        })
    }
    user = values;
}

export {
    user,
    setValues,
};
