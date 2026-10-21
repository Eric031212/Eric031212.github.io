// Light page motion: fade-in sections and a few bubbles in the "Beyond research" corner.

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Fade sections in as they scroll into view.
const blocks = document.querySelectorAll(".block");
if ("IntersectionObserver" in window && !reduceMotion) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add("seen"); io.unobserve(e.target); }
    }
  }, { threshold: 0.12 });
  blocks.forEach((b) => { b.classList.add("reveal"); io.observe(b); });
}

// Bubbles drifting up behind the hobby tiles.
const layer = document.querySelector(".playground .bubbles");
if (layer && !reduceMotion) {
  for (let i = 0; i < 14; i++) {
    const b = document.createElement("span");
    const size = 8 + Math.random() * 22;
    b.className = "bubble";
    b.style.width = b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.animationDuration = 7 + Math.random() * 8 + "s";
    b.style.animationDelay = -Math.random() * 12 + "s";
    layer.appendChild(b);
  }
}
