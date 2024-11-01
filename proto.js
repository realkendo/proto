// Turn the next page when next or prev button is clicked
const pageButton = document.querySelectorAll(".nextprev-btn");

pageButton.forEach((el) => {
  el.onclick = () => {
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);

    // Toggle the 'turn' class to show or hide the page
    pageTurn.classList.toggle("turn");
  };
});
