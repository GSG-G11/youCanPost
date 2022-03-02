const form = document.querySelector('.signup');
const name = document.querySelector('#name');
const password = document.querySelector('#password');
const err = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(name.value, password.value);
  fetch('/create-user', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ name: name.value, password: password.value }),
  }).then((response) => response.json())
    .then((data) => {
      if (data.loged) {
        window.location.href = `../html/home.html?id=${data.id}`;
      }
    })
    .catch((err) => {
      err.innerHTML = '';
      err.textContent = 'login fail';
    });
});

const details = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
fetch('/allposts', details)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
