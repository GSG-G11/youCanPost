const form = document.querySelector('.login');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const err = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(name.value, password.value);
  fetch('/login', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: name.value, password: password.value }),
  }).then((response) => response.json())
    .then((data) => {
      if (data.loged) {
        window.location.href = `../html/home.html?id=${data.id}`;
      } else {
        err.innerHTML = '';
        err.textContent = 'login error incorrect name or password';
      }
    }).catch((errors) => {
      err.innerHTML = '';
      err.textContent = 'login fail';
    });
});
