/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ \"./src/public/js/map.js\");\n/* harmony import */ var _validator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validator.js */ \"./src/public/js/validator.js\");\n/* harmony import */ var _maskPhone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maskPhone.js */ \"./src/public/js/maskPhone.js\");\n/* harmony import */ var _maskPhone_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_maskPhone_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n    const tabsEl = document.querySelector('.shipping_tabs'); \r\n    const buttonEl = document.querySelector('.shipping_button');\r\n    \r\n    //Ожидание клика на смене вкладки\r\n    tabsEl.addEventListener('click', evt => { \r\n        if(evt.target.classList.contains('shipping_tab')){\r\n            document.querySelector('.shipping_tab__active').classList.remove('shipping_tab__active')\r\n            evt.target.classList.add('shipping_tab__active');\r\n            addHiddenClass();\r\n            const form = document.querySelector('.'+ evt.target.dataset.tab);\r\n            form.classList.remove('hidden');\r\n            if(evt.target.dataset.tab == \"pickup\"){\r\n                ymaps.ready(_map_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \r\n            }\r\n            buttonEl.setAttribute('form', evt.target.dataset.tab)\r\n        }   \r\n    }) \r\n \r\n    document.addEventListener('submit', evt => {          \r\n        let valid = new _validator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] (evt.target);\r\n        if(!valid.valid){\r\n            evt.preventDefault();\r\n        }\r\n    }) \r\n})\r\n\r\n/**\r\n * Скрываем все формы\r\n */\r\nfunction addHiddenClass(){\r\n    const forms = document.querySelectorAll('.shipping_form');\r\n    forms.forEach(form => {\r\n        if(!form.classList.contains('hidden')){\r\n            form.classList.add('hidden');\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/js/map.js":
/*!******************************!*\
  !*** ./src/public/js/map.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return init; });\n\r\n//Массив с координатами пунктов выдачи\r\nlet points = [];\r\nlet API_url = \"https://raw.githubusercontent.com/Ostrovskaya/test/master/src/public/api/points.json\"\r\ngetData(API_url).then(d => {points = d})\r\n\r\nasync function getData(url) {\r\n    const dataReceived = await fetch(url);\r\n    return await dataReceived.json();\r\n}\r\n\r\nfunction init () {\r\n    var myMap = new ymaps.Map('map', {\r\n        center: [55.978970, 37.147815], \r\n        zoom: 13,\r\n        controls: [\r\n        'zoomControl', \r\n        'typeSelector', \r\n        'fullscreenControl', \r\n    ]\r\n    });\r\n\r\n    let myCollection = new ymaps.GeoObjectCollection({}, {\r\n        iconLayout: 'default#image',\r\n        iconImageHref: 'img/icon.svg',\r\n        iconImageSize: [33, 40], \r\n        iconImageOffset: [-16, -40]\r\n    });\r\n    points.forEach( point => {\r\n        myCollection.add(new ymaps.Placemark(\r\n        point.coordinate, \r\n        {\r\n            hintContent: point.hint,\r\n            balloonContent: point.balloon\r\n        }))\r\n    });     \r\n    myMap.geoObjects.add(myCollection);\r\n\r\n    // Отключаем прокрутку карты на маленьких экранах\r\n    if(document.documentElement.clientWidth <= 768){\r\n        myMap.behaviors.disable('scrollZoom');\r\n        myMap.behaviors.disable('drag');\r\n    }\r\n\r\n    //Маштабируем так, чтобы было видно все точки\r\n    myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange:true}).then(function(){\r\n        if(myMap.getZoom() > 13) myMap.setZoom(13); \r\n    });         \r\n}\n\n//# sourceURL=webpack:///./src/public/js/map.js?");

/***/ }),

/***/ "./src/public/js/maskPhone.js":
/*!************************************!*\
  !*** ./src/public/js/maskPhone.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const inputPhone = document.querySelector('.delivery_phone');\r\n\r\nlet old = 0;\r\n\r\ninputPhone.addEventListener('focus', evt => {\r\n    if(inputPhone.value == ''){\r\n        inputPhone.value = '+7(';\r\n    } \r\n    old = 3;\r\n})\r\ninputPhone.addEventListener('blur', evt => {\r\n    if(inputPhone.value == '+7('){\r\n        inputPhone.value = '';\r\n    } \r\n    old = 0;   \r\n})\r\ninputPhone.addEventListener('input', evt => {\r\n    if(inputPhone.value.length < old) {\r\n        old--;\r\n        return;\r\n    }\r\n    if(inputPhone.value.length == 6){\r\n        inputPhone.value +=')';\r\n    }\r\n    if(inputPhone.value.length == 10){\r\n        inputPhone.value +='-';\r\n    }\r\n    if(inputPhone.value.length == 13){\r\n        inputPhone.value +='-';\r\n    }\r\n    old++;\r\n}) \n\n//# sourceURL=webpack:///./src/public/js/maskPhone.js?");

/***/ }),

