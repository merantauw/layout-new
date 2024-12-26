ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.8153, 60.6039],
        zoom: 15
    });

    // Создание метки
    var myPlacemark = new ymaps.Placemark([56.8153, 60.6039], {
        balloonContent: 'БЦ Clever Park, ул. Ткачей 23, Екатеринбург'
    }, {
        preset: 'islands#icon',
        iconColor: '#0095b6'
    });

    // Добавление метки на карту
    myMap.geoObjects.add(myPlacemark);
}