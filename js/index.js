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
  // dbclick event listener
  img.addEventListener(`dbclick`, e => {
    e.stopPropagation();
    e.target.classList.toggle(`blur`);
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

// click event listener
document.querySelectorAll(`nav > a`).forEach(a => {
  a.addEventListener(`click`, e => {
    e.preventDefault();
  });
});

// focus event listener
document.querySelectorAll(`nav > a`).forEach(a => {
  a.addEventListener(`focus`, e => {
    a.classList.add(`show-border`);
    setTimeout(() => a.classList.remove(`show-border`), 500);
  });
});

// load event listener
window.addEventListener(`load`, e => {
  let size = 0;
  let unfoldPage = setInterval(() => {
    size++;
    document.body.style.width = `${size}%`;
    if (size >= 100) {
      clearInterval(unfoldPage);
    }
  }, 20)
})

// scroll event listener
window.addEventListener(`scroll`, e => {
  if (window.pageYOffset > 0) {
    document.querySelector(`.to-top`).classList.remove(`hide`);
    document.querySelector(`.to-top`).classList.add(`show`);
  } else {
    document.querySelector(`.to-top`).classList.remove(`show`);
    document.querySelector(`.to-top`).classList.add(`hide`);
  }
})

// drag event listener
document.querySelector(`.to-top`).addEventListener(`drag`, e => {
  document.querySelector(`.to-top`).textContent = `v`;
})

// dragend event listener
document.querySelector(`.to-top`).addEventListener(`dragend`, e => {
  document.querySelector(`.to-top`).textContent = `^`;
})

// wheel event listener
function zoom(e) {
  e.preventDefault();

  if (e.deltaY < 0) {
    // Zoom in
    scale *= e.deltaY * -1.2;
  }
  else {
    // Zoom out
    scale /= e.deltaY * 1.2;
  }

  // Restrict scale
  scale = Math.min(Math.max(.125, scale), 1.2);

  // Apply scale transform
  funBus.style.transform = `scale(${scale})`;
}

let scale = 1;
const funBus = document.querySelector('#funBus');
funBus.addEventListener(`wheel`, zoom);
