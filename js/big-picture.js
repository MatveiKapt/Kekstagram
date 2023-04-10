import {isEscapeKey} from './util';

const bigPicture = document.querySelector('.big-picture');
const image = bigPicture.querySelector('.big-picture__img img');
const photoDescription = bigPicture.querySelector('.social__caption');
const likes = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
/* const commentsList = bigPicture.querySelector('.social__comments'); */



const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');

  image.src = data.url;
  photoDescription.textContent = data.description;
  likes.textContent = data.likes;
  commentsCount.textContent = data.comments.length;

  bigPictureCloseButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
  });

  bigPicture.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      bigPicture.classList.add('hidden');
    }
  });

};

export {showBigPicture};
