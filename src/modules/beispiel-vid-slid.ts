import Plyr from "plyr";
import KeenSlider from "keen-slider";

export const initBeispiel = () => {
  console.log("savati MOIIIN!");
  const controls = [
    "play", // Play/pause playback
    "current-time", // The current time of playback
    "duration", // The full duration of the media
    "mute", // Toggle mute
    "volume", // Volume control
    "fullscreen", // Toggle fullscreen
  ];

  // Initialize Plyr with options to ensure poster generation from video
  const player = Plyr.setup(".js-player", {
    controls,
    loadSprite: true,
    blankVideo: "",
    previewThumbnails: { enabled: true, src: "" }, // This will use first frame when source not specified
    autoplay: false, // Prevent autoplay to ensure poster is visible
    autopause: true,
    resetOnEnd: true,
    // When a poster isn't explicitly defined, Plyr will use the first frame as poster
    invertTime: false,
  });

  // Select all elements with class .keen-slider.beispiel
  document
    .querySelectorAll(".keen-slider.beispiel")
    .forEach((sliderElement, index) => {
      // Initialize Keen Slider with proper configuration
      const beispielSlider = new KeenSlider(sliderElement as HTMLElement, {
        loop: true,
        renderMode: "performance",
        drag: true,
        slides: {
          perView: 3,
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
      });

      // Create navigation buttons container
      const navigationContainer = document.createElement("div");
      navigationContainer.className = "beispiel-navigation";

      // Create prev button
      const prevButton = document.createElement("button");
      prevButton.className = "beispiel-prev";
      prevButton.innerHTML = "<";
      prevButton.addEventListener("click", () => beispielSlider.prev());

      // Create next button
      const nextButton = document.createElement("button");
      nextButton.className = "beispiel-next";
      nextButton.innerHTML = ">";
      nextButton.addEventListener("click", () => beispielSlider.next());

      // Add buttons to container
      navigationContainer.appendChild(prevButton);
      navigationContainer.appendChild(nextButton);

      // Add navigation container after the slider
      sliderElement.parentNode?.insertBefore(
        navigationContainer,
        sliderElement.nextSibling
      );

      // Add basic styles for buttons
      const style = document.createElement("style");
      style.textContent = `
      .beispiel-navigation {
        display: flex;
        justify-content: start;
        gap: 1rem;
        margin-top: 1rem;
      }
      .beispiel-prev, .beispiel-next {
        background: #cd6663;
        border: none;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        color: #e4e4e4;
        cursor: pointer;
        font-size: 1rem;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .beispiel-prev:hover, .beispiel-next:hover {
        background: #e5e5e5;
        color: #cd6663;
        transform: scale(1.05);
      }
    `;
      document.head.appendChild(style);
    });
};
