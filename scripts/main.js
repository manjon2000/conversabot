document.addEventListener("DOMContentLoaded", (init) => {
  let iconOpenMenu = document.querySelector(".navbar-icon-open");
  let iconCloseMenu = document.querySelector(".navbar-icon-close");
  let containerMenu = document.querySelector(".navbar-menu");
  
  iconOpenMenu.addEventListener("click", () => {
    containerMenu.classList.add("navbar-menu--actived");
  });
  
  iconCloseMenu.addEventListener("click", () => {
    containerMenu.classList.remove("navbar-menu--actived");
  });
  
  let containerNav = document.querySelector(".navbar");
  let coordenateY = 0;
  
  window.addEventListener("scroll", (e) => {
    coordenateY = window.pageYOffset;
  
    if (coordenateY > 100) {
      containerNav.classList.add("navbar--scrolling");
    } else {
      containerNav.classList.remove("navbar--scrolling");
    }
  });
  
  const scrollers = document.querySelectorAll(".scroller");
  
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
  
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  
  });

  $(".testimonials-primary").owlCarousel(
    {
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1200: {
            items: 3,
          },
      },
      margin: 16,
      dots: false,
      nav: false,
      mouseDrag: true,
      autoplay: true,
      autoplayTimeout: 5000,
      smartSpeed: 1000,
    }
  );
  
  $(".testimonials-secondary").owlCarousel(
    {
      loop: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1200: {
            items: 3,
          },
      },
      margin: 16,
      dots: false,
      nav: false,
      mouseDrag: true,
      autoplay: true,
      autoplayTimeout: 2250,
      smartSpeed: 800,
    }
  );
});