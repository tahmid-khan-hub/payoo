
document.getElementById('Transaction-btn')
.addEventListener('click', function(){

    handleToggle('add-money', 'none');
    handleToggle('cash-out', 'none');
    handleToggle('transfer-money', 'none');
    handleToggle('Transaction-history', 'block');
    handleToggle('pay-bill', 'none');
})