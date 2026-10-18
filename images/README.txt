<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hillel Bazak: Artist and Illustrator</title>
    <meta
      name="description"
      content="Portfolio of Hillel Bazak — paintings, illustrations, projects, and events."
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header class="site-header">
      <div class="container header-inner">
        <h1 class="site-title">Hillel Bazak: <span>Artist and Illustrator</span></h1>

        <nav class="site-nav" aria-label="Main navigation">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#paintings">Paintings</a>
          <a href="#illustrations">Illustrations</a>
          <a href="#projects">Projects</a>
          <a href="#events">Events</a>
          <a href="#recommendations">Recommendations</a>
          <a href="#links">Links</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <main>
      <section id="hero" class="hero">
        <div class="container hero-inner">
          <div class="hero-copy">
            <p class="eyebrow">Artist and Illustrator</p>
            <h2>Hillel Bazak</h2>
            <p class="hero-sub">Artist and Illustrator</p>
            <p class="hero-lead">
              A portfolio rooted in narrative painting, illustration, texture, and
              visual storytelling. This selection highlights paintings, sketches,
              editorial projects, and recent exhibitions.
            </p>

            <div class="hero-ctas">
              <a class="btn primary" href="#paintings">View Paintings</a>
              <a class="btn secondary" href="#contact">Contact</a>
            </div>
          </div>

          <div class="hero-art">
            <img
              src="images/hero/hero-1.jpg"
              alt="Featured painting"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section id="about" class="section">
        <div class="container split">
          <div class="about-visual">
            <img
              src="images/profile/profile.jpg"
              alt="Artist portrait"
              class="profile-image"
            />
          </div>

          <div class="about-text">
            <p class="section-tag">About</p>
            <h3>About</h3>
            <p>
              Hillel Bazak is an artist and illustrator working between painting,
              illustration, and storytelling. His practice is driven by visual
              narratives, tactile surfaces, and a love for expressive color and
              mark-making.
            </p>
            <p>
              Through painting and illustration, he creates work that blends
              character, atmosphere, and emotional core. The portfolio below
              highlights paintings, drawings, projects, and events.
            </p>
          </div>
        </div>
      </section>

      <section id="paintings" class="section alt">
        <div class="container">
          <div class="section-head">
            <p class="section-tag">Paintings</p>
            <h3>Paintings</h3>
          </div>

          <div class="carousel" id="paintings-carousel" data-carousel>
            <button class="carousel-btn carousel-prev" type="button" aria-label="Previous image">
              ‹
            </button>
            <div class="carousel-track" role="list"></div>
            <button class="carousel-btn carousel-next" type="button" aria-label="Next image">
              ›
            </button>
          </div>
        </div>
      </section>

      <section id="illustrations" class="section">
        <div class="container">
          <div class="section-head">
            <p class="section-tag">Illustrations</p>
            <h3>Illustrations</h3>
          </div>

          <div class="illustration-stack">
            <div class="carousel small" id="sketches-carousel" data-carousel>
              <h4>Sketches & Drawings</h4>
              <button class="carousel-btn carousel-prev" type="button" aria-label="Previous sketch">
                ‹
              </button>
              <div class="carousel-track" role="list"></div>
              <button class="carousel-btn carousel-next" type="button" aria-label="Next sketch">
                ›
              </button>
            </div>

            <div class="carousel small" id="colored-carousel" data-carousel>
              <h4>Color & Digital Illustrations</h4>
              <button class="carousel-btn carousel-prev" type="button" aria-label="Previous illustration">
                ‹
              </button>
              <div class="carousel-track" role="list"></div>
              <button class="carousel-btn carousel-next" type="button" aria-label="Next illustration">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" class="section alt">
        <div class="container">
          <div class="section-head">
            <p class="section-tag">Projects</p>
            <h3>Projects</h3>
          </div>
          <div id="projects-list" class="project-grid"></div>
        </div>
      </section>

      <section id="events" class="section">
        <div class="container">
          <div class="section-head">
            <p class="section-tag">Recent Events</p>
            <h3>Recent Events</h3>
          </div>
          <div id="events-list" class="project-grid"></div>
        </div>
      </section>

      <section id="recommendations" class="section alt">
        <div class="container">
          <div class="section-head">
            <p class="section-tag">Recommendations</p>
            <h3>Recommendations</h3>
          </div>

          <div id="recommendations-carousel" class="carousel testimonial-carousel" data-carousel>
            <button class="carousel-btn carousel-prev" type="button" aria-label="Previous recommendation">
              ‹
            </button>
            <div class="carousel-track" role="list"></div>
            <button class="carousel-btn carousel-next" type="button" aria-label="Next recommendation">
              ›
            </button>
          </div>
        </div>
      </section>

      <section id="links" class="section">
        <div class="container">
          <div class="section-head">
            <p class="section-tag">Links</p>
            <h3>Links</h3>
          </div>

          <div id="links-grid" class="links-grid"></div>
        </div>
      </section>

      <section id="contact" class="section alt">
        <div class="container contact-wrap">
          <div class="contact-copy">
            <p class="section-tag">Contact</p>
            <h3>Contact</h3>
            <p>Email: <a href="mailto:hillel@example.com">hillel@example.com</a></p>
            <p>Instagram: <a href="https://instagram.com/yourhandle" target="_blank" rel="noreferrer">@yourhandle</a></p>
          </div>

          <form id="contact-form" class="contact-form">
            <label>
              Name
              <input type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea rows="5" placeholder="Tell me about your project"></textarea>
            </label>
            <button type="submit" class="btn primary">Send</button>
          </form>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <p>© <span id="year"></span> Hillel Bazak</p>
        <a href="#hero">Back to top</a>
      </div>
    </footer>

    <script src="script.js"></script>
  </body>
