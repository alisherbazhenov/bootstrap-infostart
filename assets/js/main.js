let dropdownBlock = document.querySelector(".dropdown-social-icons");
let listItems = document.querySelectorAll(".item-dropdown");

let menuVisible = false;

dropdownBlock.addEventListener("mouseover", () => {
  if (!menuVisible) {
    listItems.forEach(function (item, index) {
      if (index > 1) {
        item.classList.remove("item-dropdown-close");
      }
    });
    menuVisible = true;
  }
});

dropdownBlock.addEventListener("mouseout", () => {
  if (menuVisible) {
    listItems.forEach(function (item, index) {
      if (index > 1) {
        item.classList.add("item-dropdown-close");
      }
    });
    menuVisible = false;
  }
});
