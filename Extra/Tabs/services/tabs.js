const tabButtons = document.querySelectorAll(".tab-button");
const tabPanes = document.querySelectorAll(".tab-pane");

const img = document.querySelector(".poster img");

document.addEventListener("DOMContentLoaded", function () {
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      console.log(this);
      this.classList.add("active");
      tabPanes[index].classList.add("active");
    //   img.style.transform = "translateY(0px)";
    });
  });
});
