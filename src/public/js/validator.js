export default class Validator {
    constructor(form){
        this.regExp = {
            'name': /^[а-яА-ЯёЁ\s-]+$/,
            'phone':/^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
            'address': /.+/,
            'comment': /.+/,
        };
        this.form = form;
        this.errors = {
            'name': 'Допустимы только кириллица, пробел и тире!',
            'phone': 'Телефон должен быть в формате: +7(000)000-0000',
            'point': 'Выберете адрес доставки',
            'address': 'Введите адрес доставки',
            'comment': 'Заполните все поля',
        };
        this.valid = true;
        this._validateForm();
    }

    _validateForm(){         
        this._clearError();
        if(this.form.id == "delivery"){
            let formFields = [...this.form.querySelectorAll('input, textarea')];
            formFields.forEach(field =>{
                if(!this._isTrueInput(field)){
                    this._addError(field);
                    field.parentNode.classList.add('error');
                    this._watchInput(field);
                    this.valid = false;
                }
            })
        }  
        if(this.form.id == "pickup") {
            let formFields = [...this.form.querySelectorAll('input')];
            if(!formFields.some(fields => fields.checked)){
                let error = `<span class="errorMsg">${this.errors['point']}</span>`
                this.form.querySelector('.pickup_points').insertAdjacentHTML('beforebegin', error)
                this._watchCheck(formFields);
                this.valid = false;
            }
        }
    }

    /**
     * Убирает все ошибки
     */
    _clearError(){
        let errorsMsg = this.form.querySelectorAll('.errorMsg');
        errorsMsg.forEach(error => error.remove());
        let errorsClass = this.form.querySelectorAll('.error');
        errorsClass.forEach(error => error.classList.remove('error'));
    }

    /**
     * Проверяет корректно ли введенное значение
     */
    _isTrueInput(field){
        return this.regExp[field.name].test(field.value);
    }

    /**
     * Добавляем сообщение с ошибкой
     */
    _addError(field){
        let error = `<span class="errorMsg">${this.errors[field.name]}</span>`
        field.parentNode.insertAdjacentHTML('beforeend', error)
    }

    /**
     * Добавляем отслеживание на введение валидного значения
     */
    _watchInput(field) {
        field.addEventListener('input', () => {
            let err = field.parentNode.querySelector(`.errorMsg`);
            if(this.regExp[field.name]) {
                if(this._isTrueInput(field)) {
                    field.parentNode.classList.remove('error')
                    if(err) err.remove()
                } else {
                    field.parentNode.classList.add('error')
                    if(!err) this._addError(field)
                }
            }
        })
    }
    /**
     * отслеживание выбора радиокнопки
     */
    _watchCheck(formFields){
        formFields.forEach(field => {
            field.addEventListener('input', () => {
                let err = this.form.querySelector(`.errorMsg`);
                if(err) err.remove()
            })
        })
    }
}