import { onReady } from "@xatom/core";
import { initRoutes } from "./routes";
import { initMotionHeader } from "./modules/animations/motion-header";
import { initMultiStepForm } from "./modules";
import { initCaptcha } from "./modules/captcha";

onReady(() => {
  // Initialize global components
  initMotionHeader();

  // Initialize all routes
  initRoutes();

  // Special case for contact page
  if (window.location.pathname.includes("/kontakt")) {
    console.log("📝 Contact Page - Initializing components");
    initMultiStepForm();
    initCaptcha();
  }
});
