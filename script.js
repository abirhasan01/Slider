// @ts-nocheck
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let thumbnails = document.querySelectorAll(".thumbnail .item");
let count = items.length;
let itemActive = 0;

// next
next.addEventListener("click", function () {
  itemActive = itemActive + 1;
  if (itemActive >= count) {
    itemActive = 0;
  }
  showSlider();
});
// prev
prev.addEventListener("click", function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = count - 1;
  }
  showSlider();
});

function showSlider() {
  let itemActiveOld = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOld = document.querySelector(".thumbnail .item.active");
  itemActiveOld.classList.remove("active");
  thumbnailActiveOld.classList.remove("active");
  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");
  clearInterval();
}
// clcik thumbnail
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", function () {
    itemActive = index;
    showSlider();
  });
});
// auto play
setInterval(() => {
  next.click();
}, 5000);
