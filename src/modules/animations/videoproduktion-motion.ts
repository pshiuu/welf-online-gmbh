import { animate, scroll, inView, stagger } from "motion";

/**
 * Initialize animations for the Videoproduktion subpages
 * Uses Motion (Framer Motion) for smooth, performant animations
 */
export const initVideoproduktionSubpageMotion = () => {
  console.log("🎬 Initializing Videoproduktion subpage animations");

  // Animate the hero section
  const animateHero = () => {
    const heroHeading = document.querySelector(
      ".section_fullscreenland .heading-style-h1"
    ) as HTMLElement | null;
    const heroParagraph = document.querySelector(
      ".section_fullscreenland .text-size-medium"
    ) as HTMLElement | null;
    const heroButtons = document.querySelectorAll(
      ".section_fullscreenland .button"
    );

    // Set initial states
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

  // Animate layout section (Layout241)
  const animateLayoutSection = () => {
    const layoutSection = document.querySelector(".section_layout241");
    const layoutHeading = layoutSection?.querySelector(
      ".heading-style-h2"
    ) as HTMLElement | null;
    const layoutTagline = layoutSection?.querySelector(
      ".text-style-tagline"
    ) as HTMLElement | null;
    const layoutParagraph = layoutSection?.querySelector(
      ".text-size-medium"
    ) as HTMLElement | null;
    const layoutItems = layoutSection?.querySelectorAll(".layout241_item");
    const layoutButtons = layoutSection?.querySelectorAll(".button");

    // Add scroll-triggered animations
    if (layoutSection) {
      if (layoutTagline) {
        layoutTagline.style.opacity = "0";
        layoutTagline.style.transform = "translateY(20px)";

        scroll(animate(layoutTagline, { opacity: [0, 1], y: [20, 0] }), {
          target: layoutSection,
          offset: ["start 80%", "start 60%"],
        });
      }

      if (layoutHeading) {
        layoutHeading.style.opacity = "0";
        layoutHeading.style.transform = "translateY(30px)";

        scroll(animate(layoutHeading, { opacity: [0, 1], y: [30, 0] }), {
          target: layoutSection,
          offset: ["start 75%", "start 55%"],
        });
      }

      if (layoutParagraph) {
        layoutParagraph.style.opacity = "0";
        layoutParagraph.style.transform = "translateY(20px)";

        scroll(animate(layoutParagraph, { opacity: [0, 1], y: [20, 0] }), {
          target: layoutSection,
          offset: ["start 70%", "start 50%"],
        });
      }

      // Staggered animation for items
      layoutItems?.forEach((item, i) => {
        const itemElement = item as HTMLElement;
        itemElement.style.opacity = "0";
        itemElement.style.transform = "translateY(30px)";

        scroll(animate(itemElement, { opacity: [0, 1], y: [30, 0] }), {
          target: layoutSection,
          offset: [`start ${65 - i * 5}%`, `start ${45 - i * 5}%`],
        });
      });

      // Staggered animation for buttons
      layoutButtons?.forEach((button, i) => {
        const buttonElement = button as HTMLElement;
        buttonElement.style.opacity = "0";
        buttonElement.style.transform = "translateY(15px)";

        scroll(animate(buttonElement, { opacity: [0, 1], y: [15, 0] }), {
          target: layoutSection,
          offset: [`start ${60 - i * 5}%`, `start ${40 - i * 5}%`],
        });
      });
    }
  };

  // Animate video player section
  const animateVideoPlayerSection = () => {
    const videoSection = document.querySelector(
      ".section_professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion"
    );
    const videoHeading = videoSection?.querySelector(
      ".heading-style-h2"
    ) as HTMLElement | null;
    const videoTagline = videoSection?.querySelector(
      ".text-style-tagline"
    ) as HTMLElement | null;
    const videoParagraph = videoSection?.querySelector(
      ".text-size-medium"
    ) as HTMLElement | null;
    const videoImage = videoSection?.querySelector(
      ".professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_image"
    ) as HTMLElement | null;
    const videoItems = videoSection?.querySelectorAll(
      ".professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_text-wrapper"
    );
    const videoButtons = videoSection?.querySelectorAll(".button");

    // Add scroll-triggered animations
    if (videoSection) {
      if (videoTagline) {
        videoTagline.style.opacity = "0";
        videoTagline.style.transform = "translateY(20px)";

        scroll(animate(videoTagline, { opacity: [0, 1], y: [20, 0] }), {
          target: videoSection,
          offset: ["start 80%", "start 60%"],
        });
      }

      if (videoHeading) {
        videoHeading.style.opacity = "0";
        videoHeading.style.transform = "translateY(30px)";

        scroll(animate(videoHeading, { opacity: [0, 1], y: [30, 0] }), {
          target: videoSection,
          offset: ["start 75%", "start 55%"],
        });
      }

      if (videoParagraph) {
        videoParagraph.style.opacity = "0";
        videoParagraph.style.transform = "translateY(20px)";

        scroll(animate(videoParagraph, { opacity: [0, 1], y: [20, 0] }), {
          target: videoSection,
          offset: ["start 70%", "start 50%"],
        });
      }

      // Animate image if exists
      if (videoImage) {
        videoImage.style.opacity = "0";
        videoImage.style.transform = "translateX(30px) scale(0.95)";

        scroll(
          animate(videoImage, {
            opacity: [0, 1],
            x: [30, 0],
            scale: [0.95, 1],
          }),
          {
            target: videoSection,
            offset: ["start 70%", "start 40%"],
          }
        );
      }

      // Staggered animation for items
      videoItems?.forEach((item, i) => {
        const itemElement = item as HTMLElement;
        itemElement.style.opacity = "0";
        itemElement.style.transform = "translateY(20px)";

        scroll(animate(itemElement, { opacity: [0, 1], y: [20, 0] }), {
          target: videoSection,
          offset: [`start ${65 - i * 5}%`, `start ${45 - i * 5}%`],
        });
      });

      // Animation for buttons
      videoButtons?.forEach((button, i) => {
        const buttonElement = button as HTMLElement;
        buttonElement.style.opacity = "0";
        buttonElement.style.transform = "translateY(15px)";

        scroll(animate(buttonElement, { opacity: [0, 1], y: [15, 0] }), {
          target: videoSection,
          offset: [`start ${60 - i * 5}%`, `start ${40 - i * 5}%`],
        });
      });
    }
  };

  // Animate features section (section_layout249)
  const animateFeaturesSection = () => {
    const featuresSection = document.querySelector(".section_layout249");
    const featuresHeading = featuresSection?.querySelector(
      ".heading-style-h2"
    ) as HTMLElement | null;
    const featuresTagline = featuresSection?.querySelector(
      ".text-style-tagline"
    ) as HTMLElement | null;
    const featuresParagraph = featuresSection?.querySelector(
      ".text-size-medium"
    ) as HTMLElement | null;
    const featuresItems = featuresSection?.querySelectorAll(".layout249_item");
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
      featuresItems?.forEach((item, i) => {
        const itemElement = item as HTMLElement;
        const itemImg = itemElement.querySelector(
          ".layout249_image"
        ) as HTMLElement | null;
        const itemHeading = itemElement.querySelector(
          ".heading-style-h4"
        ) as HTMLElement | null;
        const itemText = itemElement.querySelector("p") as HTMLElement | null;

        if (itemImg) {
          itemImg.style.opacity = "0";
          itemImg.style.transform = "scale(0.9)";

          scroll(animate(itemImg, { opacity: [0, 1], scale: [0.9, 1] }), {
            target: featuresSection,
            offset: [`start ${70 - i * 5}%`, `start ${50 - i * 5}%`],
          });
        }

        if (itemHeading) {
          itemHeading.style.opacity = "0";
          itemHeading.style.transform = "translateY(20px)";

          scroll(animate(itemHeading, { opacity: [0, 1], y: [20, 0] }), {
            target: featuresSection,
            offset: [`start ${65 - i * 5}%`, `start ${45 - i * 5}%`],
          });
        }

        if (itemText) {
          itemText.style.opacity = "0";
          itemText.style.transform = "translateY(15px)";

          scroll(animate(itemText, { opacity: [0, 1], y: [15, 0] }), {
            target: featuresSection,
            offset: [`start ${60 - i * 5}%`, `start ${40 - i * 5}%`],
          });
        }
      });

      // Animation for buttons
      featuresButtons?.forEach((button, i) => {
        const buttonElement = button as HTMLElement;
        buttonElement.style.opacity = "0";
        buttonElement.style.transform = "translateY(15px)";

        scroll(animate(buttonElement, { opacity: [0, 1], y: [15, 0] }), {
          target: featuresSection,
          offset: [`start ${55 - i * 5}%`, `start ${35 - i * 5}%`],
        });
      });
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
  animateLayoutSection();
  animateVideoPlayerSection();
  animateFeaturesSection();
  animateCtaSection();
};
