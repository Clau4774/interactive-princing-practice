const slider = document.querySelector('.form-component__input-slider');
const check = document.querySelector('.form-component__input-checkbox');
const price = document.querySelector('.form-component__span');
const views = document.querySelector('#views');
const btn = document.querySelector('.form-component__button');

let state = false;

const changeValues = (e) => {
    let arrViews = ['10K', '50K', '100K', '500K', '1M'];
    let arrPrice = [8, 12, 16, 24, 36];
    let discount = arrPrice.map(a => {
       return (a-(a*.25));
    });
    
    console.log(discount)
    const inputValue = e.target.value;
    
    if (!state) {
        return  price.innerText = `$${arrPrice[inputValue]}.00 `, views.innerText = arrViews[inputValue];
    } else {
        return  price.innerText = `$${discount[inputValue]}.00 `, views.innerText = arrViews[inputValue];
    }
}

const discount = (e) => {
    const value = e.target.checked;
    state = !state;
    console.log(slider.value)
    
    changeValues(e);

}

slider.addEventListener('input', changeValues, false);

check.addEventListener('click', discount, false);