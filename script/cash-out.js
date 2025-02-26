
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
    const mainBalace = getInnerTextById('main-balance');

    if(amount > mainBalace){
        alert('invalid amount');
        return;
    }


    if(account.length === 11){
        if(pin === 1234){
            const sub = mainBalace - amount;
            setInnerTextById('main-balance', sub);

            const container = document.getElementById('Transaction-container');

            // const p = document.createElement('p');
            // p.innerText = `
            // cash out ${amount} from this ${account} account
            // `


            const div =  document.createElement('div');
            div.classList.add('bg-blue-100', 'p-3', 'rounded', 'm-3', 'text-black')

            div.innerHTML = `
            <h1> cash out money</h1>
            <h3> Amount is: ${amount}</h3>
            <p> Account number is: ${account}</p>
            `
            
            container.appendChild(div);

        }
        else{
            alert('enter valid PIN')
        }
    }
    else{
        alert('enter valid account')
    }
    
})