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

  const player = Plyr.setup(".js-player", { controls });
};
