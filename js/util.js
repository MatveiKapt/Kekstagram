// Получаем случайное число
const getRandomInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Получение массива случайных уникальных чисел
const createRandomUniqueIntegersArray = (min, max, arrayLength) => {
  let numbers = [];

  if (max - min + 1 < arrayLength) {
    return -1;
  }

  while (numbers.length < arrayLength) {
    const num = getRandomInteger(min, max);
    if (!numbers.includes(num)) {
      numbers.push(num);
    }
  }
  return numbers;
}

// Проверка длинны строки
const checkStrokeLength = (stroke, maxLength) => {
  return stroke.length <= maxLength;
};
checkStrokeLength('', 1);

// Проверка на нажитие клавиши Escape
const isEscapeKey = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const closePopup = (popup, pageBody) => {
  popup.classList.add('hidden');
  pageBody.classList.remove('modal-open')
  document.removeEventListener('keydown', onPopupEscKeydown);
};

const onPopupEscKeydown = (popup, pageBody) => {
  return (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closePopup(popup, pageBody);
    }
  }
};

const openPopup = (popup, closeButton, pageBody) => {
  pageBody.classList.add('modal-open');

  closeButton.addEventListener('click', () => {
    closePopup(popup, pageBody);

    closeButton.removeEventListener('click', closePopup);
  });

  document.addEventListener('keydown', onPopupEscKeydown(popup, pageBody));

  popup.classList.remove('hidden');
};

export { getRandomInteger, createRandomUniqueIntegersArray, checkStrokeLength, isEscapeKey, openPopup }

