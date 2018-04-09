'use strict';

window.mapConfig = ( function() {
    ymaps.ready(init);
    ymaps.ready(initSecond);

    function init() {
        var coordinates = $("#spb.delivery-map-container").attr('data-coordinates');
        var scale = $("#spb").attr('data-scale');

        var myMap = new ymaps.Map("spb", {
                center: [59.529892, 29.955401],
                zoom: scale
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject({});
        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark([59.529892, 29.955401], {
                balloonContent: 'Объединенные ресурсы'
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#03A99B'
            }));
        myMap.behaviors.disable('scrollZoom');
    }

    function initSecond() {
        var coordinates = [55.614139, 36.401146];
        var scale = $("#msc").attr('data-scale');

        var myMap = new ymaps.Map("msc", {
                center: [55.614139, 36.401146],
                zoom: scale
            }, {
                searchControlProvider: 'yandex#search'
            }),

            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject({});
        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark([55.614139, 36.401146], {
                balloonContent: 'Объединенные ресурсы'
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#03A99B'
            }));
        myMap.behaviors.disable('scrollZoom');
    }
})();