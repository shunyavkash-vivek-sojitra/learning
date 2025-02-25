const btnToggle = document.querySelector("#btn-toggle");

let darkMode = localStorage.getItem("darkMode");

const darkModeOn = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkMode", "enabled");
};

const darkModeOff = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enabled") {
  darkModeOn();
}

btnToggle.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    darkModeOn();
  } else {
    darkModeOff();
  }
});
