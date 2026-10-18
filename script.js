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
