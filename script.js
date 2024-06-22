//Modal

const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal");

const modal = document.querySelector("[data-modal]");
const overlay = document.querySelector("[data-overlay]");

// Counter

let count = 0;

let currentAmount = document.querySelector(".currentAmount");
let addItem = document.querySelector(".b-add");
let removeItem = document.querySelector(".b-remove");

function itemsAdd() {
  count++;
  currentAmount.textContent = count;
}

function itemsRemove() {
  if (count > 0) count--;
  currentAmount.textContent = count;
}

addItem.addEventListener("click", itemsAdd);
removeItem.addEventListener("click", itemsRemove);

//Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Opening modal on click
openButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

//Closing modal on click
closeButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});

// Cart functionality

const openButtonDialog = document.querySelector("[data-open-dialog]");
const closeButtonDialog = document.querySelector("[data-close-dialog");
const dialog = document.querySelector("[data-dialog]");

openButtonDialog.addEventListener("click", () => {
  dialog.show();
});

//Closing modal on click
closeButtonDialog.addEventListener("click", () => {
  dialog.close();
});
