import { isEscapeKey } from './util.js';

const pageBody = document.querySelector('body');
const bigPicture = pageBody.querySelector('.big-picture');
const image = bigPicture.querySelector('.big-picture__img img');
const photoDescription = bigPicture.querySelector('.social__caption');
const likes = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCommentsCounter = bigPicture.querySelector('.social__comment-counter');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = document.querySelector('#comment').content;

const COMMENTS_DEFAULT_COUNT = 5;
let currentCommentsCount = COMMENTS_DEFAULT_COUNT;

const onBigPictureEscKeydown = (popup, pageBody) => {
  return (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPicture(popup, pageBody);
    }
  }
};

const closeBigPicture = (popup, pageBody) => {
  popup.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  currentCommentsCount = COMMENTS_DEFAULT_COUNT;
  commentsLoader.hidden = false;

  commentsLoader.removeEventListener('click', commentsLoaderHandler);
  document.removeEventListener('keydown', onBigPictureEscKeydown);
};

let commentsLoaderHandler;

const openBigPicture = (popup, closeButton, pageBody, data) => {
  pageBody.classList.add('modal-open');

  closeButton.addEventListener('click', () => {
    closeBigPicture(popup, pageBody);

    closeButton.removeEventListener('click', closeBigPicture);
  });

  commentsLoaderHandler = onCommentsLoaderClick(data.comments);
  document.addEventListener('keydown', onBigPictureEscKeydown(popup, pageBody));
  commentsLoader.addEventListener('click', commentsLoaderHandler);
  popup.classList.remove('hidden');
};


const renderComments = (comments, count) => {
  const commentsDocumentFragment = document.createDocumentFragment();

  commentsList.innerHTML = '';

  for (let i = 0; i <= count - 1; i++) {
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

const onCommentsLoaderClick = (comments) => {
  return () => {

    currentCommentsCount += COMMENTS_DEFAULT_COUNT;

    const commentsToRender = comments.slice(0, currentCommentsCount);

    if (currentCommentsCount <= comments.length) {
      renderComments(commentsToRender, currentCommentsCount);
      socialCommentsCounter.textContent = currentCommentsCount;
    } else {
      commentsLoader.hidden = true;
      renderComments(comments, comments.length);
      socialCommentsCounter.textContent = comments.length;
    }
  }

};

const showBigPicture = (data) => {

  image.src = data.url;
  photoDescription.textContent = data.description;
  likes.textContent = data.likes;
  commentsCount.textContent = data.comments.length;

  if (data.comments.length < COMMENTS_DEFAULT_COUNT) {
    renderComments(data.comments, data.comments.length);
    socialCommentsCounter.textContent = data.comments.length;
  } else {
    renderComments(data.comments, currentCommentsCount);
    socialCommentsCounter.textContent = currentCommentsCount;
  }

  openBigPicture(bigPicture, bigPictureCloseButton, pageBody, data);
}

export { showBigPicture }
