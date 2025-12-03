// FAQ аккордеон
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
      const question = item.querySelector(".faq-question");
      question.addEventListener("click", () => {
        if (!item.classList.contains("active")) {
          faqItems.forEach(i => i.classList.remove("active"));
        }
        item.classList.toggle("active");
      });
    });


    // О НАС – табы
    document.addEventListener("DOMContentLoaded", function () {
      const aboutMapImgs = document.querySelectorAll(".about-top__map-img");
      if (!aboutMapImgs.length) return;

      let currentIndex = 0;

      setInterval(() => {
        aboutMapImgs[currentIndex].classList.remove("about-top__map-img--active");

        currentIndex = (currentIndex + 1) % aboutMapImgs.length;

        aboutMapImgs[currentIndex].classList.add("about-top__map-img--active");
      }, 5000); // 5 секунд
    });



    // КАТАЛОГ
    document.addEventListener("DOMContentLoaded", function () {
      const catalogItems = [
        {
          id: "narva",
          type: "house",
          title: "Каркасный дом «Нарва»",
          price: "1 880 000 ₽",
          image: "https://sun9-85.userapi.com/i02MQpLLDkEEPuEe7ShVWgX43sg95Q5FAf1nRQ/ht_DZetpKhU.jpg",
          shortDesc: "Полутораэтажный дом 96 м² с большой кухней-гостиной, террасой и балконом.",
          footer: "Дом 6×8 м",
          area: "Площадь: 96 м², 1,5 этажа",
          text: "Уютный каркасный дом для круглогодичного проживания. Просторная кухня-гостиная, выход на террасу, балкон на втором уровне и продуманная планировка для семьи из 3–5 человек.",
          link: "https://sk--countryhousepro.orgs.biz/product/7577216"
        },
        {
          id: "gidrouzel",
          type: "house",
          title: "Каркасный дом «Гидроузел»",
          price: "1 470 000 ₽",
          image: "https://sun9-58.userapi.com/S28HHHmtV06aMQ1y8XNf-5zz7WoajWvHIGM1wQ/r1ZfsMDAOSU.jpg",
          shortDesc: "Компактный дом площадью 66 м² — отличный вариант для круглогодичного проживания.",
          footer: "Дом 66 м²",
          area: "Площадь: 66 м², 1 этаж",
          text: "Практичный проект с аккуратной архитектурой. Оптимальная площадь, отдельные спальни, светлая гостиная и возможность разместить дом на небольшом участке.",
          link: "https://sk--countryhousepro.orgs.biz/product/7577197"
        },
        {
          id: "lomonosov",
          type: "house",
          title: "Каркасный дом «Ломоносов»",
          price: "по запросу",
          image: "https://sun9-61.userapi.com/Ypa3KuRi_wwA9W4FPBnf8QNDI-UL4EFIRRIb3g/G4cjd3O3u_g.jpg",
          shortDesc: "Одноэтажный дом 54 м²: продуманная планировка и ничего лишнего.",
          footer: "Дом 54 м²",
          area: "Площадь: 54 м², 1 этаж",
          text: "Минималистичный дом для небольшого участка или дачи. В проекте учтено всё необходимое: кухня-гостиная, спальни и санузел, без лишних затрат на избыточные площади.",
          link: "https://sk--countryhousepro.orgs.biz/product/6841269"
        },
        {
          id: "iris",
          type: "house",
          title: "Дачный дом «Ирис»",
          price: "995 000 ₽",
          image: "https://sun9-45.userapi.com/RI6yQktEl-bqybOVdRgKYydP02dsznOfzciiKw/M5yAYhj1KBk.jpg",
          shortDesc: "Уютный дачный дом 63 м² с просторной спальней на мансарде и террасой.",
          footer: "Дом 63 м²",
          area: "Площадь: 63 м², мансардный этаж",
          text: "Отличный вариант дачного дома для отдыха. Большая спальня на мансарде, общая зона на первом этаже и терраса для летних посиделок с семьёй или друзьями.",
          link: "https://sk--countryhousepro.orgs.biz/product/6841265"
        },
        {
          id: "sortavala",
          type: "house",
          title: "Каркасный дом «Сортавала»",
          price: "1 145 000 ₽",
          image: "https://sun9-85.userapi.com/JYo5naQAizjYDW8LOp-aat5OXsVs5zot7IyJHA/eUlcdyqav1k.jpg",
          shortDesc: "Одноэтажный дом 72 м² с большой гостиной и удобной террасой.",
          footer: "Дом 72 м²",
          area: "Площадь: 72 м², 1 этаж",
          text: "Классический одноэтажный дом с просторной гостиной и выходом на террасу. Подойдёт для постоянного проживания или комфортабельной дачи.",
          link: "https://sk--countryhousepro.orgs.biz/product/6841261"
        },
        {
          id: "taiga",
          type: "bath",
          title: "Баня «Тайга»",
          price: "1 200 000 ₽",
          image: "https://sun9-34.userapi.com/NJIWXiRROGlERZl0MGBFMy9UbwT8yxAlq7ZupA/4Zmkm9c4ipw.jpg",
          shortDesc: "Баня площадью 37 м² — идеальное место для отдыха семьёй или друзьями.",
          footer: "Баня 37 м²",
          area: "Площадь: 37 м²",
          text: "Функциональная баня с комфортной парной, душевой и комнатой отдыха. Отлично вписывается как в дачный, так и в загородный участок.",
          link: "https://sk--countryhousepro.orgs.biz/product/5930963"
        },
        {
          id: "karelia",
          type: "bath",
          title: "Баня «Карелия»",
          price: "950 000 ₽",
          image: "https://sun9-71.userapi.com/xv2WqxJIjSMsQMPlexWYMFqxQshsVIVoaZjJ3w/IqNtKdrLX_U.jpg",
          shortDesc: "Классическая баня 44 м² с комфортной парной и уютной комнатой отдыха.",
          footer: "Баня 44 м²",
          area: "Площадь: 44 м²",
          text: "Уютная баня в классическом стиле: простая и понятная планировка, комфортная парная, помывочная и комната отдыха для компании.",
          link: "https://sk--countryhousepro.orgs.biz/product/5930965"
        }
      ];

      const track = document.getElementById("catalog-track");
      const tabs = document.querySelectorAll(".catalog-tab");
      const countEl = document.getElementById("catalog-count");
      const viewport = document.querySelector(".catalog-viewport");
      const prevBtn = document.querySelector(".catalog-side-arrow--prev");
      const nextBtn = document.querySelector(".catalog-side-arrow--next");


      const modal = document.getElementById("catalog-modal");
      const modalTitle = document.getElementById("catalog-modal-title");
      const modalPrice = document.getElementById("catalog-modal-price");
      const modalMeta = document.getElementById("catalog-modal-meta");
      const modalText = document.getElementById("catalog-modal-text");
      const modalLink = document.getElementById("catalog-modal-link");
      const modalClose = modal.querySelector(".catalog-modal__close");
      const modalBackdrop = modal.querySelector(".catalog-modal__backdrop");

      let currentType = "house";

      // Рендер карточек
      function renderCatalog(type) {
        track.innerHTML = "";
        const items = catalogItems.filter(item => item.type === type);

        items.forEach(item => {
          const card = document.createElement("article");
          card.className = "catalog-card";
          card.dataset.id = item.id;
          card.innerHTML = `
            <div class="catalog-card__image" style="background-image:url('${item.image}');"></div>
            <div class="catalog-card__body">
              <div class="catalog-card__title">${item.title}</div>
              <div class="catalog-card__price">${item.price}</div>
              <div class="catalog-card__desc">${item.shortDesc}</div>
              <div class="catalog-card__footer">
                <span>${item.footer}</span>
                <button class="catalog-card__btn" type="button">Подробнее</button>
              </div>
            </div>
          `;
          track.appendChild(card);
        });

        countEl.textContent = `Всего ${items.length} проектов`;
        track.scrollLeft = 0;
      }

      renderCatalog(currentType);

      // Табы
      tabs.forEach(tab => {
        tab.addEventListener("click", () => {
          const type = tab.dataset.type;
          if (type === currentType) return;

          currentType = type;
          tabs.forEach(t => t.classList.toggle("catalog-tab--active", t === tab));
          renderCatalog(currentType);
        });
      });

      // Шаг скролла
      function getScrollStep() {
        const card = track.querySelector(".catalog-card");
        if (!card) return 0;
        const style = getComputedStyle(track);
        const gap = parseInt(style.columnGap || style.gap || "24", 10);
        return card.offsetWidth + gap;
      }

      prevBtn.addEventListener("click", () => {
        const step = getScrollStep();
        viewport.scrollBy({ left: -step, behavior: "smooth" });
      });

      nextBtn.addEventListener("click", () => {
        const step = getScrollStep();
        viewport.scrollBy({ left: step, behavior: "smooth" });
      });

      // Модалка
      function openModal(id) {
        const item = catalogItems.find(el => el.id === id);
        if (!item) return;

        modalTitle.textContent = item.title;
        modalPrice.textContent = item.price;
        modalMeta.textContent = item.area;
        modalText.textContent = item.text;
        modalLink.href = item.link;

        modal.classList.add("catalog-modal--open");
        document.body.style.overflow = "hidden";
      }

      function closeModal() {
        modal.classList.remove("catalog-modal--open");
        document.body.style.overflow = "";
      }

      track.addEventListener("click", (e) => {
        const btn = e.target.closest(".catalog-card__btn");
        if (!btn) return;
        const card = btn.closest(".catalog-card");
        if (!card) return;
        openModal(card.dataset.id);
      });

      modalClose.addEventListener("click", closeModal);
      modalBackdrop.addEventListener("click", closeModal);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("catalog-modal--open")) {
          closeModal();
        }
      });
    });




    // СЛАЙДЕР ОТЗЫВОВ
    document.addEventListener("DOMContentLoaded", function () {
      const pagesContainer = document.querySelector(".reviews-pages");
      const pages = Array.from(document.querySelectorAll(".reviews-page"));
      const prevBtn = document.querySelector(".reviews-arrow--prev");
      const nextBtn = document.querySelector(".reviews-arrow--next");

      if (!pagesContainer || !pages.length || !prevBtn || !nextBtn) return;

      let currentPage = 0;

      function setContainerHeight(index) {
        const page = pages[index];
        if (!page) return;
        const prevOpacity = page.style.opacity;
        page.style.opacity = 1;
        const height = page.offsetHeight;
        page.style.opacity = prevOpacity;
        pagesContainer.style.height = height + "px";
      }

      function showPage(index) {
        pages.forEach((page, i) => {
          page.classList.toggle("reviews-page--active", i === index);
        });
        currentPage = index;
        setContainerHeight(currentPage);
      }

      prevBtn.addEventListener("click", () => {
        const nextIndex = (currentPage - 1 + pages.length) % pages.length;
        showPage(nextIndex);
      });

      nextBtn.addEventListener("click", () => {
        const nextIndex = (currentPage + 1) % pages.length;
        showPage(nextIndex);
      });

      // начальная высота
      setTimeout(() => setContainerHeight(currentPage), 50);
    });





    // Мобильное меню
    const burger = document.getElementById("burger");
    const navMobile = document.getElementById("nav-mobile");

    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      const visible = navMobile.style.display === "flex";
      navMobile.style.display = visible ? "none" : "flex";
    });

    navMobile.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        burger.classList.remove("active");
        navMobile.style.display = "none";
      });
    });

    // КАТАЛОГ – бесконечное листание с плавной анимацией
    const catalogTrack = document.getElementById("catalog-track");
    const catalogButtons = document.querySelectorAll(".catalog-arrow");
    let isAnimating = false;

    function getStep() {
      const card = catalogTrack.querySelector(".catalog-card");
      if (!card) return 0;
      const cardWidth = card.getBoundingClientRect().width;
      const gap = 24; // как в CSS
      return cardWidth + gap;
    }

    catalogButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        if (isAnimating) return;
        const dir = btn.dataset.dir;
        const step = getStep();
        if (!step) return;

        if (dir === "next") {
          isAnimating = true;
          catalogTrack.style.transition = "transform 0.3s ease";
          catalogTrack.style.transform = `translateX(-${step}px)`;

          catalogTrack.addEventListener(
            "transitionend",
            function handler() {
              catalogTrack.style.transition = "none";
              catalogTrack.style.transform = "translateX(0)";
              const first = catalogTrack.firstElementChild;
              catalogTrack.appendChild(first);
              isAnimating = false;
              catalogTrack.removeEventListener("transitionend", handler);
            },
            { once: true }
          );
        } else {
          // prev
          isAnimating = true;
          const last = catalogTrack.lastElementChild;
          catalogTrack.style.transition = "none";
          catalogTrack.insertBefore(last, catalogTrack.firstElementChild);
          catalogTrack.style.transform = `translateX(-${step}px)`;

          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              catalogTrack.style.transition = "transform 0.3s ease";
              catalogTrack.style.transform = "translateX(0)";
            });
          });

          catalogTrack.addEventListener(
            "transitionend",
            function handler() {
              catalogTrack.style.transition = "none";
              isAnimating = false;
              catalogTrack.removeEventListener("transitionend", handler);
            },
            { once: true }
          );
        }
      });
    });