// form
let input = document.querySelector("input");

// input wrap
let inputWrap = document.querySelector(".input-wrap");

// username
let usernameWrap = document.querySelector(".username-wrap");
let username = document.querySelector("#username");
let invalidUsername = document.querySelector("#invalidUsername");

// email
let emailWrap = document.querySelector(".email-wrap");
let email = document.querySelector("#email");
let invalidEmail = document.querySelector("#invalidEmail");

// password
let passwordWrap = document.querySelector(".password-wrap");
let password = document.querySelector("#password");
let invalidPassword = document.querySelector("#invalidPassword");
let eyeVisible = document.querySelector(".eyeVisible");
let eyeNotVisible = document.querySelector(".eyeNotVisible");

// btnSubmit
let btnSubmit = document.querySelector("#btnSubmit");

// validate username
const validateUsername = () => {
  // rule
  const checkUserName = username.value;
  if (checkUserName.length < 6) {
    usernameWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidUsername.style.opacity = 1;
    invalidUsername.innerHTML = `* '${checkUserName}' must be of six characters long.`;
  } else if (checkUserName.length >= 6) {
    usernameWrap.style.border = "1px solid rgb(57, 161, 83)";
    invalidUsername.style.opacity = 1;
    invalidUsername.innerHTML = ``;
  }
};

// validate password
const validatePassword = () => {
  // rule
  const checkPassword = password.value;
  if (checkPassword.length < 8) {
    passwordWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidPassword.style.opacity = 1;
    invalidPassword.innerHTML = `* Password must be of eight characters long.`;
  } else if (checkPassword.length > 8) {
    passwordWrap.style.border = "1px solid rgb(57, 161, 83)";
    invalidPassword.style.opacity = 1;
    invalidPassword.innerHTML = ``;
  }
};

eyeVisible.addEventListener("click", () => {});
eyeNotVisible.addEventListener("click", () => {
  password.type = "text";
  eyeNotVisible.style.opacity = 0;
  eyeVisible.style.opacity = 1;
  console.log(password.type);
});

// event calling
// user-wrap
usernameWrap.addEventListener("input", () => {
  validateUsername();
});
// email-wrap
emailWrap.addEventListener("input", () => {});
// password-wrap
passwordWrap.addEventListener("input", () => {
  validatePassword();
});

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  validateUsername();
  validatePassword();
});
