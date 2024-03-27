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

const api =
  "http://api.openweathermap.org/geo/1.0/reverse?lat=59.9342802&lon=30.3350986&limit=1&appid=cb0283d74a6165dfdf6a409c850b68bf";

fetch(api)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (data && data.name) {
      console.log(data);
      document.querySelector(".location").textContent = data.name;
    } else {
      throw new Error("Данные не доступны");
    }
  })
  .catch((error) => {
    console.error("Ошибка получения данных:", error.message);
  });
