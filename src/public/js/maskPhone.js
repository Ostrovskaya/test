const inputPhone = document.querySelector('.delivery_phone');

inputPhone.addEventListener('focus', evt => {
    if(inputPhone.value == ''){
        inputPhone.value = '+7(';
    } 

})
inputPhone.addEventListener('blur', evt => {
    if(inputPhone.value == '+7('){
        inputPhone.value = '';
    }    
})
inputPhone.addEventListener('input', evt => {
    if(inputPhone.value.length == 6){
        inputPhone.value +=')';
    }
    if(inputPhone.value.length == 10){
        inputPhone.value +='-';
    }
    if(inputPhone.value.length == 13){
        inputPhone.value +='-';
    }
})