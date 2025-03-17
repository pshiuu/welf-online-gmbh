import KeenSlider from "keen-slider";

export const initBeispielSlider = () => {
  console.log("Initializing Beispiel Slider");

  // Find the slider container
  const sliderContainer = document.getElementById("is-beispiele");

  if (!sliderContainer) {
    console.warn("Beispiel Slider container not found (ID: is-beispiele)");
    return;
  }

  // Initialize Keen Slider
  const slider = new KeenSlider("#is-beispiele", {
    loop: true,
    renderMode: "performance",
    drag: true,
    slides: {
      perView: 3, // Show 3 slides at once on desktop
      spacing: 24, // Space between slides
    },
    created(s) {
      console.log("Beispiel Slider created");

      // Optional: Add custom navigation buttons if they exist
      setupNavigation(s);
    },
    breakpoints: {
      "(max-width: 991px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(max-width: 479px)": {
        slides: {
          perView: 1,
          spacing: 16,
        },
      },
    },
  });

  // For auto-sliding functionality (optional)
  let autoplayInterval: number | null = null;

  // Function to start autoplay
  const startAutoplay = () => {
    stopAutoplay(); // Clear any existing interval first

    autoplayInterval = window.setInterval(() => {
      if (slider) {
        slider.next();
      }
    }, 5000); // Change slide every 5 seconds
  };

  // Function to stop autoplay
  const stopAutoplay = () => {
    if (autoplayInterval !== null) {
      clearInterval(autoplayInterval);
      autoplayInterval = null;
    }
  };

  // Start autoplay on creation
  startAutoplay();

  // Pause autoplay when user interacts with the slider
  sliderContainer.addEventListener("mouseover", stopAutoplay);
  sliderContainer.addEventListener("touchstart", stopAutoplay, {
    passive: true,
  });

  // Resume autoplay when user stops interacting
  sliderContainer.addEventListener("mouseout", startAutoplay);
  sliderContainer.addEventListener("touchend", startAutoplay);

  // Clean up on page leave/component unmount
  return () => {
    stopAutoplay();
    if (slider) {
      slider.destroy();
    }
  };
};

// Helper function to set up custom navigation if needed
function setupNavigation(slider: any) {
  // Look for previous and next buttons
  const prevButton = document.querySelector('[data-beispiel-slider="prev"]');
  const nextButton = document.querySelector('[data-beispiel-slider="next"]');

  // Add click handlers if buttons exist
  if (prevButton) {
    prevButton.addEventListener("click", () => {
      slider.prev();
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      slider.next();
    });
  }

  // Optional: Add dots/pagination
  const dotsContainer = document.querySelector('[data-beispiel-slider="dots"]');
  if (dotsContainer) {
    // Create dots based on number of slides
    const slideCount = slider.track.details.slides.length;

    // Empty the container first
    dotsContainer.innerHTML = "";

    // Add a dot for each slide
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement("button");
      dot.classList.add("beispiel-slider-dot");

      // Mark the first dot as active
      if (i === 0) {
        dot.classList.add("active");
      }

      // Add click handler
      dot.addEventListener("click", () => {
        slider.moveToIdx(i);
      });

      dotsContainer.appendChild(dot);
    }

    // Update active dot when slide changes
    slider.on("slideChanged", (s: any) => {
      const dots = dotsContainer.querySelectorAll(".beispiel-slider-dot");
      const currentIndex = s.track.details.rel;

      // Remove active class from all dots
      dots.forEach((dot: Element) => {
        dot.classList.remove("active");
      });

      // Add active class to current dot
      const currentDot = dots[currentIndex];
      if (currentDot) {
        currentDot.classList.add("active");
      }
    });
  }
}
