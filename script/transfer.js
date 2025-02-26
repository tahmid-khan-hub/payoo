document.getElementById('send-now-btn').addEventListener('click', function(event){

    event.preventDefault();

    const account = document.getElementById('user-account').value;
    const amount = getInputValueById('send-amount');
    const pin = getInputValueById('transfer-money-pin');
    const mainBalance = getInnerTextById('main-balance');

    if(amount > mainBalance || amount <= 0){
        alert('enter valid amount');
        return;
    }

    if(account.length === 11){
        if(pin === 1234){
            const sub = mainBalance - amount;
            setInnerTextById('main-balance', sub);

            const container = document.getElementById('Transaction-container');

            const div = document.createElement('div');
            div.classList.add('bg-green-100', 'p-3', 'rounded', 'm-3', 'text-black');

            div.innerHTML = `
            <h1>Transfered amount: ${amount}</h1>
            <p>Account is: ${account}</p>
            `

            container.appendChild(div);

            console.log('object');
        }
        else{
            alert('enter valid PIN')
        }
    }
    else{
        alert('enter valid account number')
    }
})