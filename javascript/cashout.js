document.querySelector('#remove-money-button').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyAmountInput = document.querySelector('#remove-money-amount-input').value;
    const addMoneyPinInput = document.querySelector('#remove-money-pin-input').value;
    if(addMoneyPinInput === '1111'){
        const totalBalance = parseFloat(document.querySelector('#total-balance').innerHTML);
        const addMoneyAmount = parseFloat(addMoneyAmountInput);
        const updatedBalance = totalBalance - addMoneyAmount;
        document.querySelector('#total-balance').innerText = updatedBalance;
    }    
    else{
        alert('Try Again!')
    }
})