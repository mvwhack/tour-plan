var myMap;
// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[12.934956, 100.883308], // Тайланд
        zoom:15
    }),

    myPlacemark = new ymaps.Placemark([12.934956, 100.883308], {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        balloonContentHeader: "Hilton Pattaya",
        balloonContentBody: "+66 38 25 30 00, Таиланд, Chon Buri, Нонг Нуч",
        hintContent: "Hilton Pattaya"
    });

    myMap.geoObjects.add(myPlacemark);

}