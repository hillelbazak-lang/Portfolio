// script.js — load content from data/site-data.json and populate the page
// Edit data/site-data.json to add your own image paths, titles, descriptions and links.

async function loadSiteData() {
  try {
    const res = await fetch('data/site-data.json');
    if (!res.ok) throw new Error('Could not fetch site data');
    const data = await res.json();

    // helper to create image slide
    const createImageSlide = (src, alt = '') => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;
      img.loading = 'lazy';
      slide.appendChild(img);
      return slide;
    };

    // Paintings
    const paintingsTrack = document.querySelector('#paintings-carousel .carousel-track');
    if (paintingsTrack && Array.isArray(data.paintings)) {
      paintingsTrack.innerHTML = '';
      data.paintings.forEach(p => paintingsTrack.appendChild(createImageSlide(p.src, p.alt || p.title || '')));
    }

    // Sketches
    const sketchesTrack = document.querySelector('#sketches-carousel .carousel-track');
    if (sketchesTrack && Array.isArray(data.sketches)) {
      sketchesTrack.innerHTML = '';
      data.sketches.forEach(s => sketchesTrack.appendChild(createImageSlide(s.src, s.alt || s.title || '')));
    }

    // Colored illustrations
    const coloredTrack = document.querySelector('#colored-carousel .carousel-track');
    if (coloredTrack && Array.isArray(data.colored)) {
      coloredTrack.innerHTML = '';
      data.colored.forEach(c => coloredTrack.appendChild(createImageSlide(c.src, c.alt || c.title || '')));
    }

    // Testimonials
    const testimonialsTrack = document.querySelector('#testimonials-carousel .carousel-track');
    if (testimonialsTrack && Array.isArray(data.testimonials)) {
      testimonialsTrack.innerHTML = '';
      data.testimonials.forEach(t => {
        const node = document.createElement('div');
        node.className = 'testimonial';

        const avatar = document.createElement('div');
        avatar.className = 'avatar';
        if (t.image) {
          const img = document.createElement('img');
          img.src = t.image;
          img.alt = t.name || 'Recommender';
          img.loading = 'lazy';
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'cover';
          avatar.appendChild(img);
        } else {
          avatar.textContent = (t.name || 'R').split(' ').map(n => n[0] || '').join('').slice(0,2).toUpperCase();
        }

        const quote = document.createElement('div');
        quote.className = 'quote';
        const p = document.createElement('p');
        p.textContent = t.text || '';
        const cite = document.createElement('div');
        cite.style.marginTop = '8px';
        cite.style.fontWeight = '700';
        cite.textContent = t.name || '';
        quote.appendChild(p);
        quote.appendChild(cite);

        node.appendChild(avatar);
        node.appendChild(quote);
        testimonialsTrack.appendChild(node);
      });
    }

    // Projects
    const projectsList = document.getElementById('projects-list');
    if (projectsList && Array.isArray(data.projects)) {
      projectsList.innerHTML = '';
      data.projects.forEach(p => {
        const art = document.createElement('article');
        art.className = 'project-card card';

        const img = document.createElement('img');
        img.src = p.image || '';
        img.alt = p.title || '';
        img.loading = 'lazy';

        const meta = document.createElement('div');
        meta.className = 'project-body';
        const type = document.createElement('span');
        type.className = 'project-type';
        type.textContent = p.type || '';
        const h3 = document.createElement('h3');
        h3.textContent = p.title || '';
        const description = document.createElement('p');
        description.textContent = p.description || '';
        const a = document.createElement('a');
        a.href = p.url || '#';
        a.target = '_blank';
        a.rel = 'noreferrer';
        a.textContent = 'View';

        meta.appendChild(type);
        meta.appendChild(h3);
        meta.appendChild(description);
        meta.appendChild(a);

        art.appendChild(img);
        art.appendChild(meta);
        projectsList.appendChild(art);
      });
    }

    // Events
    const eventsList = document.getElementById('events-list');
    if (eventsList && Array.isArray(data.events)) {
      eventsList.innerHTML = '';
      data.events.forEach(e => {
        const art = document.createElement('article');
        art.className = 'project-card card';

        const img = document.createElement('img');
        img.src = e.image || '';
        img.alt = e.title || '';
        img.loading = 'lazy';

        const meta = document.createElement('div');
        meta.className = 'project-body';
        const h3 = document.createElement('h3');
        h3.textContent = e.title || '';
        const description = document.createElement('p');
        description.textContent = e.description || '';
        const a = document.createElement('a');
        a.href = e.url || '#';
        a.target = '_blank';
        a.rel = 'noreferrer';
        a.textContent = 'Learn more';

        meta.appendChild(h3);
        meta.appendChild(description);
        meta.appendChild(a);

        art.appendChild(img);
        art.appendChild(meta);
        eventsList.appendChild(art);
      });
    }

    // Links
    const linksGrid = document.getElementById('links-grid');
    if (linksGrid && Array.isArray(data.links)) {
      linksGrid.innerHTML = '';
      data.links.forEach(l => {
        const a = document.createElement('a');
        a.className = 'link-item';
        a.href = l.url || '#';
        a.target = '_blank';
        a.rel = 'noreferrer';
        a.textContent = l.title || l.url || '';
        linksGrid.appendChild(a);
      });
    }

    // after DOM insertion, bind carousel controls
    bindCarouselControls();

  } catch (err) {
    console.error('Error loading site data:', err);
  }
}

function bindCarouselControls() {
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');

    const getScrollAmount = () => {
      const slide = track.querySelector('.carousel-slide');
      const style = slide ? getComputedStyle(slide) : null;
      const gap = style ? parseFloat(getComputedStyle(track).gap || 12) : 12;
      const w = slide ? slide.getBoundingClientRect().width : 320;
      return Math.round(w + gap);
    };

    if (prev) prev.addEventListener('click', () => track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' }));
    if (next) next.addEventListener('click', () => track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' }));
  });
}

// Contact form handling (simple simulated send)
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const original = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = original;
      btn.disabled = false;
      form.reset();
      alert('Message simulated. Replace with your backend when ready.');
    }, 1000);
  });
}

// Set year
function setYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

// Init
window.addEventListener('DOMContentLoaded', () => {
  loadSiteData();
  initContactForm();
  setYear();
});
