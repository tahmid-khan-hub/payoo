document.getElementById('pay-now-btn').addEventListener('click', function(event){

    event.preventDefault();

    const account = document.getElementById('biller-account-number').value;
    const amount = getInputValueById('amount-pay-bill');
    const pin = getInputValueById('pin-number-pay-bill');
    const mainBalance = getInnerTextById('main-balance');
    const selectedBank = document.getElementById('all-bank-pay-bill').value;

    if(amount > mainBalance){
        alert('invalid amount')
        return;
    }

    if(account.length === 11){
        if(pin === 1234){

            const sub = mainBalance - amount;
            setInnerTextById('main-balance', sub);

            const container = document.getElementById('Transaction-container');

            const div = document.createElement('div');
            div.classList.add('bg-yellow-100','p-3', 'rounded', 'm-3', 'text-black');
            div.innerHTML = `
            <h1>Paid from ${selectedBank}</h1>
            <h1>Pay Bill amount: ${amount}</h1>
            <p>from this account: ${account}</p>
            `

            container.appendChild(div);

        }
        else{
            alert('invalid PIN')
        }
    }
    else{
        alert('invalid account')
    }
})