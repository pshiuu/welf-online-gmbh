import KeenSlider from 'keen-slider'

export const initTestimonialSlider = () => {

    const animation = { duration: 100000, easing: (t) => t };
    
    var testimonialSlider = new KeenSlider("#testimonial", {
        loop: true,
        renderMode: "performance",
        drag: true,
        slides: {
          perView: 3,
          spacing: 16,
        },
        created(s) {
          s.moveToIdx(5, true, animation)
        },
        updated(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        animationEnded(s) {
          s.moveToIdx(s.track.details.abs + 5, true, animation)
        },
        breakpoints: {
          '(max-width: 850px)': {
            slides: {
              perView: 2,
              spacing: 16,
            },
          },
          '(max-width: 500px)': {
            slides: {
              perView: 1,
              spacing: 16,
            },
          },
        },
      })
}