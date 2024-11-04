// functionality for clicking next & prev button clicks
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el,index) => {
  el.onclick = () => {
    console.log(el + " clicked");
  }
});