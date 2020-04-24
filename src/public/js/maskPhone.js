const inputPhone = document.querySelector('.delivery_phone');

let old = 0;

inputPhone.addEventListener('focus', evt => {
    if(inputPhone.value == ''){
        inputPhone.value = '+7(';
    } 
    old = 3;
})
inputPhone.addEventListener('blur', evt => {
    if(inputPhone.value == '+7('){
        inputPhone.value = '';
    } 
    old = 0;   
})
inputPhone.addEventListener('input', evt => {
    if(inputPhone.value.length < old) {
        old--;
        return;
    }
    if(inputPhone.value.length == 6){
        inputPhone.value +=')';
    }
    if(inputPhone.value.length == 10){
        inputPhone.value +='-';
    }
    if(inputPhone.value.length == 13){
        inputPhone.value +='-';
    }
    old++;
}) 