export class Slider {
  constructor(element) {
    this.slider = element;
    this.track = this.slider.querySelector(".corporate__track");
    this.slides = Array.from(this.track.children);
    this.nextButton =
      this.slider.parentElement.querySelector(".js-slider-next");
    this.prevButton =
      this.slider.parentElement.querySelector(".js-slider-prev");
    this.indicators = this.slider.parentElement.querySelectorAll(
      ".corporate__indicator"
    );

    this.slideWidth = this.slides[0].getBoundingClientRect().width;
    this.currentSlide = 1;
    this.slidesCount = this.slides.length - 2;
    this.isAnimating = false;
    this.autoplayTimer = null;
    this.autoplayInterval = 4000; // 4 секунды между слайдами
    this.isMobile = window.innerWidth <= 576; // $breakpoint-mobile в переменных

    this.init();
  }

  init() {
    // Clone first and last slide
    const firstSlide = this.slides[0].cloneNode(true);
    const lastSlide = this.slides[this.slides.length - 1].cloneNode(true);

    this.track.appendChild(firstSlide);
    this.track.insertBefore(lastSlide, this.slides[0]);

    this.updateSliderPosition();

    // Event Listeners
    this.nextButton.addEventListener("click", () => this.next());
    this.prevButton.addEventListener("click", () => this.prev());

    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToSlide(index + 1));
    });

    this.track.addEventListener("transitionend", () =>
      this.handleTransitionEnd()
    );

    // Touch Events
    let touchStartX = 0;
    let touchEndX = 0;

    this.track.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      // Остановить автопролистывание при свайпе
      this.stopAutoplay();
    });

    this.track.addEventListener("touchmove", (e) => {
      touchEndX = e.touches[0].clientX;
    });

    this.track.addEventListener("touchend", () => {
      const difference = touchStartX - touchEndX;
      if (Math.abs(difference) > 50) {
        if (difference > 0) {
          this.next();
        } else {
          this.prev();
        }
      }
      // Возобновить автопролистывание после свайпа на мобильном
      if (this.isMobile) {
        this.startAutoplay();
      }
    });

    // Запустить автопрокрутку на мобильном устройстве
    if (this.isMobile) {
      this.startAutoplay();
    }

    // Обработка изменения размера окна
    window.addEventListener("resize", () => {
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 576;

      // Если изменился режим отображения
      if (wasMobile !== this.isMobile) {
        if (this.isMobile) {
          this.startAutoplay();
        } else {
          this.stopAutoplay();
        }
      }
    });

    this.updateIndicators();
  }

  startAutoplay() {
    if (this.autoplayTimer) return;
    this.autoplayTimer = setInterval(() => {
      this.next();
    }, this.autoplayInterval);
  }

  stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  updateSliderPosition(animate = true) {
    if (!animate) {
      this.track.style.transition = "none";
    } else {
      this.track.style.transition = "transform 0.5s ease";
    }
    this.track.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }

  updateIndicators() {
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentSlide - 1) {
        indicator.classList.add("active");
        indicator.setAttribute("aria-current", "true");
      } else {
        indicator.classList.remove("active");
        indicator.setAttribute("aria-current", "false");
      }
    });
  }

  handleTransitionEnd() {
    this.isAnimating = false;

    if (this.currentSlide === 0) {
      this.currentSlide = this.slidesCount;
      this.updateSliderPosition(false);
    } else if (this.currentSlide === this.slidesCount + 1) {
      this.currentSlide = 1;
      this.updateSliderPosition(false);
    }
  }

  next() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentSlide++;
    this.updateSliderPosition();
    this.updateIndicators();
  }

  prev() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentSlide--;
    this.updateSliderPosition();
    this.updateIndicators();
  }

  goToSlide(index) {
    if (this.isAnimating || this.currentSlide === index) return;
    this.isAnimating = true;
    this.currentSlide = index;
    this.updateSliderPosition();
    this.updateIndicators();
  }
}
