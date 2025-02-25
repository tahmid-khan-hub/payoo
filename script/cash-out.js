
document.getElementById('cash-out-withdraw')
.addEventListener('click', function(event){

    event.preventDefault();

    const pin = document.getElementById('pin').value;
    const pinNUmber = parseInt(pin);

    const amount = document.getElementById('cash-out-amount').value;
    const totalAmount = parseFloat(amount);

    const balance = document.getElementById('main-balance').innerText;
    const mainBalace = parseFloat(balance);

    if(pinNUmber === 1234){
        const sub = mainBalace - totalAmount;
        document.getElementById('main-balance').innerText = sub;
    }
    else{
        alert('enter valid PIN')
    }
})