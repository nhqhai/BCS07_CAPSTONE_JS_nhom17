var form = document.querySelector('.contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.querySelector('#email').value;
    var name = document.querySelector('#name').value;
    var password = document.querySelector('#password').value;
    var phone = document.querySelector('#phone').value;
    var gender = document.querySelector('input[name="gender"]:checked').value === 'male' ? true : false; 
    var promise = axios({
      url: 'https://shop.cyberlearn.vn/api/Users/signup',
      method: 'POST',
      data: {
        email: email,
        name: name,
        password: password,
        phone: phone,
        gender: gender
      },
      responseType: 'json'
    });
    promise.then(function(response) {
      console.log(response.data.content);
      form.reset();
    }).catch(function(error) {
      console.error(error);
    });
  });
  