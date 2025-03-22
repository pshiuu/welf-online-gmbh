import KeenSlider from "keen-slider";

export const initFotoBeispielSlider = (animationSpeed = 10000) => {
  // Select all elements with either class .keen-slider.foto-beispiel or .keen-slider.beispiel
  document
    .querySelectorAll(".keen-slider.beispiel")
    .forEach((sliderElement, index) => {
      // Initialize Keen Slider with proper configuration and autoplay
      const fotoBeispielSlider = new KeenSlider(sliderElement as HTMLElement, {
        loop: true,
        renderMode: "performance",
        drag: true,
        mode: "free",
        rtl: index % 2 !== 0, // Even indices (0, 2, 4...) get rtl=false, odd indices get rtl=true
        slides: {
          perView: "auto",
          spacing: 16,
        },
        breakpoints: {
          "(max-width: 850px)": {
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
        // Add autoplay animation
        created(s) {
          s.moveToIdx(s.track.details.abs + 1, true, {
            duration: animationSpeed,
          });
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 1, true, {
            duration: animationSpeed,
          });
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 1, true, {
            duration: animationSpeed,
          });
        },
      });
    });
};
