import Plyr from "plyr";

/**
 * Initialize Plyr for Vimeo videos that use data attributes
 * For elements with structure:
 * <div class="slider-beispiel-wrap" data-plyr-provider="vimeo" data-plyr-embed-id="76979871"></div>
 */
export const initBeispielPlayer = () => {
  // Find all containers with the correct class
  const containers = document.querySelectorAll(".slider-beispiel-wrap");

  if (containers.length === 0) {
    console.log("No video containers found with class 'slider-beispiel-wrap'");
    return [];
  }

  // Add CSS to ensure proper sizing of video containers
  const style = document.createElement("style");
  style.textContent = `
    .plyr--video {
      height: 100%;
      border-radius: .5rem;
      width: 100%;
    }
    .plyr__video-wrapper {
      height: 100%;
      width: 100%;
    }

  `;
  document.head.appendChild(style);

  console.log(`Found ${containers.length} video containers`);

  // Initialize Plyr on each container
  const players = Array.from(containers).map((container) => {
    // Get aspect ratio from data attribute, default to "9:16" if not specified
    const aspectRatio =
      (container as HTMLElement).dataset.aspectRatio || "9:16";

    // Create the player with the aspect ratio from data attribute
    const player = new Plyr(container as HTMLElement, {
      ratio: aspectRatio,
      clickToPlay: true,
      autopause: true,
      vimeo: {
        byline: false,
        portrait: false,
        title: false,
        speed: true,
        transparent: false,
        controls: false,
        dnt: true,
      },
      controls: ["play", "mute", "volume"],
    });

    return player;
  });

  return players;
};
