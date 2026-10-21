// Gentle page motion: seamless drifting waves and fade-in sections. No dependencies.

// Build each wave as a repeated smooth curve twice the view width, so the CSS
// drift (translateX by one view width) loops without a seam.
document.querySelectorAll(".waves").forEach((svg) => {
  const [, , width, height] = svg.getAttribute("viewBox").split(" ").map(Number);
  svg.querySelectorAll("path").forEach((path) => {
    const y = Number(path.dataset.y);
    const amp = Number(path.dataset.amp);
    const half = Number(path.dataset.period) / 2;
    let d = `M0 ${y} Q${half / 2} ${y - amp} ${half} ${y}`;
    for (let x = half * 2; x <= width * 2; x += half) d += ` T${x} ${y}`;
    path.setAttribute("d", `${d} V${height} H0Z`);
  });
});

// Fade sections in as they scroll into view.
const blocks = document.querySelectorAll(".block");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add("seen"); io.unobserve(e.target); }
    }
  }, { threshold: 0.12 });
  blocks.forEach((b) => { b.classList.add("reveal"); io.observe(b); });
}
