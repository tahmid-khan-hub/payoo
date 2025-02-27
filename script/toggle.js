// by deafult
document.getElementById('add-money').style.display = 'block';
document.getElementById('cash-out').style.display = 'none';
document.getElementById('transfer-money').style.display = 'none';
document.getElementById('pay-bill').style.display = 'none';


// after click
document.getElementById('add-money-btn')
.addEventListener('click', function(){

    // document.getElementById('add-money').style.display = 'block';

    // document.getElementById('cash-out').style.display = 'none';

    // pass id and status
    handleToggle('add-money', 'block');
    handleToggle('cash-out', 'none');
    handleToggle('Transaction-history', 'none');
    handleToggle('transfer-money', 'none');
    handleToggle('pay-bill', 'none');

})

document.getElementById('cash-out-btn')
.addEventListener('click', function(){

    // document.getElementById('add-money').style.display = 'none';

    // document.getElementById('cash-out').style.display = 'block';

    handleToggle('add-money', 'none');
    handleToggle('cash-out', 'block');
    handleToggle('Transaction-history', 'none');
    handleToggle('transfer-money', 'none');
    handleToggle('pay-bill', 'none');

})

document.getElementById('transfer-money-btn')
.addEventListener('click', function(){

    handleToggle('add-money', 'none');
    handleToggle('cash-out', 'none');
    handleToggle('Transaction-history', 'none');
    handleToggle('transfer-money', 'block');
    handleToggle('pay-bill', 'none');

})

document.getElementById('pay-bill-btn')
.addEventListener('click', function(){

    handleToggle('add-money', 'none');
    handleToggle('cash-out', 'none');
    handleToggle('Transaction-history', 'none');
    handleToggle('transfer-money', 'none');
    handleToggle('pay-bill', 'block');
})

