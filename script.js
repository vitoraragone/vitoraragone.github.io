const cursor = document.querySelector(".cursor");
const cursorOutter = document.querySelector(".cursor-outter");

let mouseX = 0,
  mouseY = 0;
let ticking = false;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;

  if (!ticking) {
    requestAnimationFrame(() => {
      // como o CSS já centraliza com -50%, aqui passamos a posição crua
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      cursorOutter.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
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
  });

  link.addEventListener("mouseout", () => {
    cursor.style.width = "30px";
    cursor.style.height = "30px";
    cursorOutter.style.width = "30px";
    cursorOutter.style.height = "30px";
  });
});

const firstName = document.querySelector("#name");
const surename = document.querySelector("#surename");

firstName.addEventListener("mouseover", () => {
  firstName.classList.add("glitch");
  cursor.style.width = "100px";
  cursor.style.height = "100px";
  cursorOutter.style.width = "100px";
  cursorOutter.style.height = "100px";
});

firstName.addEventListener("mouseout", () => {
  firstName.classList.remove("glitch");
  cursor.style.width = "30px";
  cursor.style.height = "30px";
  cursorOutter.style.width = "30px";
  cursorOutter.style.height = "30px";
});

surename.addEventListener("mouseover", () => {
  surename.classList.add("glitch");
  cursor.style.width = "100px";
  cursor.style.height = "100px";
  cursorOutter.style.width = "100px";
  cursorOutter.style.height = "100px";
});

surename.addEventListener("mouseout", () => {
  surename.classList.remove("glitch");
  cursor.style.width = "30px";
  cursor.style.height = "30px";
  cursorOutter.style.width = "30px";
  cursorOutter.style.height = "30px";
});
