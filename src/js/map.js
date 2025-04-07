// Координаты городов на карте (в процентах от размера карты)
const CITIES = {
  // Москва
  moscow: {
    name: "Москва",
    region: "moscow",
    top: 38,
    left: 12,
  },
  // Северо-Запад
  spb: {
    name: "Санкт-Петербург",
    region: "northwest",
    top: 22,
    left: 13,
  },
  kaliningrad: {
    name: "Калининград",
    region: "northwest",
    top: 21,
    left: 4,
  },
  // Центр
  yaroslavl: {
    name: "Ярославль",
    region: "center",
    top: 33,
    left: 15.5,
  },
  voronezh: {
    name: "Воронеж",
    region: "center",
    top: 41.5,
    left: 8.5,
  },
  belgorod: {
    name: "Белгород",
    region: "center",
    top: 46.5,
    left: 8,
  },
  // Юг
  rostov: {
    name: "Ростов-на-Дону",
    region: "south",
    top: 54,
    left: 7,
  },
  volgograd: {
    name: "Волгоград",
    region: "south",
    top: 61,
    left: 9.5,
  },
  krasnodar: {
    name: "Краснодар",
    region: "south",
    top: 65,
    left: 5,
  },
  // Волга
  nn: {
    name: "Нижний Новгород",
    region: "volga",
    top: 43.5,
    left: 17,
  },
  kazan: {
    name: "Казань",
    region: "volga",
    top: 49.5,
    left: 21,
  },
  samara: {
    name: "Самара",
    region: "volga",
    top: 52,
    left: 16,
  },
  ufa: {
    name: "Уфа",
    region: "volga",
    top: 56,
    left: 22,
  },
  orenburg: {
    name: "Оренбург",
    region: "volga",
    top: 62,
    left: 19,
  },
  // Урал
  izhevsk: {
    name: "Ижевск",
    region: "ural",
    top: 48,
    left: 28,
  },
  perm: {
    name: "Пермь",
    region: "ural",
    top: 49,
    left: 32,
  },
  ekb: {
    name: "Екатеринбург",
    region: "ural",
    top: 54.5,
    left: 27.5,
  },
  chelyabinsk: {
    name: "Челябинск",
    region: "ural",
    top: 61.5,
    left: 27,
  },
  surgut: {
    name: "Сургут",
    region: "ural",
    top: 50.5,
    left: 37,
  },
  tyumen: {
    name: "Тюмень",
    region: "ural",
    top: 61,
    left: 35,
  },
  // Сибирь
  omsk: {
    name: "Омск",
    region: "siberia",
    top: 79.5,
    left: 39,
  },
  novosibirsk: {
    name: "Новосибирск",
    region: "siberia",
    top: 76,
    left: 42.5,
  },
  krasnoyarsk: {
    name: "Красноярск",
    region: "siberia",
    top: 77.5,
    left: 54,
  },
  tomsk: {
    name: "Томск",
    region: "siberia",
    top: 78,
    left: 48,
  },
  irkutsk: {
    name: "Иркутск",
    region: "siberia",
    top: 82,
    left: 59,
  },
  // Дальний Восток
  vladivostok: {
    name: "Владивосток",
    region: "east",
    top: 96.5,
    left: 82,
  },
  khabarovsk: {
    name: "Хабаровск",
    region: "east",
    top:84,
    left: 83,
  },
};

// Данные о регионах с названиями в правильном порядке для UI
const REGIONS_DATA = [
  { id: "moscow", name: "Москва" },
  { id: "center", name: "Центр" },
  { id: "northwest", name: "Северо-Запад" },
  { id: "south", name: "Юг" },
  { id: "volga", name: "Волга" },
  { id: "ural", name: "Урал" },
  { id: "siberia", name: "Сибирь" },
  { id: "east", name: "Дальний Восток" },
];

