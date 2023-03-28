const slider = document.querySelectorAll(".slider-inner");
const progressBar = document.querySelectorAll(".prog-bar-inner");
let sliderGrabbed = false;

slider.forEach((x) => {
  x.parentElement.addEventListener("scroll", (e) => {
    progressBar.forEach((y) => {
      if (x.dataset.scroll == y.dataset.progres) {
        y.style.width = `${
          (x.parentElement.scrollLeft /
            (x.parentElement.scrollWidth - x.parentElement.clientWidth)) *
          100
        }%`;
      }
    });
  });
});

slider.forEach((x) => {
  x.addEventListener("mousedown", (e) => {
    sliderGrabbed = true;
    x.style.cursor = "grabbing";
  });
});

slider.forEach((x) => {
  x.addEventListener("mouseup", (e) => {
    sliderGrabbed = false;
    x.style.cursor = "grab";
  });
});

slider.forEach((x) => {
  x.addEventListener("mouseleave", (e) => {
    sliderGrabbed = false;
  });
});

slider.forEach((x) => {
  x.addEventListener("mousemove", (e) => {
    if (sliderGrabbed) {
      x.parentElement.scrollLeft -= e.movementX;
    }
  });
});

slider.forEach((x) => {
  x.addEventListener("wheel", (e) => {
    e.preventDefault();
    x.parentElement.scrollLeft += e.deltaY;
  });
});
