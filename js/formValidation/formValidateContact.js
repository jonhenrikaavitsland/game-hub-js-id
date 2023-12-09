const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const eMailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

const firstNameErrorCheck = document.querySelector(
  ".first-name-error .fa-square-check"
);
const firstNameErrorText = document.querySelector(
  ".first-name-error .text-error"
);

const lastNameErrorCheck = document.querySelector(
  ".last-name-error .fa-square-check"
);
const lastNameErrorText = document.querySelector(
  ".last-name-error .text-error"
);

const emailErrorCheck = document.querySelector(".email-error .fa-square-check");
const emailErrorText = document.querySelector(".email-error .text-error");

const phoneErrorCheck = document.querySelector(".phone-error .fa-square-check");
const phoneErrorText = document.querySelector(".phone-error .text-error");

export function validateForm() {
  let validState = true;

  // first name
  if (firstNameInput.value.trim() === "") {
    firstNameErrorText.classList.remove("hidden");
    firstNameErrorCheck.style.display = "none";
    firstNameErrorText.textContent = "Please enter your first name!";
    validState = false;
  } else {
    firstNameErrorText.classList.add("hidden");
    firstNameErrorCheck.style.display = "block";
  }

  if (lastNameInput.value.trim() === "") {
    lastNameErrorText.classList.remove("hidden");
    lastNameErrorCheck.style.display = "none";
    lastNameErrorText.textContent = "Please enter your last name!";
    validState = false;
  } else {
    lastNameErrorText.classList.add("hidden");
    lastNameErrorCheck.style.display = "block";
  }

  if (eMailInput.value.trim() === "") {
    emailErrorText.classList.remove("hidden");
    emailErrorText.textContent = "Please enter your email...";
    emailErrorText.style.color = "var(--rating-12-16)";
    emailErrorCheck.style.display = "none";
    validState = false;
  } else {
    const emailRegex = /^\S+@\S+\.\S{2,}$/;
    if (!emailRegex.test(eMailInput.value.trim())) {
      emailErrorText.classList.remove("hidden");
      emailErrorText.textContent = "Please enter a valid email address!";
      emailErrorText.style.color = "var(--rating18)";
      emailErrorCheck.style.display = "none";
      validState = false;
    } else {
      emailErrorText.textContent = "";
      emailErrorText.classList.add("hidden");
      emailErrorCheck.style.display = "block";
    }
  }

  if (phoneInput.value.trim() === "") {
    phoneErrorCheck.style.display = "none";
    phoneErrorText.classList.remove("hidden");
    phoneErrorText.textContent = "";
  } else {
    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
      phoneErrorCheck.style.display = "none";
      phoneErrorText.classList.remove("hidden");
      phoneErrorText.textContent =
        "Phone number must be a valid 8 digit number";
    } else {
      phoneErrorText.textContent = "";
      phoneErrorText.classList.add("hidden");
      phoneErrorCheck.style.display = "block";
    }
  }

  const btn = document.querySelector(".cta-contact");
  const form = document.querySelector("form");
  btn.addEventListener("click", formSubmit);

  function formSubmit() {
    if (validState) {
      form.submit();
    }
  }
}