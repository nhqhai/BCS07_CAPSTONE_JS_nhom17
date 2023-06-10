function registerKhach(){
var promise = axios({
    url: 'https://shop.cyberlearn.vn/api/Users/signup',
    method: 'POST',
});
promise.then(function (res) {
    renderKhach(res.data);
});
promise.catch(function (err) {
});
}

registerKhach();