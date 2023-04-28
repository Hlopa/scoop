//функция для горизонтального скролла
let windowWidth = window.innerWidth;

const main = document.querySelector(".main");

function scrollHorizontally(e) {
  e = window.event || e;
  var delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  document.getElementById("main").scrollLeft -= delta * 40; // Multiplied by 40
  e.preventDefault();
}

if (main && windowWidth >= 850) {
  if (document.getElementById("main").addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById("main").addEventListener("mousewheel", scrollHorizontally, false);
    // Firefox
    document.getElementById("main").addEventListener("DOMMouseScroll", scrollHorizontally, false);
  } else {
    // IE 6/7/8
    document.getElementById("main").attachEvent("onmousewheel", scrollHorizontally);
  }
}

if (main) {
  window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;
    if (windowWidth >= 850) {
      if (document.getElementById("main").addEventListener) {
        // IE9, Chrome, Safari, Opera
        document.getElementById("main").addEventListener("mousewheel", scrollHorizontally, false);
        // Firefox
        document.getElementById("main").addEventListener("DOMMouseScroll", scrollHorizontally, false);
      } else {
        // IE 6/7/8
        document.getElementById("main").attachEvent("onmousewheel", scrollHorizontally);
      }
    } else {
      document.getElementById("main").removeEventListener("mousewheel", scrollHorizontally);
      document.getElementById("main").removeEventListener("DOMMouseScroll", scrollHorizontally);
      document.getElementById("main").removeEventListener("onmousewheel", scrollHorizontally);
    }
  });
}


//====Select mode==========//

const news = document.querySelector(".news");

if (news) {
  const selectSingle = document.querySelector(".__select");
  const selectSingle_title = selectSingle.querySelector(".__select__title");
  const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");
  const title = document.getElementById('news-title');
  const img = document.getElementById('news-mode-img');
  const sourse = img.previousElementSibling;

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

      switch (selectSingle_title.textContent) {
        case 'Mr. President mode':
          title.textContent ='Dear Sir, let me introduce you to the current world situation how I see it.';
          img.src = 'images/news/presidend.png';
          img.style= 'display: block';
          sourse.srcset = 'images/news/presidend.webp'
          break;
        case 'Child mode':
          title.textContent ='Hi, grown ups! Let me try to tell you what I think about what I know :)';
          img.src = 'images/news/child.png';
          img.style= 'display: block';
          sourse.srcset = 'images/news/child.webp'
          break;
        case 'Preacher mode':
          title.textContent ='Good day and welcome to this place of worship to honor the news from the world.';
          img.src = 'images/news/preacher.png';
          img.style= 'display: block';
          sourse.srcset = 'images/news/preacher.webp'
          break;
        default:
          title.textContent ='Hey, this is SCOOP, stay informed in a fast and entertaining way with us.';
          img.style= 'display: none'
      }
    });
  }

//============Open Acc Menu===============//
  const avatar = document.querySelector('.avatar-box');
  const logOutBtn = document.querySelector('.avatar-btn-logOut');

  avatar?.addEventListener('click', function (e) {
    logOutBtn.classList.toggle('avatar-btn-logOut--active');
  })
  

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



//Хедер-бургер
const burger = document.querySelector('.menu-burger'),
  menuBody = document.querySelector('.header-menu');

burger?.addEventListener('click', () => {
  burger.classList.toggle('menu-burger__active');
  menuBody.classList.toggle('header-menu--show');
})


//Хедер-бургер-новости

const burgerNews = document.querySelector('.menu-burger-news'),
  menuBodyNews = document.querySelector('.news-header__menu'),
  menuItemNews = menuBodyNews?.querySelectorAll('.news-header__menu-item') ;

burgerNews?.addEventListener('click', () => {
  burgerNews.classList.toggle('menu-burger-news__active');
  menuBodyNews.classList.toggle('news-header__menu--active');
})

menuItemNews?.forEach((item) => {
  item?.addEventListener('click', () => {
    burgerNews.classList.toggle('menu-burger-news__active');
    menuBodyNews.classList.toggle('news-header__menu--active');
  })
})

