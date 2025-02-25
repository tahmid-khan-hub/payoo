// by deafult
document.getElementById('add-money').style.display = 'block';
document.getElementById('cash-out').style.display = 'none';


// after click
document.getElementById('add-money-btn')
.addEventListener('click', function(){

    document.getElementById('add-money').style.display = 'block';

    document.getElementById('cash-out').style.display = 'none';

})

document.getElementById('cash-out-btn')
.addEventListener('click', function(){

    document.getElementById('add-money').style.display = 'none';

    document.getElementById('cash-out').style.display = 'block';

})
