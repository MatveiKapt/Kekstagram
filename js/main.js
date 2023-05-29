import { createPhotoDescriptions } from './data.js';
import { renderMiniatures } from './miniatures-render.js';
import './effects.js'
import './photo-redactor.js';
import './form.js';

renderMiniatures(createPhotoDescriptions());
