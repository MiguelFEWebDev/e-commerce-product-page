const openButton = document.querySelector("[data-open-modal]");
const closeButton = document.querySelector("[data-close-modal");
const modal = document.querySelector("[data-modal]");
const overlay = document.querySelector("[data-overlay]");

openButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
});
