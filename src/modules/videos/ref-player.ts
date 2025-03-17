import Plyr from "plyr";

export const initRefPlayer = () => {
  const controls = [
    "play", // Play/pause playback
    "volume", // The current time of playback
    "duration", // The full duration of the media
    "mute", // Toggle mute
    "fullscreen", // Toggle fullscreen
  ];

  const options = {
    controls,
    loadPosterFromVideo: true, // Automatically fetch poster from video
    preload: "metadata", // Only preload metadata for faster initial loading
    blankVideo: "", // Empty string to avoid loading the default blank video
    autopause: true, // Pause other players when a new one starts playing
    iconUrl: "https://cdn.plyr.io/3.7.8/plyr.svg", // Use CDN for icons to improve loading
  };

  const player = Plyr.setup(".js-player", options);
};
