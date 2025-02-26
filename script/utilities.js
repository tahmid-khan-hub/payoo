
function getInputValueById(id){
    const val = document.getElementById(id).value;
    return parseFloat(val);
}

function getInnerTextById(id){
    const val = document.getElementById(id).innerText;
    return parseFloat(val);
}

function setInnerTextById(id, value){
    document.getElementById(id).innerText = value;
}


function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}