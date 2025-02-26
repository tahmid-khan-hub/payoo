// by deafult
document.getElementById('add-money').style.display = 'block';
document.getElementById('cash-out').style.display = 'none';


// after click
document.getElementById('add-money-btn')
.addEventListener('click', function(){

    // document.getElementById('add-money').style.display = 'block';

    // document.getElementById('cash-out').style.display = 'none';

    // pass id and status
    handleToggle('add-money', 'block');
    handleToggle('cash-out', 'none');

})

document.getElementById('cash-out-btn')
.addEventListener('click', function(){

    // document.getElementById('add-money').style.display = 'none';

    // document.getElementById('cash-out').style.display = 'block';

    handleToggle('add-money', 'none');
    handleToggle('cash-out', 'block');

})
