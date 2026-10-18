const APP = {
  init() {
    this.bindCarousels();
    this.bindForm();
  },

  bindCarousels() {
    document.querySelectorAll('[data-carousel]').forEach((carousel) => {
      const track = carousel.querySelector('.carousel-track');
      const prev = carousel.querySelector('.carousel-prev');
      const next = carousel.querySelector('.carousel-next');

      const scrollAmount = () => {
        const firstSlide = track.querySelector('.slide');
        return firstSlide ? firstSlide.getBoundingClientRect().width + 12 : 320;
      };

      prev?.addEventListener('click', () => track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' }));
      next?.addEventListener('click', () => track.scrollBy({ left: scrollAmount(), behavior: 'smooth' }));
    });
  },

  bindForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      const originalText = button.textContent;
      button.textContent = 'Sent';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 1500);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => APP.init());
