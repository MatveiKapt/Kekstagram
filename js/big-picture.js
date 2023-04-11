/* import {isEscapeKey} from './util'; */

const pageBody = document.querySelector('body');
const bigPicture = pageBody.querySelector('.big-picture');
const image = bigPicture.querySelector('.big-picture__img img');
const photoDescription = bigPicture.querySelector('.social__caption');
const likes = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCommentsCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content;

const renderComments = (comments) => {
  const commentsDocumentFragment = document.createDocumentFragment();

  commentsList.replaceChildren();

  for (let i = 0; i <= comments.length - 1; i++) {
    const comment = commentTemplate.cloneNode(true);
    const commentAvatar = comment.querySelector('.social__picture');
    const commentText = comment.querySelector('.social__text');

    commentAvatar.src = comments[i].avatar;
    commentAvatar.alt = comments[i].name;

    commentText.textContent = comments[i].message;

    commentsDocumentFragment.appendChild(comment);
  }

  commentsList.appendChild(commentsDocumentFragment);
};



const showBigPicture = (data) => {

  image.src = data.url;
  photoDescription.textContent = data.description;
  likes.textContent = data.likes;
  commentsCount.textContent = data.comments.length;

  renderComments(data.comments);

  pageBody.classList.add('.modal-open');
  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPictureCloseButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      bigPicture.classList.add('hidden');
    }
  });

  bigPicture.classList.remove('hidden');
}

export {showBigPicture}
