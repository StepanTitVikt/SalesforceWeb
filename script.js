let captchaChecked = false;

function captchaSuccess(){
    captcha
}

function beforeSubmit(event) {
    if(captchaChecked){

    }else{
        alert('Please check the reCAPTCHA box.');
        event.preventDefault();
    }
}