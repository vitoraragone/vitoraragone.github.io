const cursor = document.querySelector(".cursor");
const cursorOutter = document.querySelector(".cursor-outter");

document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
  cursorOutter.style.left = x + "px";
  cursorOutter.style.top = y + "px";
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
