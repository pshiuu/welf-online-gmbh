import Plyr from "plyr";

export const bgPlayer = () => {
  console.log("Initializing background video players...");

  // Find all video elements before setup
  const videoElements = document.querySelectorAll(".video-plyr");
  console.log(`Found ${videoElements.length} video elements to initialize`);

  if (videoElements.length === 0) {
    console.warn("No video elements found with class .video-plyr");
    return;
  }

  // No controls for background video
  const players = Plyr.setup(".video-plyr", {
    controls: false,
    autoplay: true,
    muted: true,
    clickToPlay: false,
    disableContextMenu: true,
    loop: { active: true },
  });

  console.log(`Background players initialized: ${players.length}`);

  // Verify all players were created
  if (players.length !== videoElements.length) {
    console.warn(
      `Warning: Expected ${videoElements.length} players but got ${players.length}`
    );
  }

  // First, style the parent containers of all players with flexbox
  videoElements.forEach((element, idx) => {
    const parentContainer = element.closest(".background-video-container");
    if (parentContainer && parentContainer instanceof HTMLElement) {
      console.log(`Setting up parent container for video ${idx}`);
      parentContainer.style.display = "flex";
      parentContainer.style.alignItems = "center";
      parentContainer.style.justifyContent = "center";
      parentContainer.style.overflow = "hidden";
      parentContainer.style.position = "relative";
      parentContainer.style.minHeight = "300px"; // Minimum height fallback

      // Add a data attribute to help with debugging
      parentContainer.setAttribute(
        "data-video-container-index",
        idx.toString()
      );
    } else {
      console.warn(
        `Video element ${idx} doesn't have a parent with class .background-video-container`
      );
    }
  });

  // Add CSS to make videos fill their parent containers using flexbox
  setTimeout(() => {
    // Add a more comprehensive style element
    const style = document.createElement("style");
    style.textContent = `
            .background-video-container {
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                overflow: hidden !important;
                position: relative !important;
                min-height: 300px !important;
                flex: 1 1 auto !important;
            }
            
            .plyr {
                position: absolute !important;
                inset: 0 !important;
                display: flex !important;
                flex: 1 1 auto !important;
                min-width: 100% !important;
                min-height: 100% !important;
            }
            
            .plyr__video-wrapper {
                flex: 1 1 auto !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
            }
            
            .plyr video, .video-plyr {
                min-width: 100% !important;
                min-height: 100% !important;
                object-fit: cover !important;
                flex: 1 1 auto !important;
            }
        `;
    document.head.appendChild(style);

    console.log("Applied flexbox styling to all video elements");

    // Also apply direct styles to all container elements
    const containers = document.querySelectorAll(".plyr, .plyr__video-wrapper");
    containers.forEach((container, idx) => {
      if (container instanceof HTMLElement) {
        console.log(`Styling container ${idx} with flexbox`);
        container.style.display = "flex";
        container.style.flex = "1 1 auto";
        container.style.minWidth = "100%";
        container.style.minHeight = "100%";
      }
    });

    // Style all video elements directly
    const allVideoElements = document.querySelectorAll(
      ".plyr video, .video-plyr"
    );
    allVideoElements.forEach((video, idx) => {
      if (video instanceof HTMLVideoElement) {
        console.log(`Styling video element ${idx} with flexbox`);
        video.style.minWidth = "100%";
        video.style.minHeight = "100%";
        video.style.objectFit = "cover";
        video.style.flex = "1 1 auto";

        // Ensure video is muted to help with autoplay
        video.muted = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");

        // Ensure loop is enabled directly on the video element
        video.loop = true;

        // Preload video content
        video.preload = "auto";
      }
    });

    // Force a reflow to ensure styles are applied
    document.body.offsetHeight;
  }, 500); // Short delay to ensure elements are ready

  // Set up Intersection Observer to detect when videos are about to be visible
  if ("IntersectionObserver" in window) {
    const videoContainers = document.querySelectorAll(
      ".background-video-container"
    );
    console.log(
      `Setting up IntersectionObserver for ${videoContainers.length} containers`
    );

    const options = {
      root: null, // Use viewport as root
      rootMargin: "200px 0px", // Start loading when within 200px of viewport
      threshold: 0, // Trigger as soon as any part is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Find the player instance for this container
        const videoElement = entry.target.querySelector(".video-plyr");
        if (!videoElement) {
          console.warn("No video element found in observed container");
          return;
        }

        const index = Array.from(videoElements).indexOf(videoElement);
        if (index === -1) {
          console.warn("Could not find index of video element");
          return;
        }

        if (!players || !players[index]) {
          console.warn(`No player instance found for index ${index}`);
          return;
        }

        const plyrInstance = players[index];

        if (entry.isIntersecting) {
          console.log(
            `Video container ${index} is about to be visible, preparing playback`
          );

          // Try to play the video when it's about to be visible
          try {
            const promise = plyrInstance.play();

            if (promise !== undefined) {
              promise
                .then(() => {
                  console.log(
                    `Player ${index} autoplay successful via IntersectionObserver`
                  );
                })
                .catch((error) => {
                  console.warn(
                    `Autoplay via IntersectionObserver failed: ${error}`
                  );
                });
            }
          } catch (e) {
            console.error(
              `Error attempting to play via IntersectionObserver: ${e}`
            );
          }
        }
      });
    }, options);

    // Observe all video containers
    videoContainers.forEach((container) => {
      observer.observe(container);
    });
  }

  // Add event listeners to debug autoplay issues and ensure playback
  if (players && players.length > 0) {
    players.forEach((p, index) => {
      console.log(`Setting up events for player ${index}`);

      p.on("ready", () => {
        console.log(`Player ${index} ready`);

        // Try to play on ready event
        try {
          const promise = p.play();

          if (promise !== undefined) {
            promise
              .then(() => {
                console.log(`Player ${index} autoplay successful`);
              })
              .catch((error) => {
                console.warn(
                  `Autoplay failed for player ${index}: ${error}. Will try on user interaction.`
                );

                // Set up event listeners for user interaction to start playback
                const userInteractionEvents = [
                  "click",
                  "touchend",
                  "scroll",
                  "keydown",
                ];
                const playVideoOnce = () => {
                  p.play();
                  console.log(`Playing video ${index} after user interaction`);

                  // Remove event listeners after first interaction
                  userInteractionEvents.forEach((event) => {
                    document.removeEventListener(event, playVideoOnce);
                  });
                };

                userInteractionEvents.forEach((event) => {
                  document.addEventListener(event, playVideoOnce, {
                    once: true,
                  });
                });
              });
          }
        } catch (e) {
          console.error(`Error attempting to play player ${index}: ${e}`);
        }
      });

      p.on("play", () => console.log(`Player ${index} started playing`));
      p.on("pause", () => {
        console.log(`Player ${index} paused - attempting to resume`);
        setTimeout(() => p.play(), 100);
      });
      p.on("ended", () => {
        console.log(`Player ${index} ended - restarting`);
        p.restart();
      });
      p.on("error", (error) => console.error(`Player ${index} error:`, error));
    });
  } else {
    console.error("No player instances were created");
  }
};
