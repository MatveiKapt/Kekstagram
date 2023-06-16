import { getData } from './api.js';
import { renderMiniatures } from './miniatures-render.js';
import { showGetErrorMessage } from './util.js';
import './effects.js'
import './photo-redactor.js';
import './form.js';

getData(renderMiniatures, showGetErrorMessage);

