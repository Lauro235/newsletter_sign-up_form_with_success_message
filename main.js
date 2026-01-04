const emailForm = document.getElementById("email-form-id");
const main = document.getElementById("main");
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modal-btn")

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let isValid = event.target.checkValidity();
  if (isValid) {
    modal.classList.remove("hidden")
    main.classList.add("hidden")
  }
})

modalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  main.classList.remove("hidden");
  modal.classList.add("hidden");
})