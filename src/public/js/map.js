
//Массив с координатами пунктов выдачи
let points = [];
let API_url = "../api/points.json"
getData(API_url).then(d => {points = d})

async function getData(url) {
    const dataReceived = await fetch(url);
    return await dataReceived.json();
}

export default function init () {
    var myMap = new ymaps.Map('map', {
        center: [55.978970, 37.147815], 
        zoom: 13,
        controls: [
        'zoomControl', 
        'typeSelector', 
        'fullscreenControl', 
    ]
    });

    let myCollection = new ymaps.GeoObjectCollection({}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon.svg',
        iconImageSize: [33, 40], 
        iconImageOffset: [-16, -40]
    });
    points.forEach( point => {
        myCollection.add(new ymaps.Placemark(
        point.coordinate, 
        {
            hintContent: point.hint,
            balloonContent: point.balloon
        }))
    });     
    myMap.geoObjects.add(myCollection);

    // Отключаем прокрутку карты на маленьких экранах
    if(document.documentElement.clientWidth <= 768){
        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');
    }

    //Маштабируем так, чтобы было видно все точки
    myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange:true}).then(function(){
        if(myMap.getZoom() > 13) myMap.setZoom(13); 
    });         
}