const tabButtons = document.querySelectorAll(".tab-button");
const tabPanes = document.querySelectorAll(".tab-pane");

document.addEventListener("DOMContentLoaded", function () {
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanes.forEach((pane) => {
        pane.classList.remove("active");

        // Default image
        const img = pane.querySelector("img");
        if (img) {
          img.style.transform = "translateY(500px)";
          img.style.opacity = "0";
        }

        // Default title
        const title = pane.querySelector("h2");
        console.log(pane);
        if (title) {
          title.style.transform = "translateX(250px)";
          title.style.opacity = "0";
        }

        // Default cta
        const cta = pane.querySelector("a");
        console.log(pane);
        if (cta) {
          cta.style.bottom = "-440px";
          cta.style.opacity = "0";
        }
      });

      this.classList.add("active");
      tabPanes[index].classList.add("active");

      // Image transition
      const activeImg = tabPanes[index].querySelector("img");
      if (activeImg) {
        setTimeout(() => {
          activeImg.style.transform = "translateY(0px)";
          activeImg.style.opacity = "1";
        }, 50);
      }

      // Title transition
      const activeTitle = tabPanes[index].querySelector("h2");
      if (activeTitle) {
        setTimeout(() => {
          activeTitle.style.transform = "translateX(0px)";
          activeTitle.style.opacity = "1";
        }, 50);
      }

      // Cta transition
      const activeCta = tabPanes[index].querySelector("a");
      if (activeCta) {
        setTimeout(() => {
          activeCta.style.bottom = "40px";
          activeCta.style.opacity = "1";
        }, 50);
      }
    });
  });
});
