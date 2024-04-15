function validate (){
    // alert('form submitted');
    const fullName = document.myForm.fullName.value;
    const email = document.myForm.email.value;
    const phone = document.myForm.phone.value;
    const password = document.myForm.password.value;
    const confirm_password = document.myForm.confirm_password.value;
    // error
    const name_err = document.querySelector('.name-err');
    const email_err = document.querySelector('.email-err');
    const phone_err =document.querySelector('.phone-err');
    const password_err= document.querySelector('.password-err');
    const confirm_err = document.querySelector('.confirm-err')
    if(fullName == ''){
        name_err.textContent ="name field is required";
        return false
    }
    if(email == ''){
        email_err.textContent = 'Email field is required';
        return false
    }
    if(phone == ''){
        phone_err.textContent = 'phone field is required';
        return false
    }
    if(isNaN(phone)){
        phone_err.textContent ='phone requires a number'
        return false
    }
    if(phone.length < 11 || phone.length > 13){
        phone_err.textContent =' phone number is invalid'
        return false
    }
    if(password == ''){
        password_err.textContent = 'password field is required';
        return false
    }
    if(password > 8){
        password_err.textContent ='password limit exceeded '
        return false
    }
    if( confirm_password == ''){
        confirm_err.textContent = 'Confirm field is required'
        return false
    }
    if(confirm_password  !== password){
        confirm_err.textContent = 'incorrect password'
        return false
    }
}

