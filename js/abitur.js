document.addEventListener("DOMContentLoaded", function () {
    var path = window.location.pathname;
    var host = window.location.hostname;
  
    const headerVisionBtn = document.querySelector(".header-top__vision-btn");
    headerVisionBtn.href =
      "https://finevision.ru/?hostname=" + host + "&path=" + path;
  
    const footerVisionBtn = document.querySelector(".footer__vision-btn");
    footerVisionBtn.href =
      "https://finevision.ru/?hostname=" + host + "&path=" + path;
  
    const headerMenu = document.querySelector(".header-menu");
    const menuBtn = document.querySelector(".header-bottom__menu-btn");
    menuBtn.addEventListener("click", function () {
      headerMenu.classList.toggle("_active");
      menuBtn.classList.toggle("_close");
  
      if (headerMenu.classList.contains("_active")) {
        document.body.classList.add("no-scroll");
        document.body.classList.add("backdrop");
      } else {
        document.body.classList.remove("no-scroll");
        document.body.classList.remove("backdrop");
      }
    });
  
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
  
    const accordeonControls = document.querySelectorAll(".accordeon__control");
    accordeonControls.forEach(itemControl => {
      itemControl.addEventListener("click", () => {
        const itemAccordeon = itemControl.closest(".accordeon__item")
        itemAccordeon.classList.toggle("_active");
  
        let accordeonContent = itemAccordeon.querySelector(".accordeon__content");
        if (itemAccordeon.classList.contains("_active")) {
          accordeonContent.style.maxHeight = accordeonContent.scrollHeight + "px";
        } else {
          accordeonContent.style.maxHeight = null;
        }
      });
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
  