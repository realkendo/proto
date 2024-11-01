// turn the next page when next or prev button is clicked
const pageButton = document.querySelectorAll(".nextprev-btn");

pageButton.forEach((el, inde) => {
  el.onClick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);

    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
    } else {
      pageTurn.classList.add("turn");
    }
  };
});
