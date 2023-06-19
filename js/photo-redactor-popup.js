import { isEscapeKey } from './util.js'
import { resetEffects } from './effects.js'
import { resetScale } from './photo-scale-control.js'

const form = document.querySelector('.img-upload__form')
const uploadFileControl = document.querySelector('#upload-file');
const uploadFilePopup = document.querySelector('.img-upload__overlay');
const uploadFilePopupCloseButton = document.querySelector('#upload-cancel');
const pageBody = document.querySelector('body');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const isHastagFieldFocus = () => document.activeElement === hashtagField;
const isDescriptionFieldFocus = () => document.activeElement === descriptionField;
const isTextFieldFocus = () => isHastagFieldFocus() || isDescriptionFieldFocus();

const closeRedactorPopup = () => {
  uploadFilePopup.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  uploadFileControl.value = '';

  resetScale();
  resetEffects();
  form.reset();
};

const onRedactorPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocus()) {
    evt.preventDefault();
    closeRedactorPopup();
  }
};

const openRedactorPopup = () => {
  uploadFilePopupCloseButton.addEventListener('click', closeRedactorPopup);

  document.addEventListener('keydown', onRedactorPopupEscKeydown);

  pageBody.classList.add('modal-open');
  uploadFilePopup.classList.remove('hidden');
};

export { openRedactorPopup, closeRedactorPopup }
