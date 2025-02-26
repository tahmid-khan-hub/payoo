
document.getElementById('add-money')
.addEventListener('click', function(event){

    event.preventDefault();

    // const amount = document.getElementById('amount').value;
    // const amountValue = parseFloat(amount);

    // const pin = document.getElementById('pin-number').value;
    // const pinNumber = parseInt(pin);

    // const Balace = document.getElementById('main-balance').innerText;
    // const mainBalace = parseFloat(Balace);


    const amountValue = getInputValueById('amount');
    const pinNumber = getInputValueById('pin-number');
    const mainBalance = getInnerTextById('main-balance');

    if (amountValue && pinNumber) {
        if (pinNumber === 1234) {
            const total = mainBalance + amountValue;
            setInnerTextById('main-balance', total);
        } else {
            alert('Enter a valid PIN');
        }
    } else {
        alert('Enter a valid amount');
    }
});