</html>
:root {
  --bg: #f6efe7;
  --paper: #f9f4ee;
  --card: #fffdfb;
  --ink: #2d241e;
  --muted: #6d6259;
  --line: rgba(43, 36, 31, 0.08);
  --terra: #c57a54;
  --olive: #5d7268;
  --sand: #e9dcc9;
  --shadow: 0 18px 42px rgba(41, 31, 25, 0.08);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #fbf7f2 0%, var(--paper) 100%);
  color: var(--ink);
  line-height: 1.6;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 82px 0;
}

.section.alt {
  background: rgba(255,255,255,0.18);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(249, 244, 238, 0.9);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--line);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 18px;
}

.site-title {
  margin: 0;
  font-family: "Cormorant Garamond", serif;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.site-title span {
  color: var(--muted);
  font-weight: 500;
}

.site-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 16px;
}

.site-nav a {
  color: var(--muted);
  font-size: 0.92rem;
  font-weight: 600;
}

.eyebrow,
.section-tag {
  display: inline-block;
  margin: 0 0 14px;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--olive);
  font-weight: 700;
}

.hero {
  padding: 52px 0 56px;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 34px;
  align-items: center;
}

.hero-copy h2 {
  margin: 0 0 8px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(3rem, 6vw, 5.2rem);
  line-height: 0.95;
  letter-spacing: -0.04em;
}

.hero-sub {
  margin: 0 0 10px;
  color: var(--olive);
  font-weight: 700;
  font-size: 1.04rem;
}

