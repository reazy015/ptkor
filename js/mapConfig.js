'use strict';

window.mapConfig = ( function() {
    ymaps.ready(init);
    ymaps.ready(initSecond);

    function init() {
        var coordinates = $("#spb.delivery-map-container").attr('data-coordinates');
        var scale = $("#spb").attr('data-scale');

        var myMap = new ymaps.Map("map", {
                center: coordinates.split(','),
                zoom: scale
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject({});
        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark(coordinates.split(','), {
                balloonContent: 'Объединенные ресурсы'
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#03A99B'
            }));
        myMap.behaviors.disable('scrollZoom');
    }

    function initSecond() {
        var coordinates = $("#msc").attr('data-coordinates');
        var scale = $("#msc").attr('data-scale');

        var myMap = new ymaps.Map("map", {
                center: coordinates.split(','),
                zoom: scale
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject({});
        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark(coordinates.split(','), {
                balloonContent: 'Объединенные ресурсы'
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#03A99B'
            }));
        myMap.behaviors.disable('scrollZoom');
    }
})();