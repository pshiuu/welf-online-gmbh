import { WFRoute } from "@xatom/core";
import { initVideoPlayer } from "../modules/videos/video-player";
import { initMarquee } from "../modules/slider/marquees";
import { initHomeMotion } from "../modules/animations/home-motion";
import { initTestimonialSlider } from "../modules/slider/testimonial-slider";
import { initMotionHeader } from "../modules/animations/motion-header";
import { initFotostudioMotion } from "../modules/animations/fotostudio-motion";
import { initVideoproduktionenMotion } from "../modules/animations/videoproduktionen-motion";
import { initBeispielPlayer } from "../modules/videos/beispiel-player";
import { initBeispielSlider } from "../modules/slider/beispiel-slider";
import { initBilderSlider } from "../modules/slider/bilder-slider";
import { initFotoproduktionMotion } from "../modules/animations/fotoproduktion-motion";
import { initVideoproduktionSubpageMotion } from "../modules/animations/videoproduktion-motion";
import { initBtsSlider } from "../modules/slider/bts-slider";
import { initReferenceSlider } from "../modules/slider/ref-slider";
import { initRefPlayer } from "../modules/videos/ref-player";
import { initBeispiel } from "../modules/beispiel-vid-slid";
import { initFotoBeispielSlider } from "../modules/slider/foto-beispiel-slider";

// Initialize all routes
export const initRoutes = () => {
  // Home page route
  new WFRoute("/").execute(() => {
    console.log("🏠 Home Page - Initializing components");
    initTestimonialSlider();
    initReferenceSlider();
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
    initFotoBeispielSlider();
    initFotoproduktionMotion();
  });

  // Team page route
  new WFRoute("/referenzen").execute(() => {
    console.log(" Ref Page - Initializing components");
    initMotionHeader();
    initRefPlayer();
  });

  new WFRoute("/erklaer-animationsvideos").execute(() => {
    console.log(" Animation - Initializing components");
    initBeispiel();
  });

  // Team page route
  new WFRoute("/team").execute(() => {
    console.log("👥 Team Page - Initializing components");
    initMotionHeader();
    initBtsSlider();
    initVideoPlayer();
  });

  // Main Videoproduktion page
  new WFRoute("/videoproduktion").execute(() => {
    console.log("🎬 Videoproduktion Main Page - Initializing components");
    initVideoproduktionenMotion();
    initBeispielPlayer();
    initBeispielSlider();
  });

  // All videoproduktion subpages - using regex pattern instead of wildcards
  new WFRoute("/videoproduktion/(.*)").execute(() => {
    console.log("🎥 Videoproduktion Subpage - Initializing components");
    initMotionHeader();
    initVideoproduktionSubpageMotion();
    initBeispiel();
  });
};

// Legacy exports for backward compatibility
export const HomeRoute = () => {
  // Removed duplicate testimonial slider initialization
  // new WFRoute("/").execute(initTestimonialSlider);
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
  new WFRoute("/team").execute(initBtsSlider);
};

export const RefRoute = () => {
  new WFRoute("/referenzen").execute(initMotionHeader);
  new WFRoute("/referenzen").execute(initVideoPlayer);
};

export const VideoproduktionenRoute = () => {
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
    console.log("foto moin");
    initMotionHeader();
    initBilderSlider();
    initFotoBeispielSlider();
    initFotoproduktionMotion();
  });
};
