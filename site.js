const toTopButton = document.getElementById("to-top");

function toggleToTop() {
  if (window.scrollY > 500) {
    toTopButton.classList.add("visible");
  } else {
    toTopButton.classList.remove("visible");
  }
}

toTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".top-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".top-nav a").forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});

window.addEventListener("scroll", toggleToTop);
toggleToTop();

const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.setAttribute("aria-hidden", "true");
lightbox.innerHTML = `
  <button class="lightbox__close" type="button" aria-label="Close enlarged figure">×</button>
  <img class="lightbox__image" alt="" />
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox__image");
const lightboxClose = lightbox.querySelector(".lightbox__close");

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  lightboxImage.alt = "";
  document.body.style.overflow = "";
}

function openLightbox(image) {
  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

document.querySelectorAll(".media-card img").forEach((image) => {
  image.addEventListener("click", () => openLightbox(image));
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});
