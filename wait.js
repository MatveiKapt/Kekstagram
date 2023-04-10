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

// Константы для конфига описания фото
const DESCRIPTIONS_COUNT = 25;
const ID_COUNT = 25;
const PHOTOS_COUNT = 25;
const COMMENTS_MESSAGES_TEMPLATES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const USERS_NAMES = [
  'Артём',
  'Коля',
  'Влад',
  'Арсений',
  'Владимир',
  'Вячеслав',
  'Виталий',
  'Сергей',
];

// Настройки описания фото
const photoDescriptionConfig = {
  descriptionId: createRandomUniqueIntegersArray(1, ID_COUNT, ID_COUNT),
  photoUrl: createRandomUniqueIntegersArray(1, PHOTOS_COUNT, PHOTOS_COUNT),
  photoDescription: 'Моё фото.',
  getLikesCount: () => {
    return getRandomInteger(15, 200);
  },
  getCommentId: () => {
    return getRandomInteger(1, 500);
  },
  getAvatarUrlNumber: () => {
    return getRandomInteger(1, 6);
  },
  generateCommentMessage: () => {
    let message = '';

    if (getRandomInteger(1,2) === 2) {
      const getMessageIndexs = createRandomUniqueIntegersArray(0, COMMENTS_MESSAGES_TEMPLATES.length - 1, 2);

      for (let i = 0; i < getMessageIndexs.length - 1; i++) {
        message += COMMENTS_MESSAGES_TEMPLATES[getMessageIndexs[i]];
      }
      return message;
    }

    message = COMMENTS_MESSAGES_TEMPLATES[getRandomInteger(0, COMMENTS_MESSAGES_TEMPLATES.length - 1)];

    return message;
  },
  getUserName: () => {
    return USERS_NAMES[getRandomInteger(0, USERS_NAMES.length - 1)];
  },
};

const {descriptionId, photoUrl, photoDescription, getLikesCount, getCommentId, getAvatarUrlNumber, generateCommentMessage, getUserName} = photoDescriptionConfig;

// Генерация объекта описания фото
const createPhotoDescription = (descriptionId, photoUrl, photoDescription, likes, commentId, avatarNumber, commentMessage, userName) => {
  let description = {
    id: descriptionId,
    url: 'photos/' + photoUrl + '.jpg',
    description: photoDescription,
    likes: likes,
    comments: {
      id: commentId,
      avatar: 'img/avatar-' + avatarNumber + '.svg',
      message: commentMessage,
      name: userName,
    },
  };
  return description
};

// Генерация массива из объектов описания к фото
const generatePhotosDescriptions =  (descriptionsCount) => {
  let photosDescriptions = [];

  for (let i = 0; i <= descriptionsCount - 1; i++) {
    photosDescriptions.push(createPhotoDescription(
      descriptionId[i],
      photoUrl[i],
      photoDescription,
      getLikesCount(),
      getCommentId(),
      getAvatarUrlNumber(),
      generateCommentMessage(),
      getUserName()));
  }

  return photosDescriptions;
};

console.log(generatePhotosDescriptions(DESCRIPTIONS_COUNT));
