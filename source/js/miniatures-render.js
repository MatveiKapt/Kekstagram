import { showBigPicture } from './big-picture.js';

const miniatureTemplate = document.querySelector('#picture').content;
const miniaturesList = document.querySelector('.pictures');

const makeMiniature = (data) => {
  const miniature = miniatureTemplate.cloneNode(true);
  const miniatureImage = miniature.querySelector('.picture__img');
  const miniatureComments = miniature.querySelector('.picture__comments');
  const miniatureLikes = miniature.querySelector('.picture__likes');

  miniatureImage.src = data.url;
  miniatureComments.textContent = data.comments.length;
  miniatureLikes.textContent = data.likes;

  return miniature;
};

const renderMiniatures = (miniaturesData) => {
  const miniaturesFragment = document.createDocumentFragment();

  for (let i = 0; i <= miniaturesData.length - 1; i++) {
    miniaturesFragment.appendChild(makeMiniature(miniaturesData[i]));
  }

  miniaturesList.appendChild(miniaturesFragment);

  for (let i = 0; i <= miniaturesData.length - 1; i++) {
    miniaturesList.querySelectorAll('a')[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(miniaturesData[i]);
    });
  }
};

export { renderMiniatures }

// test