var productList = document.querySelector('#productList');

var promise = axios ({
    url: 'https://shop.cyberlearn.vn/api/Product',
    method: 'GET',
    responseType: 'json',
});

promise.then(function(result) {
    var products = result.data.content;
    products.forEach(function(product) {
        var renderproduct = `
          <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span><button>Buy now</button> </span <p class="productprice">${product.price} $</p>
          </div>
        `;
        productList.innerHTML += renderproduct;
      });
  });
promise.catch(function(error) {
    console.log(error);
});