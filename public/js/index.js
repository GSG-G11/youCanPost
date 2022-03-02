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

const displayPosts = (data) => {
  const postsContainer = document.querySelector('.posts-cont');
  data.forEach((element) => {
    const postCard = document.createElement('div');
    postCard.classList = 'post-card';
    const owner = document.createElement('h4');
    owner.classList = 'owner';
    const line = document.createElement('hr');
    const title = document.createElement('h4');
    title.classList = 'title';
    const content = document.createElement('p');
    content.classList = 'content';

    owner.innerText = element.name;
    title.innerText = element.title;
    content.innerText = element.content;

    postCard.appendChild(owner);
    postCard.appendChild(line);
    postCard.appendChild(title);
    postCard.appendChild(content);

    postsContainer.appendChild(postCard);
  });
};

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
    displayPosts(data);
  });
