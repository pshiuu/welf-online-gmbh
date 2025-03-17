import { animate, scroll, inView, stagger } from "motion";

/**
 * Initialize animations for the Fotoproduktion subpages
 * Uses Motion (Framer Motion) for smooth, performant animations
 */
export const initFotoproduktionMotion = () => {
  console.log("📷 Initializing Fotoproduktion subpage animations");

  // Animate the hero section elements
  const animateHero = () => {
    // Target hero section elements
    const heroHeading = document.querySelector(
      ".section_fullscreenland .heading-style-h1"
    ) as HTMLElement | null;
    const heroParagraph = document.querySelector(
      ".section_fullscreenland .text-size-medium"
    ) as HTMLElement | null;
    const heroButtons = document.querySelectorAll(
      ".section_fullscreenland .button"
    );

    // Set initial state and animate heading
    if (heroHeading) {
      heroHeading.style.opacity = "0";
      heroHeading.style.transform = "translateY(30px)";

      animate(
        heroHeading,
        { opacity: [0, 1], y: [30, 0] },
        {
          duration: 0.8,
          easing: [0.25, 0.1, 0.25, 1],
          delay: 0.3,
        }
      );
    }

    // Set initial state and animate paragraph
    if (heroParagraph) {
      heroParagraph.style.opacity = "0";
      heroParagraph.style.transform = "translateY(20px)";

      animate(
        heroParagraph,
        { opacity: [0, 1], y: [20, 0] },
        {
          duration: 0.7,
          easing: [0.25, 0.1, 0.25, 1],
          delay: 0.5,
        }
      );
    }

    // Staggered animation for buttons
    heroButtons.forEach((button, i) => {
      if (button) {
        const buttonElement = button as HTMLElement;
        buttonElement.style.opacity = "0";
        buttonElement.style.transform = "translateY(15px) scale(0.95)";

        animate(
          buttonElement,
          { opacity: [0, 1], y: [15, 0], scale: [0.95, 1] },
          {
            duration: 0.5,
            delay: 0.7 + i * 0.1,
            easing: [0.25, 0.1, 0.25, 1],
          }
        );
      }
    });
  };

  // Animate the gallery/slider section
  const animateGallerySection = () => {
    // Target gallery section elements
    const gallerySection = document.querySelector(".section_is-bilder-wrapper");
    const galleryHeading = gallerySection?.querySelector(
      ".heading-style-h2"
    ) as HTMLElement | null;
    const galleryTagline = gallerySection?.querySelector(
      ".text-style-tagline"
    ) as HTMLElement | null;
    const galleryParagraph = gallerySection?.querySelector(
      ".text-size-medium"
    ) as HTMLElement | null;
    const galleryButtons = gallerySection?.querySelectorAll(".button");

    // Add scroll-triggered animations for the gallery section
    if (gallerySection) {
      if (galleryTagline) {
        galleryTagline.style.opacity = "0";
        galleryTagline.style.transform = "translateY(20px)";

        scroll(animate(galleryTagline, { opacity: [0, 1], y: [20, 0] }), {
          target: gallerySection,
          offset: ["start 80%", "start 60%"],
        });
      }

      if (galleryHeading) {
        galleryHeading.style.opacity = "0";
        galleryHeading.style.transform = "translateY(30px)";

        scroll(animate(galleryHeading, { opacity: [0, 1], y: [30, 0] }), {
          target: gallerySection,
          offset: ["start 75%", "start 55%"],
        });
      }

      if (galleryParagraph) {
        galleryParagraph.style.opacity = "0";
        galleryParagraph.style.transform = "translateY(20px)";

        scroll(animate(galleryParagraph, { opacity: [0, 1], y: [20, 0] }), {
          target: gallerySection,
          offset: ["start 70%", "start 50%"],
        });
      }

      // Animate the slider as a whole
      const sliderWrapper = document.getElementById("is-bilder");
      if (sliderWrapper) {
        sliderWrapper.style.opacity = "0";
        sliderWrapper.style.transform = "translateY(30px)";

        scroll(animate(sliderWrapper, { opacity: [0, 1], y: [30, 0] }), {
          target: gallerySection,
          offset: ["start 65%", "start 45%"],
        });
      }

      // Animation for buttons
      if (galleryButtons) {
        galleryButtons.forEach((button, i) => {
          const buttonElement = button as HTMLElement;
          buttonElement.style.opacity = "0";
          buttonElement.style.transform = "translateY(15px)";

          scroll(animate(buttonElement, { opacity: [0, 1], y: [15, 0] }), {
            target: gallerySection,
            offset: [`start ${60 - i * 5}%`, `start ${40 - i * 5}%`],
          });
        });
      }
    }
  };

  // Animate services/features section (usually layout241 or layout249)
  const animateFeaturesSection = () => {
    // Try to find either layout type
    const featuresSection =
      document.querySelector(".section_layout241") ||
      document.querySelector(".section_layout249");
    const featuresHeading = featuresSection?.querySelector(
      ".heading-style-h2"
    ) as HTMLElement | null;
    const featuresTagline = featuresSection?.querySelector(
      ".text-style-tagline"
    ) as HTMLElement | null;
    const featuresParagraph = featuresSection?.querySelector(
      ".text-size-medium"
    ) as HTMLElement | null;
    const featuresItems = featuresSection?.querySelectorAll(
      ".layout241_item, .layout249_item"
    );
    const featuresButtons = featuresSection?.querySelectorAll(".button");

    // Add scroll-triggered animations
    if (featuresSection) {
      if (featuresTagline) {
        featuresTagline.style.opacity = "0";
        featuresTagline.style.transform = "translateY(20px)";

        scroll(animate(featuresTagline, { opacity: [0, 1], y: [20, 0] }), {
          target: featuresSection,
          offset: ["start 80%", "start 60%"],
        });
      }

      if (featuresHeading) {
        featuresHeading.style.opacity = "0";
        featuresHeading.style.transform = "translateY(30px)";

        scroll(animate(featuresHeading, { opacity: [0, 1], y: [30, 0] }), {
          target: featuresSection,
          offset: ["start 75%", "start 55%"],
        });
      }

      if (featuresParagraph) {
        featuresParagraph.style.opacity = "0";
        featuresParagraph.style.transform = "translateY(20px)";

        scroll(animate(featuresParagraph, { opacity: [0, 1], y: [20, 0] }), {
          target: featuresSection,
          offset: ["start 70%", "start 50%"],
        });
      }

      // Staggered animation for feature items
      if (featuresItems) {
        featuresItems.forEach((item, i) => {
          const itemElement = item as HTMLElement;
          const itemImg = itemElement.querySelector(
            "img"
          ) as HTMLElement | null;
          const itemHeading = itemElement.querySelector(
            ".heading-style-h4"
          ) as HTMLElement | null;
          const itemText = itemElement.querySelector("p") as HTMLElement | null;

          // For the item container
          itemElement.style.opacity = "0";
          itemElement.style.transform = "translateY(30px)";

          scroll(animate(itemElement, { opacity: [0, 1], y: [30, 0] }), {
            target: featuresSection,
            offset: [`start ${70 - i * 5}%`, `start ${50 - i * 5}%`],
          });

          // For elements inside each item
          if (itemImg) {
            itemImg.style.opacity = "0";
            itemImg.style.transform = "scale(0.9)";

            scroll(animate(itemImg, { opacity: [0, 1], scale: [0.9, 1] }), {
              target: featuresSection,
              offset: [`start ${65 - i * 5}%`, `start ${45 - i * 5}%`],
            });
          }
        });
      }

      // Animation for buttons
      if (featuresButtons) {
        featuresButtons.forEach((button, i) => {
          const buttonElement = button as HTMLElement;
          buttonElement.style.opacity = "0";
          buttonElement.style.transform = "translateY(15px)";

          scroll(animate(buttonElement, { opacity: [0, 1], y: [15, 0] }), {
            target: featuresSection,
            offset: [`start ${60 - i * 5}%`, `start ${40 - i * 5}%`],
          });
        });
      }
    }
  };

  // Animate CTA section
  const animateCtaSection = () => {
    const ctaSection = document.querySelector(".section_cta3");
    const ctaHeading = ctaSection?.querySelector(
      ".heading-style-h2"
    ) as HTMLElement | null;
    const ctaParagraph = ctaSection?.querySelector(
      ".text-size-medium"
    ) as HTMLElement | null;
    const ctaButton = ctaSection?.querySelector(
      ".button"
    ) as HTMLElement | null;

    // Add scroll-triggered animations
    if (ctaSection) {
      if (ctaHeading) {
        ctaHeading.style.opacity = "0";
        ctaHeading.style.transform = "translateY(30px)";

        scroll(animate(ctaHeading, { opacity: [0, 1], y: [30, 0] }), {
          target: ctaSection,
          offset: ["start 80%", "start 60%"],
        });
      }

      if (ctaParagraph) {
        ctaParagraph.style.opacity = "0";
        ctaParagraph.style.transform = "translateY(20px)";

        scroll(animate(ctaParagraph, { opacity: [0, 1], y: [20, 0] }), {
          target: ctaSection,
          offset: ["start 75%", "start 55%"],
        });
      }

      if (ctaButton) {
        ctaButton.style.opacity = "0";
        ctaButton.style.transform = "translateY(15px) scale(0.95)";

        scroll(
          animate(ctaButton, { opacity: [0, 1], y: [15, 0], scale: [0.95, 1] }),
          {
            target: ctaSection,
            offset: ["start 70%", "start 50%"],
          }
        );
      }
    }
  };

  // Execute all animations
  animateHero();
  animateGallerySection();
  animateFeaturesSection();
  animateCtaSection();
};
