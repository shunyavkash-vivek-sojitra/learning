// ative tabs
let tabActive = document.querySelectorAll("header nav ul li a");

// form
let input = document.querySelectorAll("input");

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

// setData
const setData = (dataContainer) => {
  localStorage.setItem("User", JSON.stringify(dataContainer));
};
// getData
const getData = () => {
  return JSON.parse(localStorage.getItem("User"));
};

// set tab active
const setTabActive = (e) => {
  tabActive.forEach((tab) => {
    // remove active
    tab.classList.remove("active");
  });

  // add active
  e.target.classList.add("active");
};

// tab active calling
tabActive.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    setTabActive(e);
  });
});

// validate username
const validateUsername = () => {
  // rule
  const userNameRegex = /^(?=.*[a-z])(?=.*[0-9])[a-z0-9]+$/;
  const checkUserName = username.value;
  if (checkUserName === "") {
    usernameWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidUsername.style.opacity = 1;
    invalidUsername.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Username must required.`;
  } else if (checkUserName.length < 6) {
    usernameWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidUsername.style.opacity = 1;
    invalidUsername.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Username must be of 6 characters long.`;
  } else if (!userNameRegex.test(checkUserName)) {
    usernameWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidUsername.style.opacity = 1;
    invalidUsername.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Username must be of numbers and lower characters.`;
  } else {
    usernameWrap.style.border = "1px solid rgb(57, 161, 83)";
    invalidUsername.style.display = "none";
    invalidUsername.innerHTML = ``;
  }
};

// validate email
const validateEmail = () => {
  const checkEmail = email.value;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  if (checkEmail === "") {
    emailWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidEmail.style.opacity = 1;
    invalidEmail.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Email must required.`;
  } else if (!emailRegex.test(checkEmail)) {
    emailWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidEmail.style.opacity = 1;
    invalidEmail.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Email is invalid! Please ckeck your email.`;
  } else {
    emailWrap.style.border = "1px solid rgb(57, 161, 83)";
    invalidEmail.style.display = "none";
    invalidEmail.innerHTML = ``;
  }
};

// validate password
const validatePassword = () => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  // rule
  const checkPassword = password.value;
  if (checkPassword.length < 8) {
    passwordWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidPassword.style.opacity = 1;
    invalidPassword.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password must be of 8 characters long.`;
  } else if (!passwordRegex.test(checkPassword)) {
    passwordWrap.style.border = "1px solid rgb(252, 99, 107)";
    invalidPassword.style.opacity = 1;
    invalidPassword.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character.`;
  } else {
    passwordWrap.style.border = "1px solid rgb(57, 161, 83)";
    invalidPassword.style.display = "none";
    invalidPassword.innerHTML = ``;
  }
};

eyeVisible.addEventListener("click", () => {
  password.type = "password";
  eyeNotVisible.style.opacity = 1;
  eyeNotVisible.style.display = "block";
  eyeVisible.style.opacity = 0;
  eyeVisible.style.display = "none";
});
eyeNotVisible.addEventListener("click", () => {
  password.type = "text";
  eyeNotVisible.style.opacity = 0;
  eyeNotVisible.style.display = "none";
  eyeVisible.style.opacity = 1;
  eyeVisible.style.display = "block";
});

// event calling
// user-wrap
usernameWrap.addEventListener("input", () => {
  validateUsername();
});
// email-wrap
emailWrap.addEventListener("input", () => {
  validateEmail();
});
// password-wrap
passwordWrap.addEventListener("input", () => {
  validatePassword();
});

// btnSubmit
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  validateUsername();
  validateEmail();
  validatePassword();

  let dataStack = getData() || [];
  const userData = {};

  Array.from(input).forEach((element) => {
    if (element.value === "" && userData.value == null) {
      return;
    }
    userData[element.name] = element.value;
  });

  if (Object.keys(userData) == 0) {
    return;
  }
  dataStack.push(userData);
  setData(dataStack);

  console.log("Form submitted successfully!");
});
