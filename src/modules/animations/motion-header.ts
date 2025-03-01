import { animate, scroll } from "motion";

export const initMotionHeader = () => {
  const header = document.querySelector(".nav_fixed");
  const menuButton = document.querySelector(".navbar8_menu-button");
  const menu = document.querySelector(".navbar8_menu");
  const dropdownLists = document.querySelectorAll(".navbar8_dropdown-list");
  const dropdownToggles = document.querySelectorAll(".navbar8_dropdown-toggle");

  if (!header) return;

  // Ensure header has a non-static position for proper scroll calculations
  if (header instanceof HTMLElement) {
    const computedStyle = window.getComputedStyle(header);
    if (computedStyle.position === "static") {
      header.style.position = "relative";
      console.log(
        "Applied position:relative to header for proper scroll animations"
      );
    }
  }

  // Set initial state
  animate(
    header,
    {
      backgroundColor: "rgba(41, 41, 41, 0.25)",
    },
    { duration: 0 }
  );

  // Track navbar open state
  let isNavOpen = false;
  // Track dropdown hover state
  let isAnyDropdownHovered = false;

  // Function to update header background based on current state
  const updateHeaderBackground = () => {
    // If nav is open or any dropdown is open/hovered, set full opacity
    if (isNavOpen || checkDropdownState() || isAnyDropdownHovered) {
      animate(
        header,
        {
          backgroundColor: "rgba(41, 41, 41, 1)",
        },
        {
          duration: 0.3,
          easing: "ease-out",
        }
      );
    } else {
      // Otherwise, set opacity based on scroll position
      const scrollY = window.scrollY;
      const opacity = scrollY > 0 ? 1 : 0.5;

      animate(
        header,
        {
          backgroundColor: `rgba(41, 41, 41, ${opacity})`,
        },
        {
          duration: 0.3,
          easing: "ease-out",
        }
      );
    }
  };

  // Function to check if any dropdown is open
  const checkDropdownState = () => {
    let isAnyDropdownOpen = false;
    dropdownLists.forEach((dropdown) => {
      if (
        dropdown instanceof HTMLElement &&
        (dropdown.style.display === "block" ||
          dropdown.classList.contains("w--open"))
      ) {
        isAnyDropdownOpen = true;
      }
    });

    return isAnyDropdownOpen;
  };

  // Toggle function for the navbar
  const toggleNav = () => {
    isNavOpen = !isNavOpen;

    if (isNavOpen) {
      // When nav is open
      document.body.style.overflowY = "hidden";

      // Make the menu scrollable
      if (menu) {
        menu.setAttribute(
          "style",
          "overflow-y: auto; max-height: calc(100vh - 80px);"
        );
      }
    } else {
      // When nav is closed
      document.body.style.overflowY = "";

      // Remove scrolling from menu
      if (menu) {
        menu.setAttribute("style", "");
      }
    }

    // Update header background based on new state
    updateHeaderBackground();
  };

  // Add click listener to menu button
  if (menuButton) {
    menuButton.addEventListener("click", toggleNav);
  }

  // Add hover listeners for dropdown toggles
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("mouseenter", () => {
      isAnyDropdownHovered = true;
      updateHeaderBackground();
    });

    toggle.addEventListener("mouseleave", () => {
      isAnyDropdownHovered = false;
      updateHeaderBackground();
    });
  });

  // Also add click listeners for dropdown toggles to handle open/close state
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      // Wait a moment for the dropdown to open/close
      setTimeout(() => {
        updateHeaderBackground();
      }, 50);
    });
  });

  // Handle scrolling
  scroll((progress, info) => {
    // Skip animation if nav is open, any dropdown is open, or any dropdown is hovered
    if (isNavOpen || checkDropdownState() || isAnyDropdownHovered) return;

    // Get vertical scroll position in pixels
    const scrollY = info.y.current;
    const opacity = scrollY > 0 ? 1 : 0.5;

    animate(
      header,
      {
        backgroundColor: `rgba(41, 41, 41, ${opacity})`,
      },
      {
        duration: 0.3,
        easing: "ease-out",
      }
    );
  });

  // Initial update based on page load state
  updateHeaderBackground();
};
