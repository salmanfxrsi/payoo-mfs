document.querySelector('#login-button').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.querySelector('#phone-number-input').value;
    const pinNumber = document.querySelector('#pin-input').value;
    if(phoneNumber === '01754800757' && pinNumber === '1111'){
        window.location.href = 'home.html';
    }
    else{
        alert('Wrong Number Or Pin,Try Again!')
    }
})