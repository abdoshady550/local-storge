let menu = document.querySelectorAll("li");
menu.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.li.dataset.color);
  });
});
