const sortPanel = document.querySelector('.img-filters');

const getData = (onSuccess, onError, sort) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        sortPanel.classList.remove('img-filters--inactive');
        return response.json();
      } else {
        onError();
      }
    })
    .then((data) => {
      onSuccess(data);
      sort(data);
    })
    .catch(() => onError())
};

const sendData = (onSuccess, onError, body) => {
  fetch ('https://23.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        onError();
      }

      onSuccess();
    })
    .catch(() => onError())
};

export { getData, sendData }
