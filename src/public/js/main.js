import init from './map.js'
import Validator from './validator.js'
import './maskPhone.js'


window.addEventListener('load', () => {
    const tabsEl = document.querySelector('.shipping_tabs'); 
    const buttonEl = document.querySelector('.shipping_button');
    
    //Ожидание клика на смене вкладки
    tabsEl.addEventListener('click', evt => { 
        if(evt.target.classList.contains('shipping_tab')){
            document.querySelector('.shipping_tab__active').classList.remove('shipping_tab__active')
            evt.target.classList.add('shipping_tab__active');
            addHiddenClass();
            const form = document.querySelector('.'+ evt.target.dataset.tab);
            form.classList.remove('hidden');
            if(evt.target.dataset.tab == "pickup"){
                ymaps.ready(init); 
            }
            buttonEl.setAttribute('form', evt.target.dataset.tab)
        }   
    }) 
 
    document.addEventListener('submit', evt => {          
        let valid = new Validator (evt.target);
        if(!valid.valid){
            evt.preventDefault();
        }
    }) 
})

/**
 * Скрываем все формы
 */
function addHiddenClass(){
    const forms = document.querySelectorAll('.shipping_form');
    forms.forEach(form => {
        if(!form.classList.contains('hidden')){
            form.classList.add('hidden');
        }
    })
}