// Данные с фиксированным порядком городов по регионам для соответствия макету
const CITIES_BY_REGION = {
  moscow: [{ id: "moscow", name: "Москва" }],
  center: [
    { id: "voronezh", name: "Воронеж" },
    { id: "yaroslavl", name: "Ярославль" },
    { id: "belgorod", name: "Белгород" },
  ],
  northwest: [
    { id: "spb", name: "Санкт-Петербург" },
    { id: "kaliningrad", name: "Калининград" },
  ],
  south: [
    { id: "rostov", name: "Ростов-на-Дону" },
    { id: "krasnodar", name: "Краснодар" },
    { id: "volgograd", name: "Волгоград" },
  ],
  volga: [
    { id: "kazan", name: "Казань" },
    { id: "samara", name: "Самара" },
    { id: "ufa", name: "Уфа" },
    { id: "orenburg", name: "Оренбург" },
    { id: "nn", name: "Нижний Новгород" },
  ],
  ural: [
    { id: "ekb", name: "Екатеринбург" },
    { id: "chelyabinsk", name: "Челябинск" },
    { id: "perm", name: "Пермь" },
    { id: "surgut", name: "Сургут" },
    { id: "tyumen", name: "Тюмень" },
    { id: "izhevsk", name: "Ижевск" },
  ],
  siberia: [
    { id: "novosibirsk", name: "Новосибирск" },
    { id: "omsk", name: "Омск" },
    { id: "tomsk", name: "Томск" },
    { id: "krasnoyarsk", name: "Красноярск" },
    { id: "irkutsk", name: "Иркутск" },
  ],
  east: [
    { id: "khabarovsk", name: "Хабаровск" },
    { id: "vladivostok", name: "Владивосток" },
  ],
};

export class Map {
  constructor() {
    // Контейнер для точек городов
    this.mapContainer = document.querySelector(".hero__map-cities");
    // Кнопки выбора региона в табах
    this.navButtons = document.querySelectorAll(".hero__map-btn");
    // Текущий активный регион
    this.activeRegion = "all";
    // Текущий активный город (если выбран)
    this.activeCity = null;
    // Выпадающий список с регионами
    this.regionDropdown = document.querySelector(".hero__map-dropdown");
    // Текст в кнопке выбора региона
    this.regionDropdownText = document.querySelector(".hero__map-current span");

    // Инициализация
    this.init();
  }

  init() {
    if (!this.mapContainer) return;

    // Очищаем контейнер и создаем точки городов
    this.createCityPoints();

    // Создаем выпадающий список с городами в виде таблицы
    this.createCityDropdowns();

    // Добавляем обработчики событий для кнопок выбора региона
    this.initRegionButtons();
  }

  createCityPoints() {
    // Очищаем контейнер от статических точек
    this.mapContainer.innerHTML = "";

    // Создаем точки городов динамически
    Object.entries(CITIES).forEach(([cityId, city]) => {
      const pointElement = document.createElement("div");
      pointElement.className = "hero__map-point";
      pointElement.dataset.city = cityId;
      pointElement.dataset.region = city.region;
      pointElement.style.top = `${city.top}%`;
      pointElement.style.left = `${city.left}%`;

      // Добавляем название города
      const nameElement = document.createElement("span");
      nameElement.className = "hero__map-point-name";
      nameElement.textContent = city.name;

      // Добавляем обработчик клика на точку города
      pointElement.addEventListener("click", () => {
        this.setActiveCity(cityId);
      });

      pointElement.appendChild(nameElement);
      this.mapContainer.appendChild(pointElement);
    });
  }

