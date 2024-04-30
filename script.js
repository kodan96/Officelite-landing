const finalDate = new Date('Nov 4, 2024 00:00:00').getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = finalDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

    document.querySelector('.days').innerHTML = days;
    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.sec').innerHTML = seconds;

}, 1000);


const email = document.getElementById('email');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^/<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[/\w-]+\.)+[\w-]{2,})$/;
const error = document.querySelector('.error');
const submit = document.querySelector('.submit');
const nameInput = document.getElementById('name');

const isValid = () => {
    return re.test(email.value);
}

const emailValidate = () => {
    if (isValid()) {
        error.style.color = 'green';
        error.innerHTML = 'Valid Email';
        email.style.borderColor = 'green';
    } else {
        error.style.color ='red';
        error.innerHTML = 'Invalid Email';
        email.style.borderColor ='red';
    };
};

email.addEventListener('input', emailValidate);

submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(isValid() && nameInput.value !== '') {
        error.innerHTML = 'Submitted';
        error.style.color = 'green';
    } 
    else {
        error.style.color ='red';
        error.innerHTML = 'Invalid Email or Name';
    }
})



