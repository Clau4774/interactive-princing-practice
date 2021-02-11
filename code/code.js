const slider = document.querySelector('.form-component__input-slider');
const checkBox = document.querySelector('.form-component__input-checkbox');
const price = document.querySelector('.form-component__span');
const views = document.querySelector('#views');
const btn = document.querySelector('.form-component__button');

let state = false;

const arrViews = ['10K', '50K', '100K', '500K', '1M'];
    const arrPrice = [8, 12, 16, 24, 36];
    const disc = arrPrice.map(a => {
       return (a-(a*.25));
    });

const getValue = () => {

    let val = slider.value;
    changeValues(val);
    return val
}

const changeValues = (e) => {

    const inputValue = e;
    
    let data = [];

    !state ? (price.innerText = `$${arrPrice[inputValue]}.00 `, views.innerText = arrViews[inputValue]) :  (price.innerText = `$${disc[inputValue]}.00 `, views.innerText = arrViews[inputValue]);

    !state ? data.push(arrViews[inputValue],arrPrice[inputValue],state) : data.push(arrViews[inputValue],disc[inputValue],state);


    return data;

}
const discount = (e) => {
    state = !state;
    getValue();
}

const confirmService = (evt) => {

    evt.preventDefault();
    let val = changeValues(getValue());
    let descActive = '';
    val[2] ? descActive = '25% off discount for the yearly billing' : descActive = 'no discount';
    let conf = confirm(`You has been selected the ${val[0]} Pageviews whit ${descActive} for a price off $${val[1]}.00
    
    Want to confirm?`);

    if (conf) {

        alert('Thanks you for trust in us!')
        let confirmed = {
            id : Math.round(Math.random()*10000),
            package : val[0],
            price : val[1],
            yearly : val[2] 
        };

        return console.log(confirmed);
    };
    
    return console.log('Transaction canceled');
}

slider.addEventListener('input', getValue, false);

checkBox.addEventListener('click', discount, false);

btn.addEventListener('click', confirmService, false);