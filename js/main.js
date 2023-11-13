document.addEventListener("DOMContentLoaded", function () {
  const headerMenu = document.querySelector(".header-menu")
  const menuBtn = document.querySelector(".header-bottom__menu-btn")
  menuBtn.addEventListener("click", function() {
    headerMenu.classList.toggle("_active")
    menuBtn.classList.toggle("_close")

    if (headerMenu.classList.contains("_active")) {
      document.body.classList.add("no-scroll")
      document.body.classList.add("backdrop")
    } else {
      document.body.classList.remove("no-scroll")
      document.body.classList.remove("backdrop")
    }
  })

  const menuItemsWithSubmenu = document.querySelectorAll(".has-submenu");
  menuItemsWithSubmenu.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      menuItem.classList.toggle("open");

      let submenu = menuItem.querySelector(".submenu");
      if (menuItem.classList.contains("open")) {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
      } else {
        submenu.style.maxHeight = null;
      }
    });
  });

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

  // new Swiper(".news__slider", {
  //   spaceBetween: 30,
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1.25,
  //     },
  //     526: {
  //       slidesPerView: 2,
  //     },
  //     993: {
  //       slidesPerView: 3,
  //     },
  //   },
  // });

  new Swiper(".partners__slider", {
    
    spaceBetween: 25,
    pagination: {
      el: ".partners .swiper-pagination",
    },
    breakpoints: {
      426: {
        slidesPerView: 2
      },
      769: {
        slidesPerView: 3
      },
      1025: {
        slidesPerView: 4
      }
    }
  });

  ymaps.ready(function () {
    var myMap = new ymaps.Map(
      "map",
      {
        center: [42.982105543873985, 47.46713613558195],
        zoom: 17,
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    let myPlacemark = new ymaps.Placemark(
      [42.982105543873985, 47.46713613558195],
      {
        iconLayout: "default#image",
        iconImageSize: [36, 44],
      }
    );

    myMap.geoObjects.add(myPlacemark);
  });
});
