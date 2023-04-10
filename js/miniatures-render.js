import {showBigPicture} from './big-picture.js';

const miniatureTemplate = document.querySelector('#picture').content;
const miniaturesList = document.querySelector('.pictures');

const renderMiniatures = (miniaturesData) => {
  const miniaturesFragment = document.createDocumentFragment();

  for (let i = 0; i <= miniaturesData.length - 1; i++) {
    const miniature = miniatureTemplate.cloneNode(true);
    const miniatureImage = miniature.querySelector('.picture__img');
    const miniatureComments = miniature.querySelector('.picture__comments');
    const miniatureLikes = miniature.querySelector('.picture__likes');

    miniatureImage.src = miniaturesData[i].url;
    miniatureComments.textContent = miniaturesData[i].comments.length;
    miniatureLikes.textContent = miniaturesData[i].likes;

    miniaturesFragment.appendChild(miniature);
  }

  miniaturesList.appendChild(miniaturesFragment);

  for (let i = 0; i <= miniaturesData.length - 1; i++) {
    miniaturesList.querySelectorAll('a')[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPicture(miniaturesData[i]);
    });
  }
};

export {renderMiniatures};
