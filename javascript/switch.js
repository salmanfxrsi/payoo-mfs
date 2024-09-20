document.querySelector('#cash-in-button').addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('#cash-out-section').classList.add('hidden');
    document.querySelector('#cash-in-section').classList.remove('hidden');
})

document.querySelector('#cash-out-button').addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('#cash-in-section').classList.add('hidden');
    document.querySelector('#cash-out-section').classList.remove('hidden');
})