.hero-lead {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 1.8;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--ink);
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn.primary {
  background: linear-gradient(90deg, var(--terra), #b56b49);
  border: none;
  color: white;
  box-shadow: 0 18px 40px rgba(197, 122, 84, 0.18);
}

.hero-art {
  border-radius: 22px;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  background: #f0e4d5;
}

.hero-art img {
  width: 100%;
  height: 620px;
  object-fit: cover;
}

.split {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 30px;
  align-items: center;
}

.about-visual {
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.profile-image {
  width: 100%;
  height: 440px;
  object-fit: cover;
  background: #efe7df;
}

.about-text h3,
.section-head h3 {
  margin: 0 0 10px;
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1;
  letter-spacing: -0.04em;
}

.about-text p {
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.9;
}

.section-head {
  margin-bottom: 20px;
}

.carousel {
  position: relative;
  margin-top: 22px;
}

.carousel-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 8px 0 10px;
  scrollbar-width: none;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.carousel-slide {
  flex: 0 0 320px;
  border-radius: 16px;
  overflow: hidden;
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: 0 14px 30px rgba(41, 31, 25, 0.06);
}

.carousel-slide img {
  width: 100%;
  height: 420px;
  object-fit: cover;
}

.carousel.small .carousel-slide {
  flex-basis: 260px;
}

.carousel.small .carousel-slide img {
  height: 310px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 50%;
  background: rgba(255,255,255,0.9);
  color: var(--ink);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
  z-index: 2;
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.illustration-stack {
  display: grid;
  gap: 30px;
}

.illustration-stack h4 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.project-card {
  display: grid;
  grid-template-columns: 180px 1fr;
  gap: 16px;
  padding: 14px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(41, 31, 25, 0.04);
}

.project-card img {
  width: 180px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
}

.project-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.project-type {
  display: inline-block;
  margin-bottom: 8px;
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--olive);
  font-weight: 700;
}

.project-body h3 {
  margin: 0 0 8px;
  font-size: 1.35rem;
}

.project-body p {
  margin: 0 0 12px;
  color: var(--muted);
  line-height: 1.7;
}

.project-body a {
  color: var(--ink);
  font-weight: 700;
}

.testimonial-carousel {
  overflow: visible;
}

.testimonial {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  min-width: 420px;
  padding: 14px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 16px;
}

.testimonial .avatar {
  width: 74px;
  height: 74px;
  border-radius: 50%;
  overflow: hidden;
  background: #efe5d8;
  border: 1px solid var(--line);
  flex-shrink: 0;
}

.testimonial .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.testimonial .quote {
  flex: 1;
  padding: 4px 0;
}

.testimonial .quote p {
  margin: 0 0 8px;
  color: var(--muted);
  line-height: 1.8;
}

.testimonial .quote strong {
  color: var(--ink);
}

.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.link-item {
  display: block;
  padding: 18px 16px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  color: var(--ink);
  font-weight: 700;
  box-shadow: 0 8px 18px rgba(41, 31, 25, 0.03);
}

.contact-wrap {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 28px;
  align-items: start;
}

.contact-copy p {
  color: var(--muted);
  line-height: 1.8;
}

.contact-copy a {
  color: var(--olive);
  font-weight: 700;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 12px 24px rgba(41, 31, 25, 0.04);
}

.contact-form label {
  display: block;
  font-weight: 700;
  color: var(--ink);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  margin-top: 8px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: white;
  color: var(--ink);
  font: inherit;
}

.site-footer {
  padding: 20px 0 30px;
  border-top: 1px solid var(--line);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: var(--muted);
}

@media (max-width: 900px) {
  .hero-inner,
  .split,
  .project-grid,
  .contact-wrap {
    grid-template-columns: 1fr;
  }

  .site-nav {
    display: none;
  }
}

@media (max-width: 560px) {
  .project-card {
    grid-template-columns: 1fr;
  }

  .project-card img {
    width: 100%;
    height: 200px;
  }

  .testimonial {
    min-width: 260px;
  }
}
async function loadSiteData() {
  try {
    const response = await fetch("data/site-data.json");
    if (!response.ok) throw new Error("Could not load data/site-data.json");

    const data = await response.json();

    const createImageSlide = (src, alt = "") => {
      const slide = document.createElement("div");
      slide.className = "carousel-slide";
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      img.loading = "lazy";
      slide.appendChild(img);
      return slide;
    };

    const addImageSlides = (containerSelector, items) => {
      const container = document.querySelector(containerSelector);
      if (!container || !Array.isArray(items)) return;
      container.innerHTML = "";
      items.forEach(item => {
        container.appendChild(createImageSlide(item.src, item.alt || item.title || ""));
      });
    };

    addImageSlides("#paintings-carousel .carousel-track", data.paintings || []);
    addImageSlides("#sketches-carousel .carousel-track", data.sketches || []);
    addImageSlides("#colored-carousel .carousel-track", data.colored || []);

    const buildProjectCard = (item, typeLabel = "") => {
      const card = document.createElement("article");
      card.className = "project-card";

      const img = document.createElement("img");
      img.src = item.image || "";
      img.alt = item.title || "";
      img.loading = "lazy";

      const content = document.createElement("div");
      content.className = "project-body";

      const type = document.createElement("span");
      type.className = "project-type";
      type.textContent = typeLabel || "Project";

      const title = document.createElement("h3");
      title.textContent = item.title || "";

      const desc = document.createElement("p");
      desc.textContent = item.description || "";

      const link = document.createElement("a");
      link.href = item.url || "#";
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = "View";

      content.appendChild(type);
      content.appendChild(title);
      content.appendChild(desc);
      content.appendChild(link);

      card.appendChild(img);
      card.appendChild(content);
      return card;
    };

    const projectsList = document.getElementById("projects-list");
    if (projectsList && Array.isArray(data.projects)) {
      projectsList.innerHTML = "";
      data.projects.forEach(item => {
        projectsList.appendChild(buildProjectCard(item, "Project"));
      });
    }

    const eventsList = document.getElementById("events-list");
    if (eventsList && Array.isArray(data.events)) {
      eventsList.innerHTML = "";
      data.events.forEach(item => {
        eventsList.appendChild(buildProjectCard(item, "Event"));
      });
    }

    const recommendationTrack = document.querySelector("#recommendations-carousel .carousel-track");
    if (recommendationTrack && Array.isArray(data.testimonials)) {
      recommendationTrack.innerHTML = "";
      data.testimonials.forEach(item => {
        const wrapper = document.createElement("div");
        wrapper.className = "testimonial carousel-slide";

        const avatar = document.createElement("div");
        avatar.className = "avatar";
        if (item.image) {
          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.name || "Recommender";
          img.loading = "lazy";
          avatar.appendChild(img);
        }

        const quote = document.createElement("div");
        quote.className = "quote";
        const p = document.createElement("p");
        p.textContent = `"${item.text || ""}"`;
        const strong = document.createElement("strong");
        strong.textContent = item.name || "";
        quote.appendChild(p);
        quote.appendChild(strong);

        wrapper.appendChild(avatar);
        wrapper.appendChild(quote);
        recommendationTrack.appendChild(wrapper);
      });
    }

    const linksGrid = document.getElementById("links-grid");
    if (linksGrid && Array.isArray(data.links)) {
      linksGrid.innerHTML = "";
      data.links.forEach(item => {
        const link = document.createElement("a");
        link.className = "link-item";
        link.href = item.url || "#";
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = item.title || "";
        linksGrid.appendChild(link);
      });
    }

    const year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    bindCarouselControls();
    bindContactForm();

  } catch (error) {
    console.error("Site data failed to load:", error);
  }
}

function bindCarouselControls() {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const prev = carousel.querySelector(".carousel-prev");
    const next = carousel.querySelector(".carousel-next");

    if (!track || !prev || !next) return;

    const getScrollAmount = () => {
      const firstSlide = track.querySelector(".carousel-slide");
      const gap = 16;
      return firstSlide ? firstSlide.getBoundingClientRect().width + gap : 320;
    };

    prev.addEventListener("click", () =>
      track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" })
    );

    next.addEventListener("click", () =>
      track.scrollBy({ left: getScrollAmount(), behavior: "smooth" })
    );
  });
}

function bindContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = form.querySelector("button");
    const original = button.textContent;

    button.textContent = "Sent";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = original;
      button.disabled = false;
      form.reset();
    }, 1200);
  });
}

window.addEventListener("DOMContentLoaded", loadSiteData);
{
  "paintings": [
    { "src": "images/paintings/painting-01.jpg", "title": "Painting 01", "alt": "Painting 01" },
    { "src": "images/paintings/painting-02.jpg", "title": "Painting 02", "alt": "Painting 02" },
    { "src": "images/paintings/painting-03.jpg", "title": "Painting 03", "alt": "Painting 03" },
    { "src": "images/paintings/painting-04.jpg", "title": "Painting 04", "alt": "Painting 04" },
    { "src": "images/paintings/painting-05.jpg", "title": "Painting 05", "alt": "Painting 05" }
  ],
  "sketches": [
    { "src": "images/illustrations/sketch-01.jpg", "title": "Sketch 01", "alt": "Sketch 01" },
    { "src": "images/illustrations/sketch-02.jpg", "title": "Sketch 02", "alt": "Sketch 02" },
    { "src": "images/illustrations/sketch-03.jpg", "title": "Sketch 03", "alt": "Sketch 03" },
    { "src": "images/illustrations/sketch-04.jpg", "title": "Sketch 04", "alt": "Sketch 04" }
  ],
  "colored": [
    { "src": "images/illustrations/colored-01.jpg", "title": "Colored 01", "alt": "Colored 01" },
    { "src": "images/illustrations/colored-02.jpg", "title": "Colored 02", "alt": "Colored 02" },
    { "src": "images/illustrations/colored-03.jpg", "title": "Colored 03", "alt": "Colored 03" },
    { "src": "images/illustrations/colored-04.jpg", "title": "Colored 04", "alt": "Colored 04" }
  ],
  "projects": [
    {
      "title": "Project One",
      "description": "A visual narrative project exploring texture, atmosphere, and character through layered painting and illustration.",
      "image": "images/projects/project-01.jpg",
      "url": "https://example.com/project-1"
    },
    {
      "title": "Project Two",
      "description": "A watercolor-led illustration series developed for storytelling and editorial work.",
      "image": "images/projects/project-02.jpg",
      "url": "https://example.com/project-2"
    }
  ],
  "events": [
    {
      "title": "Exhibition A",
      "description": "A recent exhibition featuring selected works from the current collection and studies.",
      "image": "images/events/event-01.jpg",
      "url": "https://example.com/event-1"
    },
    {
      "title": "Talk B",
      "description": "An artist talk and panel discussion focused on visual storytelling and process.",
      "image": "images/events/event-02.jpg",
      "url": "https://example.com/event-2"
    }
  ],
  "testimonials": [
    {
      "name": "Collector A",
      "text": "The work carries atmosphere and emotion in a way that feels intimate, vivid, and unforgettable.",
      "image": "images/testimonials/person-01.jpg"
    },
    {
      "name": "Curator B",
      "text": "A strong visual language rooted in narrative, craft, and clarity of expression.",
      "image": "images/testimonials/person-02.jpg"
    }
  ],
  "links": [
    { "title": "Press: Art Feature", "url": "https://example.com/press" },
    { "title": "Interview: Studio Talk", "url": "https://example.com/interview" },
    { "title": "Exhibition Review", "url": "https://example.com/review" }
  ]
}
