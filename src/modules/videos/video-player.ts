import Plyr from "plyr";

export const initVideoPlayer = () => {
  const controls = [
    "play", // Play/pause playback
    "current-time", // The current time of playback
    "duration", // The full duration of the media
    "progress",
    "mute", // Toggle mute
    "volume", // Volume control
    "fullscreen", // Toggle fullscreen
  ];

  // Add CSS for loading spinner
  const addLoadingSpinnerStyles = () => {
    const styleElement = document.createElement("style");
    styleElement.textContent = `
      .video-loading-spinner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border: 5px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        border-top-color: #fff;
        animation: spin 1s ease-in-out infinite;
        z-index: 10;
        display: none;
      }
      
      @keyframes spin {
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }
      
      .plyr__video-wrapper {
        position: relative;
      }
    `;
    document.head.appendChild(styleElement);
  };

  // Add loading spinner to all video wrappers
  const addLoadingSpinners = () => {
    const videoWrappers = document.querySelectorAll(".plyr__video-wrapper");
    videoWrappers.forEach((wrapper) => {
      const spinner = document.createElement("div");
      spinner.className = "video-loading-spinner";
      wrapper.appendChild(spinner);
    });
  };

  // Handle play button clicks
  const handlePlayButtonClicks = () => {
    document.addEventListener("click", (event) => {
      const target = event.target as Element;
      if (target.closest('.plyr__control[data-plyr="play"]')) {
        const button = target.closest('.plyr__control[data-plyr="play"]');
        const plyr = button.closest(".plyr");
        const videoWrapper = plyr?.querySelector(".plyr__video-wrapper");
        const container = plyr?.closest(
          ".beispiel-video-wrap, .team-item-wrap"
        );

        // Hide poster overlays
        if (container) {
          const overlays = container.querySelectorAll(".poster-overlay");
          overlays.forEach((overlay) => {
            (overlay as HTMLElement).style.display = "none";
          });
        }

        if (plyr) {
          const poster = plyr.querySelector(".plyr__poster");
          if (poster) {
            (poster as HTMLElement).style.display = "none";
          }
        }

        // Show loading spinner
        if (videoWrapper) {
          const spinner = videoWrapper.querySelector(".video-loading-spinner");
          if (spinner) {
            (spinner as HTMLElement).style.display = "block";

            // Hide spinner after a delay
            setTimeout(() => {
              (spinner as HTMLElement).style.display = "none";
            }, 2000);
          }
        }

        // Observe class changes to detect when video is playing
        if (plyr) {
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.attributeName === "class") {
                if (plyr.classList.contains("plyr--playing")) {
                  const spinner = plyr.querySelector(".video-loading-spinner");
                  if (spinner) {
                    (spinner as HTMLElement).style.display = "none";
                  }
                }
              }
            });
          });

          observer.observe(plyr, { attributes: true });

          setTimeout(() => {
            observer.disconnect();
          }, 2000);
        }
      }
    });
  };

  // Handle video events
  const handleVideoEvents = () => {
    const videoElements = document.querySelectorAll(".js-player");

    videoElements.forEach((video) => {
      const videoElement = video as HTMLVideoElement;
      const plyrWrapper = video.closest(".plyr__video-wrapper");
      const spinner = plyrWrapper?.querySelector(".video-loading-spinner");

      const hideSpinner = () => {
        if (spinner) {
          (spinner as HTMLElement).style.display = "none";
        }
      };

      videoElement.addEventListener("play", () => {
        const container = video.closest(
          ".beispiel-video-wrap, .team-item-wrap"
        );
        if (container) {
          const overlays = container.querySelectorAll(".poster-overlay");
          overlays.forEach((overlay) => {
            (overlay as HTMLElement).style.display = "none";
          });
        }

        const plyr = video.closest(".plyr");
        const poster = plyr?.querySelector(".plyr__poster");
        if (poster) {
          (poster as HTMLElement).style.display = "none";
        }

        hideSpinner();
      });

      videoElement.addEventListener("playing", hideSpinner);
      videoElement.addEventListener("timeupdate", hideSpinner);
      videoElement.addEventListener("canplay", hideSpinner);
    });
  };

  // Load Plyr CSS
  const loadPlyrCSS = () => {
    setTimeout(() => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdn.plyr.io/3.5.6/plyr.css";
      document.head.appendChild(link);
    }, 100);
  };

  // Initialize everything when DOM is loaded
  const initOnDOMContentLoaded = () => {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initializeAll);
    } else {
      initializeAll();
    }
  };

  // Main initialization function
  const initializeAll = () => {
    loadPlyrCSS();
    addLoadingSpinnerStyles();

    // Initialize all player instances
    const players = Plyr.setup(".js-player", { controls });

    addLoadingSpinners();
    handlePlayButtonClicks();
    handleVideoEvents();

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

  // Start the initialization process
  return initOnDOMContentLoaded();
};
