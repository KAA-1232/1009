document.addEventListener("DOMContentLoaded", function () {
  // Мобильное меню
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const mainNav = document.querySelector(".main-nav");
  const body = document.body;

  mobileMenuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    mainNav.classList.toggle("active");
    body.classList.toggle("no-scroll");
  });

  // Закрытие меню при клике на ссылку
  const navLinks = document.querySelectorAll(".main-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenuBtn.classList.remove("active");
      mainNav.classList.remove("active");
      body.classList.remove("no-scroll");
    });
  });

  //   // Слайдер брендов
  //   const brandsSlider = document.querySelector(".brands-slider");
  //   if (brandsSlider) {
  //     // Слайдер брендов (обновленная версия)
  //     const brandsSlider = document.querySelector(".brands-slider");
  //     if (brandsSlider) {
  //       const brandContainer = document.createElement("div");
  //       brandContainer.className = "brands-container";
  //       brandContainer.innerHTML = brandsSlider.innerHTML;
  //       brandsSlider.innerHTML = "";
  //       brandsSlider.appendChild(brandContainer);

  //       const brandItems = document.querySelectorAll(".brand-item");
  //       const totalBrandSlides = brandItems.length;
  //       let isDragging = false;
  //       let startPos = 0;
  //       let currentTranslate = 0;
  //       let prevTranslate = 0;
  //       let animationID;
  //       let currentIndex = 0;

  //       // Для мобильных - горизонтальная прокрутка
  //       if (window.innerWidth <= 767) {
  //         brandsSlider.style.overflowX = "auto";
  //         brandsSlider.style.scrollSnapType = "x mandatory";
  //         brandContainer.style.display = "flex";
  //         brandContainer.style.flexWrap = "nowrap";
  //         brandItems.forEach((item) => {
  //           item.style.flex = "0 0 auto";
  //           item.style.scrollSnapAlign = "start";
  //           item.style.minWidth = "150px";
  //         });

  //         // Плавный скролл при отпускании
  //         brandsSlider.addEventListener("scroll", () => {
  //           clearTimeout(brandsSlider.scrollTimeout);
  //           brandsSlider.scrollTimeout = setTimeout(() => {
  //             const scrollLeft = brandsSlider.scrollLeft;
  //             const itemWidth = brandItems[0].offsetWidth;
  //             currentIndex = Math.round(scrollLeft / itemWidth);
  //             brandsSlider.scrollTo({
  //               left: currentIndex * itemWidth,
  //               behavior: "smooth",
  //             });
  //           }, 100);
  //         });
  //       } else {
  //         // Для десктопов - автоматический слайдер с плавной анимацией
  //         brandContainer.style.display = "flex";
  //         brandContainer.style.transition = "transform 0.5s ease-in-out";

  //         function updateSliderPosition() {
  //           const visibleItems = 4; // Сколько брендов показывать одновременно
  //           const itemWidth =
  //             brandItems[0].offsetWidth +
  //             parseInt(getComputedStyle(brandItems[0]).marginRight);
  //           const containerWidth = itemWidth * visibleItems;

  //           brandsSlider.style.width = `${containerWidth}px`;
  //           brandsSlider.style.overflow = "hidden";

  //           function autoSlide() {
  //             currentIndex =
  //               (currentIndex + 1) % (totalBrandSlides - visibleItems + 1);
  //             brandContainer.style.transform = `translateX(-${
  //               currentIndex * itemWidth
  //             }px)`;
  //           }

  //           let slideInterval = setInterval(autoSlide, 3000);

  //           brandsSlider.addEventListener("mouseenter", () => {
  //             clearInterval(slideInterval);
  //           });

  //           brandsSlider.addEventListener("mouseleave", () => {
  //             slideInterval = setInterval(autoSlide, 3000);
  //           });
  //         }

  //         // Инициализация после загрузки изображений
  //         window.addEventListener("load", updateSliderPosition);
  //         window.addEventListener("resize", () => {
  //           if (window.innerWidth > 767) {
  //             updateSliderPosition();
  //           }
  //         });
  //       }
  //     }
  //   }

  // Загрузка продуктов
  const productsGrid = document.querySelector(".products-grid");
  if (productsGrid) {
    const products = [
      {
        title: "Средства для стирки",
        image: "photo/2592133.jpg",
        link: "#laundry",
        description: "Гели для стирки, кондиционеры для белья, пятновыводители",
      },
      {
        title: "Средства для посуды",
        image: "photo/2592195.jpg",
        link: "#dishes",
        description: "Гели для мытья посуды, таблетки для посудомоечных машин",
      },
      {
        title: "Жидкое мыло",
        image: "photo/3719270.jpg",
        link: "#soap",
        description: "Антибактериальное, увлажняющее, детское жидкое мыло",
      },
      {
        title: "Средства для уборки",
        image: "photo/3736591 copy.jpg",
        link: "#cleaning",
        description: "Универсальные чистящие средства, для стекол, сантехники",
      },
      {
        title: "Стиральные порошки",
        image: "photo/СТМ WHITE GROUP.jpg",
        link: "#powders",
        description: "Для белого и цветного белья, детские порошки",
      },
      {
        title: "Уходовая косметика",
        image: "photo/Продукция WHITE GROUP.jpg",
        link: "#cosmetics",
        description: "Кремы для рук, гели для душа, шампуни",
      },
    ];

    productsGrid.innerHTML = products
      .map(
        (product, index) => `
              <div class="product-card animate" style="animation-delay: ${
                index * 0.1
              }s">
                  <a href="${product.link}">
                      <div class="product-image" style="background-image: url('${
                        product.image
                      }')"></div>
                      <div class="product-info">
                          <h3 class="product-title">${product.title}</h3>
                          <p class="product-description">${
                            product.description
                          }</p>
                          <span class="product-more">Подробнее <i class="fas fa-arrow-right"></i></span>
                      </div>
                  </a>
              </div>
          `
      )
      .join("");
  }

  // Модальные окна
  const modalTriggers = document.querySelectorAll(
    '[href="#callback"], [href="#partner"], [href="#commercial"], [href="#stm-request"], [href="#catalog"]'
  );
  const modalClose = document.querySelector(".modal-close");
  const modal = document.querySelector(".modal");

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      const modalType = this.getAttribute("href").substring(1);
      updateModalContent(modalType);
      modal.style.display = "flex";
      body.style.overflow = "hidden";
    });
  });

  function updateModalContent(type) {
    const modalTitle = modal.querySelector("h3");
    const modalForm = modal.querySelector(".callback-form");

    switch (type) {
      case "callback":
        modalTitle.textContent = "Обратная связь";
        modalForm.innerHTML = `
            <input type="text" placeholder="Ваше имя" required>
            <input type="tel" placeholder="Телефон" required>
            <input type="email" placeholder="Email">
            <textarea placeholder="Ваш вопрос"></textarea>
            <label>
              <input type="checkbox" required>
              Я согласен с <a href="/privacy">политикой конфиденциальности</a>
            </label>
            <button type="submit" class="btn btn-primary">Отправить</button>
          `;
        break;
      case "partner":
        modalTitle.textContent = "Стать партнером";
        modalForm.innerHTML = `
            <input type="text" placeholder="Название компании" required>
            <input type="text" placeholder="Ваше имя" required>
            <input type="tel" placeholder="Телефон" required>
            <input type="email" placeholder="Email" required>
            <textarea placeholder="Расскажите о вашем бизнесе"></textarea>
            <label>
              <input type="checkbox" required>
              Я согласен с <a href="/privacy">политикой конфиденциальности</a>
            </label>
            <button type="submit" class="btn btn-primary">Отправить заявку</button>
          `;
        break;
      case "commercial":
        modalTitle.textContent = "Получить коммерческое предложение";
        modalForm.innerHTML = `
            <input type="text" placeholder="Название компании" required>
            <input type="text" placeholder="Ваше имя" required>
            <input type="tel" placeholder="Телефон" required>
            <input type="email" placeholder="Email" required>
            <select required>
              <option value="" disabled selected>Выберите продукцию</option>
              <option value="laundry">Средства для стирки</option>
              <option value="dishes">Средства для посуды</option>
              <option value="cleaning">Средства для уборки</option>
              <option value="all">Вся продукция</option>
            </select>
            <label>
              <input type="checkbox" required>
              Я согласен с <a href="/privacy">политикой конфиденциальности</a>
            </label>
            <button type="submit" class="btn btn-primary">Получить КП</button>
          `;
        break;
      case "stm-request":
        modalTitle.textContent = "Private label (СТМ)";
        modalForm.innerHTML = `
            <input type="text" placeholder="Название компании" required>
            <input type="text" placeholder="Ваше имя" required>
            <input type="tel" placeholder="Телефон" required>
            <input type="email" placeholder="Email" required>
            <select required>
              <option value="" disabled selected>Тип продукции</option>
              <option value="laundry">Средства для стирки</option>
              <option value="dishes">Средства для посуды</option>
              <option value="cleaning">Средства для уборки</option>
              <option value="other">Другое</option>
            </select>
            <textarea placeholder="Дополнительная информация"></textarea>
            <label>
              <input type="checkbox" required>
              Я согласен с <a href="/privacy">политикой конфиденциальности</a>
            </label>
            <button type="submit" class="btn btn-primary">Отправить запрос</button>
          `;
        break;
    }
  }

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      body.style.overflow = "auto";
    }
  });

  // Плавная прокрутка
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (
        href === "#" ||
        href === "#callback" ||
        href === "#partner" ||
        href === "#commercial" ||
        href === "#stm-request"
      ) {
        return;
      }

      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Фиксированная шапка при скролле
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Анимация карточек продуктов
  // Обновленная функция анимации карточек
  function animateProductCards() {
    const cards = document.querySelectorAll(".product-card");
    const windowHeight = window.innerHeight;

    cards.forEach((card, index) => {
      card.style.setProperty("--index", index);
      const cardPosition = card.getBoundingClientRect().top;

      if (
        cardPosition < windowHeight - 100 &&
        !card.classList.contains("animated")
      ) {
        card.classList.add("animated");
      }
    });
  }

  // Запускаем при загрузке и скролле
  window.addEventListener("load", animateProductCards);
  window.addEventListener("scroll", animateProductCards);

  // Оптимизация с requestAnimationFrame
  let ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        animateProductCards();
        ticking = false;
      });
      ticking = true;
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    // Функция для проверки видимости элементов
    function checkCardAnimation() {
      const cards = document.querySelectorAll(".product-card:not(.animated)");
      const windowHeight = window.innerHeight;
      const triggerOffset = 150; // Начинать анимацию когда элемент в 150px от нижней границы окна

      cards.forEach((card, index) => {
        const cardPosition = card.getBoundingClientRect().top;

        if (cardPosition < windowHeight - triggerOffset) {
          // Добавляем задержку для последовательного появления
          const delay = index * 0.1;

          // Устанавливаем задержку через style, чтобы она применялась только один раз
          card.style.animationDelay = `${delay}s`;

          // Чередуем анимации для лучшего визуального эффекта
          if (index % 2 === 0) {
            card.classList.add("slide-in-left");
          } else {
            card.classList.add("slide-in-right");
          }

          card.classList.add("animated");
        }
      });
    }

    // Запускаем проверку при загрузке
    checkCardAnimation();

    // И при скролле с троттлингом для оптимизации
    let isScrolling;
    window.addEventListener(
      "scroll",
      function () {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(checkCardAnimation, 50);
      },
      false
    );
  });

  // Отправка форм
  document.addEventListener("submit", function (e) {
    if (e.target.classList.contains("callback-form")) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const submitBtn = form.querySelector("button[type='submit']");
      const originalBtnText = submitBtn.textContent;

      // Имитация отправки
      submitBtn.disabled = true;
      submitBtn.textContent = "Отправка...";
      submitBtn.classList.add("loading");

      setTimeout(() => {
        submitBtn.textContent = "Отправлено!";
        submitBtn.classList.remove("loading");
        submitBtn.classList.add("success");

        setTimeout(() => {
          modal.style.display = "none";
          body.style.overflow = "auto";
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
          submitBtn.classList.remove("success");
          form.reset();
        }, 1500);
      }, 2000);
    }
  });
});
