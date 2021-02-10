const slider = document.querySelector('.form-component__input-slider');
const check = document.querySelector('.form-component__input-checkbox');
const price = document.querySelector('.form-component__span');
const views = document.querySelector('#views');
const btn = document.querySelector('.form-component__button');

const changeValues = () => {
    let arrViews = ['10K', '50K', '100K', '500K', '1M'];
    let arrPrice = ['$8.00', '$12.00', '$16.00', '$24.00', '$36.00'];
}

slider.addEventListener('change', changeValues, false);