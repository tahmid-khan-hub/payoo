
document.getElementById('cash-out-withdraw')
.addEventListener('click', function(event){

    event.preventDefault();

    // const pin = document.getElementById('pin').value;
    // const pinNumber = parseInt(pin);

    // const amount = document.getElementById('cash-out-amount').value;
    // const totalAmount = parseFloat(amount);

    // const balance = document.getElementById('main-balance').innerText;
    // const mainBalace = parseFloat(balance);

    // const account = document.getElementById('account');
    // const accountNumber = parseInt(account);


    // if(pinNumber === 1234){
    //     const sub = mainBalace - totalAmount;
    //     document.getElementById('main-balance').innerText = sub;
    // }
    // else{
    //     alert('enter valid PIN')
    // }
    
    const account = document.getElementById('account').value;

    const amount = getInputValueById('cash-out-amount');
    const pin = getInputValueById('pin');
    const mainBalace = getInnerTextById('main-balance')


    if(account.length === 11){
        if(pin === 1234){
            const sub = mainBalace - amount;
            setInnerTextById('main-balance', sub);
        }
        else{
            alert('enter valid PIN')
        }
    }
    else{
        alert('enter valid account')
    }
    
})