$(function () {
  /*______ Яндекс карта ______*/
  
  if ($(".contacts-map").length > 0) {
    ymaps.ready(init1);
  }

  function init1() {
    var myMap = new ymaps.Map("map", {
      center: [55.76057, 37.718238],
      controls: ["zoomControl"],
      zoom: 10,
    });

    var ballonContent1 = `<div class="ballon-content"><div class="ballon-title"></div>
    <div class="ballon-body">
        <span> «Синдика» <br> 65-й километр МКАД
        </span>
        <a href="https://yandex.ru/maps/?rtext=~55.808118, 37.385573">Проложить маршрут</a>
      </div>
    `;

    var ballonContent2 = `<div class="ballon-content"><div class="ballon-title"></div>
    <div class="ballon-body">
        <span> ТК "Мельница" <br> 41-й километр МКАД
        </span>
        <a href="https://yandex.ru/maps/?rtext=~55.611012, 37.488907">Проложить маршрут</a>
      </div>
    `;

    var placeMark = new ymaps.Placemark([55.808118, 37.385573],
      {
        balloonContentBody: ballonContent1,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/pin.svg",
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -64],
      }
    );

    var placeMark2 = new ymaps.Placemark([55.611012, 37.488907],
      {
        balloonContentBody: ballonContent2,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/pin-active.svg",
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -64],
      }
    );

    myMap.geoObjects.add(placeMark);
    myMap.geoObjects.add(placeMark2);
    myMap.setBounds(myMap.geoObjects.getBounds());

  }
});
