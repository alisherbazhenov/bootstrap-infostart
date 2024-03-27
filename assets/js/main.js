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

// const api =
//   "http://api.openweathermap.org/geo/1.0/reverse?lat=59.9342802&lon=30.3350986&limit=1&appid=cb0283d74a6165dfdf6a409c850b68bf";

// fetch(api)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     document.querySelector(".locaton").textContent = data.name;
//   })
//   .catch(() => {});
