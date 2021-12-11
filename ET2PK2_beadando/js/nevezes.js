const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const lastname = document.getElementById('lastname');
const zip = document.getElementById('zip');
const sex = document.getElementById('sex');

const city = document.getElementById('city');
const street = document.getElementById('street');
const homeNumber = document.getElementById('homeNumber');


form.addEventListener('submit', e => {

    validateInputs(e);
 
});

const validateInputs = (e) => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const lastnameValue = lastname.value.trim();
    const zipValue = zip.value.trim();
    const sexValue = sex.value;
 

    const cityValue = city.value.trim();
    const streetValue = street.value.trim();
    const homeNumberValue = homeNumber.value.trim();

    if(usernameValue === '') {
		e.preventDefault();
        setError(username, 'Nem adtál meg Vezetéknevet!');
    } else if (usernameValue.length < 3 ) {
		e.preventDefault();
        setError(username, 'Legalább 3 betű legyen.')

    }else {
        setSuccess(username);

        
    }

    if(cityValue === ''){
        e.preventDefault();
        setError(city, 'Nem adtál meg Várost!');
    }else{
        setSuccess(city);
    }

    if(streetValue === ''){
        e.preventDefault();
        setError(street, 'Nem adtál meg Utcát!');
    }else{
        setSuccess(street);
    }

    if(homeNumberValue === ''){
        e.preventDefault();
        setError(homeNumber, 'Nem adtál meg házszámot!');
    }else{
        setSuccess(homeNumber);
    }

    if(emailValue === '') {
		e.preventDefault();
        setError(email, 'Nem adtál meg email címet!');

    } else if (!isValidEmail(emailValue)) {
		e.preventDefault();
        setError(email, 'Létező email címet adj meg!');

    } else {
        setSuccess(email);
    }

    if(lastnameValue === '') {
		e.preventDefault();
        setError(lastname, 'Nem adtál meg keresztnevet');

    } else if (lastnameValue.length < 3 ) {
		e.preventDefault();
        setError(lastname, 'Legalább 3 betű legyen.')

    } else {
        setSuccess(lastname);
    }

    if(zipValue === '') {
		e.preventDefault();
        setError(zip, 'Nem adtál meg iranyitoszamot');

    } else if (isNaN(zipValue)) {
		e.preventDefault();
        setError(zip, "Csak számokból állhat");

    } else if(zipValue.length != 4) {
		e.preventDefault();
		setError(zip,'Az iranyitoszam 4 betűből áll');

	}else{
        setSuccess(zip);

	}
   
    if(sexValue === '-'){
        e.preventDefault();
        setError(sex, 'Add meg a nemed');

    } else {
        setSuccess(sex);
        
    }


};



const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

};



const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

