document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".hero__slider", {
    allowTouchMove: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  new Swiper(".news__slider", {
    spaceBetween: 30,
    breakpoints: {
        320: {
            slidesPerView: 1.25,
        },
        526: {
           slidesPerView: 2,
        },
        993: {
            slidesPerView: 3
        }
    }
  })

  new Swiper(".partners__slider", {
    slidesPerView: 4,
    spaceBetween: 35,
    pagination: {
        el: ".partners .swiper-pagination",
    }
  })

  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [42.982105543873985,47.46713613558195],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        })

        let myPlacemark = new ymaps.Placemark([42.982105543873985,47.46713613558195], {
            iconLayout: "default#image",
            iconImageSize: [36, 44]
        })

    myMap.geoObjects.add(myPlacemark)
  });
});
