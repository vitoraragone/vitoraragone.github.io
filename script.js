const cursor = document.querySelector(".cursor");
const cursorOutter = document.querySelector(".cursor-outter");
const cursorFixed = document.querySelector(".cursor-fixed");

let mouseX = 0,
  mouseY = 0;
let ticking = false;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;

  if (!ticking) {
    requestAnimationFrame(() => {
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      cursorOutter.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      cursorFixed.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      ticking = false;
    });
    ticking = true;
  }
});

const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursor.style.width = "50px";
    cursor.style.height = "50px";
    cursorOutter.style.width = "50px";
    cursorOutter.style.height = "50px";
    cursorFixed.style.width = "50px";
    cursorFixed.style.height = "50px";
  });

  link.addEventListener("mouseout", () => {
    cursor.style.width = "30px";
    cursor.style.height = "30px";
    cursorOutter.style.width = "30px";
    cursorOutter.style.height = "30px";
    cursorFixed.style.width = "30px";
    cursorFixed.style.height = "30px";
  });
});
