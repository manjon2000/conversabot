document.addEventListener("DOMContentLoaded", (init) => {

  const ObserverElement = (fn, containerObserver) => {
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fn();
        }
      });
    }).observe(containerObserver);
  };
  
  let containerStats = document.querySelector('.stats')
  ObserverElement(animateNumbers, containerStats);
  
  function animateNumbers() {
    const counters = document.querySelectorAll('.stats-card-total');
    counters.forEach(counter => {
        const speed = 100;
  
        const target = +counter.getAttribute('data-target');
        const updateCount = () => {
            const current = +counter.innerText;
            const increment = target / speed;
  
            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = target;
            }
        };
  
        updateCount();
    });
  }

});