import { openRedactorPopup } from './photo-redactor-popup.js';
import { scaleSetting } from './photo-scale-control.js'

const uploadFileControl = document.querySelector('#upload-file');
const imageElement = document.querySelector('.img-upload__preview img');



const photoRedactorConfig = () => {
  uploadFileControl.addEventListener('change', (evt) => {
    const target = evt.target;
    const fileReader = new FileReader();

    fileReader.addEventListener('load', function() {
      imageElement.src = fileReader.result;
    });

    fileReader.readAsDataURL(target.files[0]);

    scaleSetting();
    openRedactorPopup();
  });

};

photoRedactorConfig();
