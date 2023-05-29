const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const controlValue = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const ControlConfig = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100,
};

const resetScale = () => {
  controlValue.value = 100 + '%';
  image.style.transform = 'scale(1)';
};

const minusValue = (value) => {
  if (value > ControlConfig.MIN && value <= ControlConfig.MAX) {
    value = value - ControlConfig.STEP;
  }

  return value;
};

const plusValue = (value) => {
  if (value >= ControlConfig.MIN && value < ControlConfig.MAX) {
    value = value + ControlConfig.STEP;
  }

  return value;
};

const changeScale = () => {
  let currentValue = ControlConfig.DEFAULT;
  controlValue.value = currentValue + '%'

  smallerButton.addEventListener('click', () => {
    currentValue = minusValue(currentValue);
    controlValue.value = currentValue + '%'

    image.style.transform = `scale(0.${currentValue})`;
  });


  biggerButton.addEventListener('click', () => {
    currentValue = plusValue(currentValue);
    controlValue.value = currentValue + '%'
    if (currentValue !== ControlConfig.MAX) {
      image.style.transform = `scale(0.${currentValue})`;
    } else {
      image.style.transform = 'scale(1)';
    }
  });
};

const scaleSetting = () => {
  changeScale();
};

export { scaleSetting, resetScale }
