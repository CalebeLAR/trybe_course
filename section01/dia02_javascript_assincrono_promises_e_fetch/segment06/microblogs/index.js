import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from './utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
const USER_POST = 'https://dummyjson.com/posts/user';

fetch(USERS_API)
  .then((response) => response.json())
  .then((response) => fillUsersSelect(response.users));

usersSelect.addEventListener('change', () => {
  clearPageData();
  const UserID = usersSelect.value;

  fetch(`${USER_POST}/${UserID}`)
    .then((response) => response.json())
    .then((response) => {
      const [featuredPost] = response.posts;

      fillPosts(response.posts);

      return fetch(`https://dummyjson.com/posts/${featuredPost.id}/comments`);
    })
    .then((response) => response.json())
    .then((comments) => fillFeaturedPostComments(comments.comments))
    .catch((error) => {
      fillErrorMessage('Erro ao recuperar informações');
      console.log(error.message);
    });
});
