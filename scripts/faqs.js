document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faqs').forEach((container) => {
      let items = container.querySelectorAll('.faqs__item');

      const removeClassFaqs = (items) => {
        items.forEach((item) => {
          item.classList.remove('faqs__item--expand');
        });
      };

      items.forEach((faq) => {
        faq.addEventListener('click', () => {
          faq.classList.toggle('faqs__item--expand');
        });
      });
    });
  });