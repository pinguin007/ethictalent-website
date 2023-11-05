const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const closeMenuBtn = document.getElementById("closeMenu");
const body = document.body;

const toggle = function (state) {
  menu.classList.toggle("active", state);
  body.classList.toggle("active", state);
};

if (menuBtn) {
  menuBtn.onclick = function () {
    toggle(true);
  };
  closeMenuBtn.onclick = function () {
    toggle(false);
    if (menuForm) menuForm.classList.remove("active");
  };
}

const openForm = document.getElementById("openForm");
const closeForm = document.getElementById("closeForm");
const menuForm = document.getElementById("menuForm");
if (openForm && closeForm) {
  openForm.onclick = function () {
    menuForm.classList.add("active");
  };
  closeForm.onclick = function () {
    menuForm.classList.remove("active");
  };
}

const header = document.getElementById("header");
if (header)
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 400) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

///
///
///
///WOW JS
// new WOW().init({
//   boxClass: "wow",
// });
