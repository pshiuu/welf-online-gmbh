import KeenSlider from "keen-slider";

export const initMarquee = () => {
  const animation = { duration: 75000, easing: (t) => t };

  var marqueeSlider = new KeenSlider("#marquee", {
    loop: true,
    renderMode: "performance",
    drag: false,
    mode: "free",

    slides: {
      perView: 5,
      spacing: 16,
    },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 2.5,
          spacing: 16,
        },
      },
      "(max-width: 500px)": {
        slides: {
          perView: 1.5,
          spacing: 16,
        },
      },
    },
  });
};
