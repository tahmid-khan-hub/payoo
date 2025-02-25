

document.getElementById('add-money')
.addEventListener('click', function(event){

    event.preventDefault();

    const amount = document.getElementById('amount').value;
    const amountValue = parseFloat(amount);

    const pin = document.getElementById('pin-number').value;
    const pinNumber = parseInt(pin);

    const Balace = document.getElementById('main-balance').innerText;
    const mainBalace = parseFloat(Balace);


    if(amount && pin){
        if(pinNumber === 1234){
            const total = mainBalace + amountValue;
            document.getElementById('main-balance').innerText = total;
        }
        else{
            alert('enter valid PIN')
        }
    }
    else{
        alert('enter valid amount')
    }
})