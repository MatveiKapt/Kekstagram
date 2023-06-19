import { renderMiniatures } from './miniatures-render.js';
import { createRandomUniqueIntegersArray } from './util.js';

const RANDOM_MINIATURES_COUNT = 10;

const sortForm = document.querySelector('.img-filters__form');

const removeMiniatures = () => {
  const miniatures = document.querySelector('.pictures').querySelectorAll('a');
  miniatures.forEach(miniature => miniature.remove());
};

const removeAndAddActiveClass = (button) => {
  const buttons = sortForm.querySelectorAll('button');
  buttons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  })

  button.classList.add('img-filters__button--active');
};

const onDefaultClick = (button, data) => {
  removeMiniatures();
  removeAndAddActiveClass(button);
  renderMiniatures(data);
};

const onRandomClick = (button, data) => {
  removeAndAddActiveClass(button);

  const indexArray = createRandomUniqueIntegersArray(0, data.length - 1, RANDOM_MINIATURES_COUNT);
  const randomMiniatures = indexArray
    .map(index => data.slice()[index]);

  removeMiniatures();
  renderMiniatures(randomMiniatures);
};

const onDiscussedClick = (button, data) => {
  removeAndAddActiveClass(button);

  const discussedSortArray = data
    .slice()
    .sort((a, b) => b.comments.length - a.comments.length);

  removeMiniatures();
  renderMiniatures(discussedSortArray);
};

const onSortFormElementClick = (data) => {
  return (evt) => {
    if (evt.target.id === 'filter-default') {
      onDefaultClick(evt.target, data);
    }

    if (evt.target.id === 'filter-random') {
      onRandomClick(evt.target, data);
    }

    if (evt.target.id === 'filter-discussed') {
      onDiscussedClick(evt.target, data);
    }
  }
};

const onSortFormChange = (data) => {
  sortForm.addEventListener('click', onSortFormElementClick(data));
};

export { onSortFormChange }
