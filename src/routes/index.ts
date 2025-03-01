import { WFRoute } from "@xatom/core";
import { initVideoPlayer } from "../modules/videos/video-player";
import { initMarquee } from "../modules/marquees";
import { initHomeMotion } from "../modules/animations/home-motion";
import { initTestimonialSlider } from "../modules/testimonial-slider";
import { initMotionHeader } from "../modules/animations/motion-header";
import { initFotostudioMotion } from "../modules/animations/fotostudio-motion";
import { bgPlayer } from "../modules/videos/videoproduktionen";
import { initVideoproduktionenMotion } from "../modules/animations/videoproduktionen-motion";
import { initBeispielPlayer } from "../modules/videos/beispiel-player";
import { initBeispielSlider } from "../modules/beispiel-slider";
import { initBilderSlider } from "../modules/bilder-slider";
import { initFotoproduktionMotion } from "../modules/animations/fotoproduktion-motion";
import { initVideoproduktionSubpageMotion } from "../modules/animations/videoproduktion-motion";

// Initialize all routes
export const initRoutes = () => {
  // Home page route
  new WFRoute("/").execute(() => {
    console.log("🏠 Home Page - Initializing components");
    initTestimonialSlider();
    initVideoPlayer();
    initMarquee();
    initHomeMotion();
  });

  // Fotostudio page route
  new WFRoute("/fotostudio").execute(() => {
    console.log("📸 Fotostudio Page - Initializing components");
    initMotionHeader();
    initFotostudioMotion();
  });

  // Fotoproduktion subpages
  new WFRoute("/fotoproduktion/(.*)").execute(() => {
    console.log("📷 Fotoproduktion Subpage - Initializing components");
    initMotionHeader();
    initBilderSlider();
    initFotoproduktionMotion();
  });

  // Team page route
  new WFRoute("/team").execute(() => {
    console.log("👥 Team Page - Initializing components");
    initMotionHeader();
  });

  // Main Videoproduktion page
  new WFRoute("/videoproduktion").execute(() => {
    console.log("🎬 Videoproduktion Main Page - Initializing components");
    bgPlayer();
    initVideoproduktionenMotion();
    initBeispielPlayer();
    initBeispielSlider();
  });

  // All videoproduktion subpages - using regex pattern instead of wildcards
  new WFRoute("/videoproduktion/(.*)").execute(() => {
    console.log("🎥 Videoproduktion Subpage - Initializing components");
    bgPlayer();
    initMotionHeader();
    initBeispielPlayer();
    initBeispielSlider();
    initVideoproduktionSubpageMotion();
  });
};

// Legacy exports for backward compatibility
export const HomeRoute = () => {
  new WFRoute("/").execute(initTestimonialSlider);
  new WFRoute("/").execute(initVideoPlayer);
  new WFRoute("/").execute(initMarquee);
  new WFRoute("/").execute(initHomeMotion);
};

export const FotostudioRoute = () => {
  new WFRoute("/fotostudio").execute(initMotionHeader);
  new WFRoute("/fotostudio").execute(initFotostudioMotion);
};

export const TeamRoute = () => {
  new WFRoute("/team").execute(initMotionHeader);
};

export const VideoproduktionenRoute = () => {
  new WFRoute("/videoproduktion").execute(bgPlayer);
  new WFRoute("/videoproduktion").execute(initVideoproduktionenMotion);
};

export const VideografieRoute = () => {
  new WFRoute("/videoproduktion/(.*)").execute(() => {
    console.log("🎥 Videografie Route - Initializing components");
    initBeispielPlayer();
    initBeispielSlider();
    initVideoproduktionSubpageMotion();
  });
};

export const FotoproduktionRoute = () => {
  new WFRoute("/fotoproduktion/(.*)").execute(() => {
    console.log("📷 Fotoproduktion Route - Initializing components");
    initMotionHeader();
    initBilderSlider();
    initFotoproduktionMotion();
  });
};
