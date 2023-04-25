//функция для горизонтального скролла

const main = document.querySelector(".main");

if (main) {
  (function () {
    function scrollHorizontally(e) {
      e = window.event || e;
      var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
      document.getElementById("main").scrollLeft -= delta * 40; // Multiplied by 40
      e.preventDefault();
    }
    if (document.getElementById("main").addEventListener) {
      // IE9, Chrome, Safari, Opera
      document.getElementById("main").addEventListener("mousewheel", scrollHorizontally, false);
      // Firefox
      document.getElementById("main").addEventListener("DOMMouseScroll", scrollHorizontally, false);
    } else {
      // IE 6/7/8
      document.getElementById("main").attachEvent("onmousewheel", scrollHorizontally);
    }
  })();
}

//====Select mode==========//

const news = document.querySelector(".news");

if (news) {
  const selectSingle = document.querySelector(".__select");
  const selectSingle_title = selectSingle.querySelector(".__select__title");
  const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

  // Toggle select
  selectSingle_title.addEventListener("click", () => {
    if ("active" === selectSingle.getAttribute("data-state")) {
      selectSingle.setAttribute("data-state", "");
    } else {
      selectSingle.setAttribute("data-state", "active");
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener("click", (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute("data-state", "");

      console.log(selectSingle_title.textContent);
    });
  }

  //open tags modal  
  const linkOpen = document.querySelector('.link--open-modal');
  const btnClose = document.querySelector(".btn--close-modal");
  const modal = document.querySelector(".modal");

  linkOpen?.addEventListener("click", function (e) {
    modal.classList.add("modal--open");
    burger.classList.remove("menu-burger__active");
    menuBody.classList.remove("header__menu-body--show");
  });

  btnClose?.addEventListener("click", function (e) {
    modal.classList.remove("modal--open");
  });

}



//======================Accordions with tags in tag modal====================//
const items = document.querySelectorAll(".accordion-expand-btn");

if (items) {
  function toggleAccordion() {
    const itemToggle = this.getAttribute('aria-expanded');

    if (itemToggle == 'true') {
      this.setAttribute('aria-expanded', 'false');
    }

    if (itemToggle == 'false') {
      this.setAttribute('aria-expanded', 'true');
    }
  }

  items.forEach(item => item.addEventListener('click', toggleAccordion));
}

//выбор новых фильтров
const tabFilterButtons = document.querySelectorAll(".tab-filter__button");

  tabFilterButtons?.forEach((button) => {
    button.addEventListener('click', function (e) {
      if (button.classList.contains('tab-filter__button--active')) {
        button.classList.remove('tab-filter__button--active');
      } else {
        button.classList.add('tab-filter__button--active');
      }
    })
  });

