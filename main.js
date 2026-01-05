const emailForm = document.getElementById("email-form-id");
const main = document.getElementById("main");
const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modal-btn")
const userEmail = document.getElementById("user-email")

const getValidData = (event) => {
  const isValid = event.target.checkValidity();
  if (isValid) {
    let data = Object.fromEntries(new FormData(event.target))
    return data;
  }
  else {
    throw new Error("Email Address not accepted")
  }
}

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const email = getValidData(event);
    userEmail.textContent = email['email-address'];
    main.classList.add("hidden");
    modal.classList.remove("hidden");
  }
  catch(e) {
    console.error(e);
  }
})

modalBtn.addEventListener("click", (event) => {
  event.preventDefault();
  main.classList.remove("hidden");
  modal.classList.add("hidden");
})