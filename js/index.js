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

// `keydown` listener on the body
document.body.addEventListener(`keydown`, e => {
  e.stopPropagation();
  document.body.classList.toggle(`pageLook`);
});

// `resize` event listener on the window
window.addEventListener(`resize`, e => {
  e.stopPropagation();
  if (window.innerWidth <= 950) {
    document.body.classList.remove(`pageLook`);
    document.body.classList.add(`awesomeFont`);
  } else {
    document.body.classList.remove(`awesomeFont`);
  }
});