/***/ "./src/public/js/validator.js":
/*!************************************!*\
  !*** ./src/public/js/validator.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Validator; });\nclass Validator {\r\n    constructor(form){\r\n        this.regExp = {\r\n            'name': /^[а-яА-ЯёЁ\\s-]+$/,\r\n            'phone':/^\\+7\\(\\d{3}\\)\\d{3}-\\d{2}-\\d{2}$/,\r\n            'address': /.+/,\r\n            'comment': /.+/,\r\n        };\r\n        this.form = form;\r\n        this.errors = {\r\n            'name': 'Допустимы только кириллица, пробел и тире!',\r\n            'phone': 'Телефон должен быть в формате: +7(000)000-0000',\r\n            'point': 'Выберете адрес доставки',\r\n            'address': 'Введите адрес доставки',\r\n            'comment': 'Заполните все поля',\r\n        };\r\n        this.valid = true;\r\n        this._validateForm();\r\n    }\r\n\r\n    _validateForm(){         \r\n        this._clearError();\r\n        if(this.form.id == \"delivery\"){\r\n            let formFields = [...this.form.querySelectorAll('input, textarea')];\r\n            formFields.forEach(field =>{\r\n                if(!this._isTrueInput(field)){\r\n                    this._addError(field);\r\n                    field.parentNode.classList.add('error');\r\n                    this._watchInput(field);\r\n                    this.valid = false;\r\n                }\r\n            })\r\n        }  \r\n        if(this.form.id == \"pickup\") {\r\n            let formFields = [...this.form.querySelectorAll('input')];\r\n            if(!formFields.some(fields => fields.checked)){\r\n                let error = `<span class=\"errorMsg\">${this.errors['point']}</span>`\r\n                this.form.querySelector('.pickup_points').insertAdjacentHTML('beforebegin', error)\r\n                this._watchCheck(formFields);\r\n                this.valid = false;\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Убирает все ошибки\r\n     */\r\n    _clearError(){\r\n        let errorsMsg = this.form.querySelectorAll('.errorMsg');\r\n        errorsMsg.forEach(error => error.remove());\r\n        let errorsClass = this.form.querySelectorAll('.error');\r\n        errorsClass.forEach(error => error.classList.remove('error'));\r\n    }\r\n\r\n    /**\r\n     * Проверяет корректно ли введенное значение\r\n     */\r\n    _isTrueInput(field){\r\n        return this.regExp[field.name].test(field.value);\r\n    }\r\n\r\n    /**\r\n     * Добавляем сообщение с ошибкой\r\n     */\r\n    _addError(field){\r\n        let error = `<span class=\"errorMsg\">${this.errors[field.name]}</span>`\r\n        field.parentNode.insertAdjacentHTML('beforeend', error)\r\n    }\r\n\r\n    /**\r\n     * Добавляем отслеживание на введение валидного значения\r\n     */\r\n    _watchInput(field) {\r\n        field.addEventListener('input', () => {\r\n            let err = field.parentNode.querySelector(`.errorMsg`);\r\n            if(this.regExp[field.name]) {\r\n                if(this._isTrueInput(field)) {\r\n                    field.parentNode.classList.remove('error')\r\n                    if(err) err.remove()\r\n                } else {\r\n                    field.parentNode.classList.add('error')\r\n                    if(!err) this._addError(field)\r\n                }\r\n            }\r\n        })\r\n    }\r\n    /**\r\n     * отслеживание выбора радиокнопки\r\n     */\r\n    _watchCheck(formFields){\r\n        formFields.forEach(field => {\r\n            field.addEventListener('input', () => {\r\n                let err = this.form.querySelector(`.errorMsg`);\r\n                if(err) err.remove()\r\n            })\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/public/js/validator.js?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });