import KeenSlider from "keen-slider";

export const initTestimonialSlider = () => {
  const animation = { duration: 75000, easing: (t) => t };
  let isHovering = false;

  var marqueeSlider = new KeenSlider("#testimonial", {
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
  const sliderElement = document.querySelector("#testimonial");
  if (sliderElement) {
    sliderElement.addEventListener("mouseenter", () => {
      isHovering = true;
      // Stop current animation
      marqueeSlider.animator.stop();
    });

    sliderElement.addEventListener("mouseleave", () => {
      isHovering = false;
      marqueeSlider.moveToIdx(
        marqueeSlider.track.details.abs + 5,
        true,
        animation
      );
    });
  }
};
