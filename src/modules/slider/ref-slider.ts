import KeenSlider from "keen-slider";

export const initReferenceSlider = () => {
  const animation = { duration: 75000, easing: (t) => t };
  let isHovering = false;

  var refSlider = new KeenSlider("#ref-slider", {
    loop: true,
    renderMode: "performance",
    drag: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 16,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      if (!isHovering) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
    animationEnded(s) {
      if (!isHovering) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      }
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(max-width: 500px)": {
        slides: {
          perView: 1,
        },
      },
    },
  });

  // Add hover listeners directly to the slider element
  const sliderElement = document.querySelector("#ref-slider");
  if (sliderElement) {
    sliderElement.addEventListener("mouseenter", () => {
      isHovering = true;
      // Stop current animation
      refSlider.animator.stop();
    });

    sliderElement.addEventListener("mouseleave", () => {
      isHovering = false;
      refSlider.moveToIdx(refSlider.track.details.abs + 5, true, animation);
    });
  }
};
