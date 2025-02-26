const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const btnRemove = document.querySelector("#btnRemove");

// ================================================ Debounce
const deBounce = (func, delay) => {
  let timeout;

  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const afterFunc = () => {
  alert("Content has been changed.");
};

const funcCalled = deBounce(afterFunc, 1500);

// ================================================ Mutation Observer
const callback = (mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      alert("First child has been removed.");
    } else if (mutation.type === "characterData") {
      funcCalled();
    }
  });
};

const observer = new MutationObserver(callback);

observer.observe(parent, {
  childList: true,
  subtree: true,
  characterData: true,
});

// ================================================ Remove Button
btnRemove.addEventListener("click", () => {
  console.log(parent.children[0]);
  if (parent.children.length != 0) {
    if (parent.children[0].textContent === "No Data Found!") {
      return;
    }
    console.log(parent.children.length);
    parent.children[0].remove();
  }

  if (parent.children.length === 0) {
    const nodataNode = document.createElement("div");
    nodataNode.textContent = "No Data Found!";
    nodataNode.style = "min-width: 400px";
    parent.appendChild(nodataNode);
    console.log("nodata");
  }
});
