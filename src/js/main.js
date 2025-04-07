import { Map } from "./map.js";
import { Slider } from "./slider.js";

// Мобильное меню только для планшетов, не для мобильных
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;
  const isMobile = window.innerWidth <= 576; // $breakpoint-mobile

  // Обрезаем длинные названия меню для мобильной версии
  if (isMobile) {
    const menuLinks = document.querySelectorAll(".header__menu-item a");
    menuLinks.forEach((link) => {
      const text = link.textContent;
      if (text.length > 16) {
        // Обрезаем до 16 символов и добавляем троеточие
        // Для CSS уже есть text-overflow: ellipsis, но добавим и JS обработку
        const title = link.getAttribute("title") || text;
        if (!link.getAttribute("title")) {
          link.setAttribute("title", title);
        }
      }
    });
  }

  // Инициализируем бургер-меню только для планшетов
  if (!isMobile && burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-active");
      nav?.classList.toggle("is-active");
      body.classList.toggle("no-scroll");
    });

    // Закрытие меню при клике на ссылку
    const menuLinks = document.querySelectorAll(".header__menu-item a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burger?.classList.remove("is-active");
        nav?.classList.remove("is-active");
        body.classList.remove("no-scroll");
      });
    });
  }

  // Инициализация карты
  const mapElement = document.querySelector(".hero__map");
  if (mapElement) {
    new Map();
  }

  // Выпадающее меню регионов
  const mapSelect = document.querySelector(".hero__map-current");
  const mapDropdown = document.querySelector(".hero__map-dropdown");
  const dropdownButtons = document.querySelectorAll(
    ".hero__map-dropdown button"
  );
  const mapCurrentText = mapSelect?.querySelector("span");
  const mapButtons = document.querySelectorAll(".hero__map-btn");

  let isDropdownOpen = false;

  // Toggle dropdown
  mapSelect?.addEventListener("click", () => {
    isDropdownOpen = !isDropdownOpen;
    mapSelect.classList.toggle("active");
    mapDropdown?.classList.toggle("active");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (
      mapDropdown &&
      !e.target.closest(".hero__map-select") &&
      !e.target.closest(".hero__map-dropdown") &&
      isDropdownOpen
    ) {
      isDropdownOpen = false;
      mapSelect?.classList.remove("active");
      mapDropdown.classList.remove("active");
    }
  });

  // Выбор региона из выпадающего списка
  dropdownButtons?.forEach((button) => {
    button.addEventListener("click", () => {
      const region = button.getAttribute("data-region");

      // Обновляем текст в кнопке
      if (mapCurrentText) {
        mapCurrentText.textContent = button.textContent;
      }

      // Делаем активной кнопку в выпадающем списке
      dropdownButtons.forEach((btn) => {
        btn.classList.toggle(
          "active",
          btn.getAttribute("data-region") === region
        );
      });

      // Делаем активной соответствующую кнопку в навигации
      mapButtons.forEach((btn) => {
        if (btn.getAttribute("data-region") === region) {
          btn.click(); // Вызываем клик на кнопке навигации, если она соответствует выбранному региону
        }
      });

      // Закрываем выпадающий список
      isDropdownOpen = false;
      mapSelect?.classList.remove("active");
      mapDropdown?.classList.remove("active");
    });
  });

  // Инициализация слайдера
  const sliderElement = document.querySelector(".corporate__slider");
  if (sliderElement) {
    new Slider(sliderElement);
  }

  // Раскрывающиеся карточки на мобильных устройствах
  const businessCards = document.querySelectorAll(".business__card");

  if (isMobile && businessCards.length > 0) {
    businessCards.forEach((card) => {
      card.addEventListener("click", (event) => {
        if (window.innerWidth <= 576) {
          event.preventDefault();
          card.classList.toggle("expanded");

          // Закрываем другие открытые карточки
          businessCards.forEach((otherCard) => {
            if (otherCard !== card) {
              otherCard.classList.remove("expanded");
            }
          });
        }
      });
    });
  }
});

// Close mobile menu on resize for tablet (not mobile)
window.addEventListener("resize", () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;
  const isMobile = window.innerWidth <= 576; // $breakpoint-mobile

  // Только для планшетов обрабатываем закрытие меню
  if (
    !isMobile &&
    window.innerWidth > 768 &&
    nav?.classList.contains("is-active")
  ) {
    burger?.classList.remove("is-active");
    nav?.classList.remove("is-active");
    body.classList.remove("no-scroll");
  }
});
