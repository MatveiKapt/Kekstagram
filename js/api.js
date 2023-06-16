const getData = (onSuccess, onError) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        onError();
      }
    })
    .then((data) => onSuccess(data))
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
