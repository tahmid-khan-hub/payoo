
// document.getElementById('add-money').addEventListener('click', function(event){

//     event.preventDefault();

//     // const amount = document.getElementById('amount').value;
//     // const amountValue = parseFloat(amount);

//     // const pin = document.getElementById('pin-number').value;
//     // const pinNumber = parseInt(pin);

//     // const Balace = document.getElementById('main-balance').innerText;
//     // const mainBalace = parseFloat(Balace);


//     const amountValue = getInputValueById('amount');
//     const pinNumber = getInputValueById('pin-number');
//     const mainBalance = getInnerTextById('main-balance');
//     const account = document.getElementById('account-number').value;

//     const selectedBank = document.getElementById('all-bank').value;

//     if(amountValue < 0){
//         alert('enter valid amount');
//         return;
//     }

//     if (account.length === 11) {
//         if (pinNumber === 1234) {
//             const total = mainBalance + amountValue;
//             setInnerTextById('main-balance', total);

//             const container = document.getElementById('Transaction-container');

//             // const p = document.createElement('p');
//             // p.innerText = `
//             // added ${amountValue} from this ${account} account
//             // `

//             const div =  document.createElement('div');
//             div.classList.add('bg-red-100', 'p-3', 'rounded', 'm-3', 'text-black')

//             div.innerHTML = `
//             <h1> Added money from ${selectedBank}</h1>
//             <h3> Amount is: ${amountValue}</h3>
//             <p> Account number is: ${account}</p>
//             `
            
//             container.appendChild(div);

//         } else {
//             alert('Enter a valid PIN');
//         }
//     } else {
//         alert('Enter a valid amount');
//     }
// })

document.getElementById('add-money').addEventListener('click', function(event){

    event.preventDefault();

    const account = document.getElementById('account-number').value;
    const amount = getInputValueById('amount');
    const pin = getInputValueById('pin-number');
    const mainBalance = getInnerTextById('main-balance');
    const selectedBank = document.getElementById('all-bank').value;

    if(amount < 0){
        alert('invalid amount')
        return;
    }

    if(account.length === 11){
        if(pin === 1234){

            const sub = mainBalance + amount;
            setInnerTextById('main-balance', sub);

            const container = document.getElementById('Transaction-container');

            const div = document.createElement('div');
            div.classList.add('bg-red-100','p-3', 'rounded', 'm-3', 'text-black');
            div.innerHTML = `
            <h1> Added money from ${selectedBank}</h1>
            <h3> Amount is: ${amount}</h3>
            <p> Account number is: ${account}</p>
            `

            container.appendChild(div);

        }
        // else{
        //     alert('invalid PIN')
        // }
    }
    // else{
    //     alert('invalid account')
    // }
})