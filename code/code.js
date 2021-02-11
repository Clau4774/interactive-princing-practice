const slider = document.querySelector('.form-component__input-slider');
const check = document.querySelector('.form-component__input-checkbox');
const price = document.querySelector('.form-component__span');
const views = document.querySelector('#views');
const btn = document.querySelector('.form-component__button');

let state = false;

const getValue = () => {
    let val =slider.value;
    console.log(val)
    changeValues(val);
}



const changeValues = (e) => {
    let arrViews = ['10K', '50K', '100K', '500K', '1M'];
    let arrPrice = [8, 12, 16, 24, 36];
    let discount = arrPrice.map(a => {
       return (a-(a*.25));
    });
    
    const inputValue = e;
    
    !state ? (price.innerText = `$${arrPrice[inputValue]}.00 `, views.innerText = arrViews[inputValue]) :  (price.innerText = `$${discount[inputValue]}.00 `, views.innerText = arrViews[inputValue]);

    return !state ? arrPrice[inputValue] : discount[inputValue];

}
const discount = (e) => {
    
    
    state = !state;
    
    getValue();

}

const confirmPay = (e) => {
    
}

slider.addEventListener('input', getValue, false);

check.addEventListener('click', discount, false);