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

  const selectMode = document.querySelector(".selectMode");
  const selectModeOpen = selectMode.querySelector('.selectMode-open');
  const selectMode_title = selectMode.querySelector(".selectMode__title");
  const selectMode_labels = selectMode.querySelectorAll(".selectMode__label");
  const title = document.getElementById('news-title');
  const img = document.getElementById('news-mode-img');
  const sourse = img.previousElementSibling;


  const selectModeMobile = document.querySelector(".selectMode-mobile");
  const selectModeOpenMobile = selectModeMobile.querySelector('.selectMode-open');
  const selectMode_titleMobile = selectModeMobile.querySelector(".selectMode__title");
  const selectMode_labelsMobile = selectModeMobile.querySelectorAll(".selectMode__label");

  // Toggle select
  selectModeOpen.addEventListener("click", () => {
    if ("active" === selectMode.getAttribute("data-state")) {
      selectMode.setAttribute("data-state", "");
    } else {
      selectMode.setAttribute("data-state", "active");
    }
  });

  // Toggle select
  selectModeOpenMobile.addEventListener("click", () => {
    if ("active" === selectModeMobile.getAttribute("data-state")) {
      selectModeMobile.setAttribute("data-state", "");
    } else {
      selectModeMobile.setAttribute("data-state", "active");
    }
  });


  // Close when click to option
  for (let i = 0; i < selectMode_labelsMobile.length; i++) {
    selectMode_labelsMobile[i].addEventListener("click", (evt) => {
      selectMode_titleMobile.textContent = evt.target.textContent;
      selectModeMobile.setAttribute("data-state", "");

      switch (selectMode_title.textContent) {
        case 'Highlights':
          title.textContent = 'Welcome, seekers of truth and discovery!';
          img.src = 'images/news/highlights.png';
          img.style = 'display: block';
          sourse.srcset = 'images/news/highlights.png'
          break;
        case 'Child':
          title.textContent = 'Hello, young explorers of news and wonder!';
          img.src = 'images/news/child.png';
          img.style = 'display: block';
          sourse.srcset = 'images/news/child.webp'
          break;
        case 'Summary':
          title.textContent = 'Greetings, seekers of wisdom and news!';
          img.src = 'images/news/summary.png';
          img.style = 'display: block';
          sourse.srcset = 'images/news/summary.png'
          break;
        case 'Statement':
          title.textContent = 'Greetings, citizens of knowledge and insight!';
          img.src = 'images/news/statement.png';
          img.style = 'display: block';
          sourse.srcset = 'images/news/statement.png'
          break;
      }
    });
  }

  // Close when click to option
  for (let i = 0; i < selectMode_labels.length; i++) {
    selectMode_labels[i].addEventListener("click", (evt) => {
      selectMode_title.textContent = evt.target.textContent;
      selectMode.setAttribute("data-state", "");

      switch (selectMode_title.textContent) {
        case 'Highlights':
          title.textContent = 'Welcome, seekers of truth and discovery!';
          img.src = 'images/news/highlights.png';
          img.style = 'display: block';
          sourse.srcset = 'images/news/highlights.png'
          break;
        case 'Child':
          title.textContent = 'Hello, young explorers of news and wonder!';
          img.src = 'images/news/child.png';
          img.style = 'display: block';
          sourse.srcset = 'images/news/child.webp'
          break;
        case 'Summary':
          title.textContent = 'Greetings, seekers of wisdom and news!';
          img.src = 'images/news/summary.png';
          img.style = 'display: block';
          sourse.srcset = 'images/news/summary.png'
          break;
        case 'Statement':
          title.textContent = 'Greetings, citizens of knowledge and insight!';
          img.src = 'images/news/statement.png';
          img.style = 'display: block';
          sourse.srcset = 'images/news/statement.png'
          break;
      }
    });
  }



  //====Select date==========//
  if (news) {

    const selectDateMobile = document.querySelector(".selectDate-mobile");
    const selectDateOpenMobile = selectDateMobile.querySelector('.selectDate-open');
    const selectDate_titleMobile = selectDateMobile.querySelector(".selectDate_title");
    const selectDate_labelsMobile = selectDateMobile.querySelectorAll(".selectDate_labels");

    const selectDate = document.querySelector(".selectDate");
    const selectDateOpen = selectDate.querySelector('.selectDate-open');
    const selectDate_title = selectDate.querySelector(".selectDate_title");
    const selectDate_labels = selectDate.querySelectorAll(".selectDate_labels");

    // Toggle select
    selectDateOpen.addEventListener("click", () => {
      if ("active" === selectDate.getAttribute("data-state")) {
        selectDate.setAttribute("data-state", "");
      } else {
        selectDate.setAttribute("data-state", "active");
      }
    });

       // Toggle select
       selectDateOpenMobile.addEventListener("click", () => {
        if ("active" === selectDateMobile.getAttribute("data-state")) {
          selectDateMobile.setAttribute("data-state", "");
        } else {
          selectDateMobile.setAttribute("data-state", "active");
        }
      });

    // Close when click to option
    for (let i = 0; i < selectDate_labels.length; i++) {
      selectDate_labels[i].addEventListener("click", (evt) => {
        selectDate_title.textContent = evt.target.textContent;
        selectDate.setAttribute("data-state", "");
      });
    }

      // Close when click to option
      for (let i = 0; i < selectDate_labelsMobile.length; i++) {
        selectDate_labelsMobile[i].addEventListener("click", (evt) => {
          selectDate_titleMobile.textContent = evt.target.textContent;
          selectDateMobile.setAttribute("data-state", "");
        });
      }


  }



  //Open search input
  const searchBtn = document.querySelector(".search-btn");
  const cancelBtn = document.querySelector(".search-cancel-btn");
  const searchBox = document.querySelector(".search-box");


  searchBtn.onclick = () => {
    searchBox.classList.add("active");
  }

  cancelBtn.onclick = () => {
    console.log('d');
    searchBox.classList.remove("active");
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
const themeSection = document.querySelectorAll('.tab-filter__buttons');

themeSection?.forEach((theme) => {
  const themeSelectAll = theme.querySelector('.select-all');
  const selectors = theme.querySelectorAll('.select-btn');

  themeSelectAll.addEventListener('click', function (e) {
    themeSelectAll.classList.toggle('tab-filter__button--active');
    if (themeSelectAll.classList.contains('tab-filter__button--active')) {
      selectors.forEach((select) => {
        select.classList.add('tab-filter__button--active');
      })
    } else {
      selectors.forEach((select) => {
        select.classList.remove('tab-filter__button--active');
      })
    }
  });

  selectors.forEach((select) => {
    select.addEventListener('click', function (e) {
      if (select.classList.contains('tab-filter__button--active')) {
        selectors.forEach((item) => {
          item.classList.remove('tab-filter__button--active')
        })
        themeSelectAll.classList.remove('tab-filter__button--active')
      } else {
        selectors.forEach((item) => {
          item.classList.remove('tab-filter__button--active')
        })
        select.classList.add('tab-filter__button--active')
        themeSelectAll.classList.remove('tab-filter__button--active')
      }


    })
  })
})


// tabFilterButtons?.forEach((button) => {
//   button.addEventListener('click', function (e) {
//     button.classList.toggle('tab-filter__button--active')
//   })
// });



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
  menuItemNews = menuBodyNews?.querySelectorAll('.news-header__menu-item');

burgerNews?.addEventListener('click', () => {
  burgerNews.classList.toggle('menu-burger-news__active');
  menuBodyNews.classList.toggle('news-header__menu--active');
})

menuItemNews?.forEach((item) => {
  item?.addEventListener('click', () => {
    console.log('f');
    burgerNews.classList.remove('menu-burger-news__active');
    menuBodyNews.classList.remove('news-header__menu--active');
  })
})

