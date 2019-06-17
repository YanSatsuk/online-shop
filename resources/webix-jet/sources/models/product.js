let product = new webix.DataCollection({
    url: "/api/product/getbycategory/" + 0, // 0 - get default category id from backend
});

export default product;
