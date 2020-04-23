
const points = [
    {
        coordinate: [55.982892, 37.139395],
        hint: 'Оперный театр',
        balloon: ''
    },
    {
        coordinate: [55.977297, 37.154450],
        hint: 'Точка',
        balloon: ''
    },
]
function init () {
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
        iconImageHref: 'img/icon.png',
        iconImageSize: [33, 40], 
        iconImageOffset: [-16, -40]
    });
    points.forEach( point => {
        myCollection.add(new ymaps.Placemark(
        point.coordinate, 
        {
            hintContent: point.hint,
            balloonContent: 'Содержимое балуна'
        }))
    });     
    myMap.geoObjects.add(myCollection);

    // Отключаем scrollZoom
    // Подробнее https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/map.behavior.Manager-docpage/#map.behavior.Manager__param-behaviors
    //myMap.behaviors.disable('scrollZoom');

    myMap.setBounds(myMap.geoObjects.getBounds(), {checkZoomRange:true}).then(function(){
        if(myMap.getZoom() > 13) myMap.setZoom(13); // Если значение zoom превышает 15, то устанавливаем 15.
    });         
}