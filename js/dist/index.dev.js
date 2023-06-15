"use strict";

var productList = document.querySelector('#productList');
var promise = axios({
  url: 'https://shop.cyberlearn.vn/api/Product',
  method: 'GET',
  responseType: 'json'
});
promise.then(function (result) {
  var products = result.data.content;
  products.forEach(function (product) {
    var renderproduct = "\n          <div class=\"product\">\n            <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\">\n            <h3>").concat(product.name, "</h3>\n            <p>").concat(product.description, "</p>\n            <span><button>Buy now</button> </span <p class=\"productprice\">").concat(product.price, " $</p>\n          </div>\n        ");
    productList.innerHTML += renderproduct;
  });
});
promise["catch"](function (error) {
  console.log(error);
});