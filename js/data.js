import { getRandomInteger, createRandomUniqueIntegersArray } from './util.js';

const DESCRIPTIONS_COUNT = 25;
const DESCRIPTIONS = [
  'Моё Фото.',
  'Из последнего.',
  'Лайкайте скорее',
  'Как вам?',
  'Радости жизни.',
]
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

const Likes = {
  MIN: 15,
  MAX: 200,
}

const CommentsCount = {
  MIN: 1,
  MAX: 5,
};

const CommentsId = {
  MIN: 1,
  MAX: 1000,
};

const AvatarsId = {
  MIN: 1,
  MAX: 6,
};

const generateCommentMessage = () => {
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
}

const addComment = () => {
  let comments = [];

  for (let i = 0; i < getRandomInteger(CommentsCount.MIN, CommentsCount.MAX); i++) {
    comments.push({
      id: getRandomInteger(CommentsId.MIN, CommentsId.MAX),
      avatar: 'img/avatar-' + getRandomInteger(AvatarsId.MIN, AvatarsId.MAX) + '.svg',
      message: generateCommentMessage(),
      name: USERS_NAMES[getRandomInteger(0, USERS_NAMES.length - 1)],
    });
  }

  return comments;
}

const createPhotoDescriptions = () => {
  let photosDescriptions = [];
  for (let i = 0; i < DESCRIPTIONS_COUNT; i++) {
    photosDescriptions.push({
      id: i + 1,
      url: 'photos/' + (i + 1) + '.jpg',
      description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
      likes: getRandomInteger(Likes.MIN, Likes.MAX),
      comments: addComment(),
    });
  }
  return photosDescriptions;
};

export { createPhotoDescriptions };
