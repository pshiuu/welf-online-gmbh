import Plyr from "plyr";

export const initVideoPlayer = () => {
  const controls = [
    "play", // Play/pause playback
    "current-time", // The current time of playback
    "duration", // The full duration of the media
    "mute", // Toggle mute
    "volume", // Volume control
    "fullscreen", // Toggle fullscreen
  ];

  // Initialize all player instances
  const players = Plyr.setup(".js-player", { controls });

  // Handle video cover click events
  const handleCoverClick = () => {
    const coverElements = document.querySelectorAll(".plyr_cover");

    coverElements.forEach((cover) => {
      cover.addEventListener("click", (event) => {
        // Get the parent plyr_component
        const playerComponent = cover.closest(".plyr_component");

        if (playerComponent) {
          // Find the Plyr instance for this component
          const videoElement = playerComponent.querySelector(".js-player");
          const playerIndex = Array.from(
            document.querySelectorAll(".js-player")
          ).indexOf(videoElement);

          if (playerIndex !== -1 && players[playerIndex]) {
            // Hide the cover
            (cover as HTMLElement).style.display = "none";

            // Play the video
            players[playerIndex].play();
          }
        }
      });
    });
  };

  // Initialize the cover click handlers
  handleCoverClick();

  return players;
};
