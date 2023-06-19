import { getData } from './api.js';
import { renderMiniatures } from './miniatures-render.js';
import { showGetErrorMessage } from './util.js';
import { onSortFormChange } from './miniatures-sort.js';
import './effects.js'
import './photo-redactor.js';
import './form.js';
import './miniatures-sort.js';

getData(renderMiniatures, showGetErrorMessage, onSortFormChange);

