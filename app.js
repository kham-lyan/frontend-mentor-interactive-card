const form = document.querySelector('form');
const nameField = document.querySelector('.name-field');
const nameInput = nameField.querySelector('#name');

const numberField = document.querySelector('.number-field');
const numberInput = numberField.querySelector('#cardNo');

const expField = document.querySelector('.expDate');
const monthInput = expField.querySelector('#month');
const yearInput = expField.querySelector('#year');

const CVCField = document.querySelector('.CVC');
const cvcInput = CVCField.querySelector('#cvc');


function checkName() {
    const nameDisplay = document.querySelector('.front-card-name');
    if (nameInput.value === "") {
        return nameField.classList.add('invalid');
    }
    nameDisplay.textContent = nameInput.value;
    nameField.classList.remove('invalid');
}


function checkCardNumber() {
    const cardDisplay = document.querySelector('.front-card-number');
    const inputLength = numberInput.value.length;

    if (numberInput.value === "" || numberInput.value.match(/^[A-Za-z]$/)) {
        return numberField.classList.add('invalid');
    } else if (inputLength > 0 ) {
        numberInput.value = numberInput.value.replace(/\D/g, "").match(/.{1,4}/g).join(' ');
    } else if (numberInput.value > 19) {
        numberInput.value = numberInput.value.slice(0, 19);
    }
    cardDisplay.textContent = numberInput.value;
    numberField.classList.remove('invalid');

}


function checkExp() {
    const expDisplay = document.querySelector('.front-card-expiry');
    if (monthInput.value === "" || yearInput.value === "") {
        return expField.classList.add('invalid');
    }
    expDisplay.textContent = `${monthInput.value} / ${yearInput.value}`;
    expField.classList.remove('invalid');
}


function checkCvc() {
    const cvcDisplay = document.querySelector('.back-card-cvc');
    if (cvcInput.value === "") {
        return CVCField.classList.add('invalid');
    }
    cvcDisplay.textContent = cvcInput.value;
    CVCField.classList.remove('invalid');
}


numberInput.addEventListener('input', checkCardNumber);
nameInput.addEventListener('input', checkName);
monthInput.addEventListener('input', checkExp);
yearInput.addEventListener('input', checkExp);
cvcInput.addEventListener('input', checkCvc);


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkName();
    checkCardNumber();
    checkExp();
    checkCvc();

    setTimeout(() => {
        if (form.checkValidity()) {
            document.querySelector('.thankyou').style.display = 'flex';
            form.style.display = 'none';
        }
    }, 2000);
})