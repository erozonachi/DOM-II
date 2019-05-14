// Your code goes here
// `mouseover` and `mouseout` listeners on images
document.querySelectorAll(`img`).forEach(img => {
  img.addEventListener(`mouseover`, e => {
    e.stopPropagation();
    e.target.classList.toggle(`toGray`);
  });
  img.addEventListener(`mouseout`, e => {
    e.stopPropagation();
    e.target.classList.toggle(`toGray`);
  });
});
