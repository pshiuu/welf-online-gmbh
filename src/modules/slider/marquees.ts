import KeenSlider from "keen-slider";

export const initMarquee = () => {
  const animation = { duration: 75000, easing: (t) => t };

  var marqueeSlider = new KeenSlider("#marquee", {
    loop: true,
    renderMode: "performance",
    drag: false,
    mode: "free",

    slides: {
      perView: 10,
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
      "(max-width: 1750px)": {
        slides: {
          perView: 8,
          spacing: 16,
        },
      },
      "(max-width: 1500px)": {
        slides: {
          perView: 7,
          spacing: 16,
        },
      },
      "(max-width: 1000px)": {
        slides: {
          perView: 4,
          spacing: 16,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
      "(max-width: 500px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });
};