  createCityDropdowns() {
    // Очищаем выпадающий список
    this.regionDropdown.innerHTML = "";

    // Создаем таблицу регионов и городов
    const tableElement = document.createElement("div");
    tableElement.className = "hero__map-table";

    // Создаем строку с заголовками регионов
    const headerRow = document.createElement("div");
    headerRow.className = "hero__map-row hero__map-header";

    // Добавляем ячейки с названиями регионов
    REGIONS_DATA.forEach((region) => {
      const headerCell = document.createElement("div");
      headerCell.className = "hero__map-cell hero__map-region";
      headerCell.dataset.region = region.id;
      headerCell.textContent = region.name;

      headerCell.addEventListener("click", () => {
        this.filterByRegion(region.id);
      });

      headerRow.appendChild(headerCell);
    });

    tableElement.appendChild(headerRow);

    // Получаем максимальное количество городов в регионе для макета
    const maxCities = Math.max(
      ...Object.values(CITIES_BY_REGION).map((cities) => cities.length)
    );

    // Создаем строки для городов
    for (let i = 0; i < maxCities; i++) {
      const cityRow = document.createElement("div");
      cityRow.className = "hero__map-row";

      // Для каждого региона добавляем город (если есть)
      REGIONS_DATA.forEach((region) => {
        const cityCell = document.createElement("div");
        cityCell.className = "hero__map-cell";

        const regionCities = CITIES_BY_REGION[region.id];
        if (regionCities && regionCities[i]) {
          const cityData = regionCities[i];
          cityCell.textContent = cityData.name;
          cityCell.dataset.city = cityData.id;
          cityCell.dataset.region = region.id;

          cityCell.addEventListener("click", () => {
            this.setActiveCity(cityData.id);
          });
        }

        cityRow.appendChild(cityCell);
      });

      tableElement.appendChild(cityRow);
    }

    this.regionDropdown.appendChild(tableElement);
  }

  initRegionButtons() {
    // Добавляем обработчики событий для кнопок в табах
    this.navButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const region = button.dataset.region;
        this.filterByRegion(region);
      });
    });

    // Устанавливаем начальное состояние - показываем все города
    this.filterByRegion("all");
  }

  filterByRegion(region) {
    this.activeRegion = region;
    this.activeCity = null;

    // Обновляем активные кнопки в табах
    this.navButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.region === region);
    });

    // Обновляем текст в кнопке выбора региона
    if (region === "all") {
      this.regionDropdownText.textContent = "Офисы Softline";
    } else {
      const regionData = REGIONS_DATA.find((r) => r.id === region);
      if (regionData) {
        this.regionDropdownText.textContent = regionData.name;
      }
    }

    // Подсвечиваем активный регион в таблице
    const regionCells = document.querySelectorAll(".hero__map-region");
    regionCells.forEach((cell) => {
      cell.classList.toggle("active", cell.dataset.region === region);
    });

    // Показываем/скрываем точки городов
    const cityPoints = document.querySelectorAll(".hero__map-point");
    cityPoints.forEach((point) => {
      if (region === "all") {
        point.classList.remove("hidden");
        point.classList.add("active");
      } else {
        const pointRegion = point.dataset.region;
        const isVisible = pointRegion === region;
        point.classList.toggle("hidden", !isVisible);
        point.classList.toggle("active", isVisible);
      }
    });
  }

  setActiveCity(cityId) {
    this.activeCity = cityId;

    if (!cityId) return;

    const cityData = CITIES[cityId];
    if (!cityData) return;

    // Показываем регион этого города
    this.filterByRegion(cityData.region);

    // Обновляем текст в кнопке выбора
    this.regionDropdownText.textContent = cityData.name;

    // Деактивируем все города
    const cityPoints = document.querySelectorAll(".hero__map-point");
    cityPoints.forEach((point) => {
      const isActive = point.dataset.city === cityId;
      point.classList.toggle("active", isActive);
      point.classList.toggle("hidden", !isActive);
    });

    // Подсвечиваем активный город в таблице
    const cityCells = document.querySelectorAll(".hero__map-cell[data-city]");
    cityCells.forEach((cell) => {
      cell.classList.toggle("active", cell.dataset.city === cityId);
    });

    // Закрываем выпадающий список
    const mapSelect = document.querySelector(".hero__map-current");
    if (mapSelect) {
      mapSelect.classList.remove("active");
      this.regionDropdown.classList.remove("active");
    }
  }
}
