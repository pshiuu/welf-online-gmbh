import { animate, scroll, inView, stagger } from "motion";


export const initFotostudioMotion = () => {


  // Animate the hero section
  const animateHero = () => {
    const heroHeading = document.querySelector('.heading-style-h1-3');
    const heroParagraph = document.querySelector('.section_header30 .text-size-medium');
    const heroButtons = document.querySelectorAll('.section_header30 .button');
    
    // Set initial states
    if (heroHeading) {
      animate(heroHeading, { 
        opacity: 0,
        y: 30
      }, { duration: 0 });
    }
    
    if (heroParagraph) {
      animate(heroParagraph, { 
        opacity: 0,
        y: 20
      }, { duration: 0 });
    }
    
    heroButtons.forEach(button => {
      animate(button, { 
        opacity: 0,
        y: 15,
        scale: 0.95
      }, { duration: 0 });
    });
    
    // Animate in sequence
    setTimeout(() => {
      if (heroHeading) {
        animate(heroHeading, { 
          opacity: 1,
          y: 0
        }, { 
          duration: 0.8,
          easing: [0.25, 0.1, 0.25, 1]
        });
      }
      
      setTimeout(() => {
        if (heroParagraph) {
          animate(heroParagraph, { 
            opacity: 1,
            y: 0
          }, { 
            duration: 0.7,
            easing: [0.25, 0.1, 0.25, 1]
          });
        }
        
        setTimeout(() => {
          heroButtons.forEach((button, i) => {
            animate(button, { 
              opacity: 1,
              y: 0,
              scale: 1
            }, { 
              duration: 0.5,
              delay: i * 0.1,
              easing: [0.25, 0.1, 0.25, 1]
            });
          });
        }, 200);
      }, 200);
    }, 300);
  };

  // Animate studio section
  const animateStudioSection = () => {
    const studioSection = document.querySelector('.section_layout25');
    const studioHeading = studioSection?.querySelector('.heading-style-h2');
    const studioTagline = studioSection?.querySelector('.text-style-tagline');
    const studioParagraph = studioSection?.querySelector('.text-size-medium');
    const studioItems = studioSection?.querySelectorAll('.layout25_text-wrapper');
    const studioButtons = studioSection?.querySelectorAll('.button');
    const studioImage = studioSection?.querySelector('.layout25_image');
    
    // Set initial states
    if (studioTagline) {
      animate(studioTagline, { 
        opacity: 0,
        x: -20
      }, { duration: 0 });
    }
    
    if (studioHeading) {
      animate(studioHeading, { 
        opacity: 0,
        x: -30
      }, { duration: 0 });
    }
    
    if (studioParagraph) {
      animate(studioParagraph, { 
        opacity: 0,
        x: -20
      }, { duration: 0 });
    }
    
    studioItems?.forEach(item => {
      animate(item, { 
        opacity: 0,
        y: 30
      }, { duration: 0 });
    });
    
    studioButtons?.forEach(button => {
      animate(button, { 
        opacity: 0,
        y: 15
      }, { duration: 0 });
    });
    
    if (studioImage) {
      animate(studioImage, { 
        opacity: 0,
        scale: 0.9,
        x: 30
      }, { duration: 0 });
    }
    
    // Scroll animations with reversible effects
    if (studioSection) {
      scroll(
        animate(studioTagline, { 
          opacity: [0, 1],
          x: [-20, 0]
        }),
        { 
          target: studioSection,
          offset: ["start 80%", "start 40%"]
        }
      );
      
      scroll(
        animate(studioHeading, { 
          opacity: [0, 1],
          x: [-30, 0]
        }),
        { 
          target: studioSection,
          offset: ["start 75%", "start 35%"]
        }
      );
      
      scroll(
        animate(studioParagraph, { 
          opacity: [0, 1],
          x: [-20, 0]
        }),
        { 
          target: studioSection,
          offset: ["start 70%", "start 30%"]
        }
      );
      
      studioItems?.forEach((item, i) => {
        scroll(
          animate(item, { 
            opacity: [0, 1],
            y: [30, 0]
          }),
          { 
            target: studioSection,
            offset: [`start ${65 - (i * 5)}%`, `start ${25 - (i * 5)}%`]
          }
        );
      });
      
      studioButtons?.forEach((button, i) => {
        scroll(
          animate(button, { 
            opacity: [0, 1],
            y: [15, 0]
          }),
          { 
            target: studioSection,
            offset: [`start ${60 - (i * 5)}%`, `start ${20 - (i * 5)}%`]
          }
        );
      });
      
      scroll(
        animate(studioImage, { 
          opacity: [0, 1],
          scale: [0.9, 1],
          x: [30, 0]
        }),
        { 
          target: studioSection,
          offset: ["start 70%", "start 30%"]
        }
      );
    }
  };

  // Animate gallery section
  const animateGallerySection = () => {
    const gallerySection = document.querySelector('.section_gallery8');
    const galleryHeading = gallerySection?.querySelector('.heading-style-h2');
    const galleryParagraph = gallerySection?.querySelector('.text-size-medium');
    const galleryImages = gallerySection?.querySelectorAll('.gallery8_lightbox-link');
    
    // Set initial states
    if (galleryHeading) {
      animate(galleryHeading, { 
        opacity: 0,
        y: 30
      }, { duration: 0 });
    }
    
    if (galleryParagraph) {
      animate(galleryParagraph, { 
        opacity: 0,
        y: 20
      }, { duration: 0 });
    }
    
    galleryImages?.forEach(image => {
      animate(image, { 
        opacity: 0,
        y: 50,
        scale: 0.95
      }, { duration: 0 });
    });
    
    // Scroll animations with reversible effects
    if (gallerySection) {
      scroll(
        animate(galleryHeading, { 
          opacity: [0, 1],
          y: [30, 0]
        }),
        { 
          target: gallerySection,
          offset: ["start 80%", "start 40%"]
        }
      );
      
      scroll(
        animate(galleryParagraph, { 
          opacity: [0, 1],
          y: [20, 0]
        }),
        { 
          target: gallerySection,
          offset: ["start 75%", "start 35%"]
        }
      );
      
      galleryImages?.forEach((image, i) => {
        scroll(
          animate(image, { 
            opacity: [0, 1],
            y: [50, 0],
            scale: [0.95, 1]
          }),
          { 
            target: gallerySection,
            offset: [`start ${70 - (i * 3)}%`, `start ${30 - (i * 3)}%`]
          }
        );
        
        // Add hover animations
        image.addEventListener('mouseenter', () => {
          animate(image, { 
            scale: 1.03,
            y: -5
          }, {
            duration: 0.3,
            easing: "ease-out"
          });
        });
        
        image.addEventListener('mouseleave', () => {
          animate(image, { 
            scale: 1,
            y: 0
          }, {
            duration: 0.3,
            easing: "ease-out"
          });
        });
      });
    }
  };

  // Animate benefits section
  const animateBenefitsSection = () => {
    const benefitsSection = document.querySelector('.section_fotografie_vorteile-sektion');
    const benefitsTagline = benefitsSection?.querySelector('.text-style-tagline');
    const benefitsHeading = benefitsSection?.querySelector('.heading-style-h2');
    const benefitsParagraph = benefitsSection?.querySelector('.text-size-medium');
    const benefitsItems = benefitsSection?.querySelectorAll('.fotografie_vorteile-sektion_item');
    const benefitsButtons = benefitsSection?.querySelectorAll('.button');
    const benefitsImage = benefitsSection?.querySelector('.fotografie_vorteile-sektion_image');
    
    // Set initial states
    if (benefitsTagline) {
      animate(benefitsTagline, { 
        opacity: 0,
        x: -20
      }, { duration: 0 });
    }
    
    if (benefitsHeading) {
      animate(benefitsHeading, { 
        opacity: 0,
        x: -30
      }, { duration: 0 });
    }
    
    if (benefitsParagraph) {
      animate(benefitsParagraph, { 
        opacity: 0,
        x: -20
      }, { duration: 0 });
    }
    
    benefitsItems?.forEach(item => {
      animate(item, { 
        opacity: 0,
        x: -40,
        scale: 0.95
      }, { duration: 0 });
    });
    
    benefitsButtons?.forEach(button => {
      animate(button, { 
        opacity: 0,
        y: 15
      }, { duration: 0 });
    });
    
    if (benefitsImage) {
      animate(benefitsImage, { 
        opacity: 0,
        scale: 0.9,
        x: 40
      }, { duration: 0 });
    }
    
    // Scroll animations with reversible effects
    if (benefitsSection) {
      scroll(
        animate(benefitsTagline, { 
          opacity: [0, 1],
          x: [-20, 0]
        }),
        { 
          target: benefitsSection,
          offset: ["start 80%", "start 40%"]
        }
      );
      
      scroll(
        animate(benefitsHeading, { 
          opacity: [0, 1],
          x: [-30, 0]
        }),
        { 
          target: benefitsSection,
          offset: ["start 75%", "start 35%"]
        }
      );
      
      scroll(
        animate(benefitsParagraph, { 
          opacity: [0, 1],
          x: [-20, 0]
        }),
        { 
          target: benefitsSection,
          offset: ["start 70%", "start 30%"]
        }
      );
      
      benefitsItems?.forEach((item, i) => {
        scroll(
          animate(item, { 
            opacity: [0, 1],
            x: [-40, 0],
            scale: [0.95, 1]
          }),
          { 
            target: benefitsSection,
            offset: [`start ${65 - (i * 5)}%`, `start ${25 - (i * 5)}%`]
          }
        );
      });
      
      benefitsButtons?.forEach((button, i) => {
        scroll(
          animate(button, { 
            opacity: [0, 1],
            y: [15, 0]
          }),
          { 
            target: benefitsSection,
            offset: [`start ${60 - (i * 5)}%`, `start ${20 - (i * 5)}%`]
          }
        );
      });
      
      scroll(
        animate(benefitsImage, { 
          opacity: [0, 1],
          scale: [0.9, 1],
          x: [40, 0]
        }),
        { 
          target: benefitsSection,
          offset: ["start 70%", "start 30%"]
        }
      );
    }
  };

  // Animate CTA section
  const animateCtaSection = () => {
    const ctaSection = document.querySelector('.section_cta3');
    const ctaHeading = ctaSection?.querySelector('.heading-style-h2');
    const ctaParagraph = ctaSection?.querySelector('.text-size-medium');
    const ctaButtons = ctaSection?.querySelectorAll('.button');
    
    // Set initial states
    if (ctaHeading) {
      animate(ctaHeading, { 
        opacity: 0,
        y: 30
      }, { duration: 0 });
    }
    
    if (ctaParagraph) {
      animate(ctaParagraph, { 
        opacity: 0,
        y: 20
      }, { duration: 0 });
    }
    
    ctaButtons?.forEach(button => {
      animate(button, { 
        opacity: 0,
        y: 15,
        scale: 0.95
      }, { duration: 0 });
    });
    
    // Scroll animations with reversible effects
    if (ctaSection) {
      scroll(
        animate(ctaHeading, { 
          opacity: [0, 1],
          y: [30, 0]
        }),
        { 
          target: ctaSection,
          offset: ["start 80%", "start 40%"]
        }
      );
      
      scroll(
        animate(ctaParagraph, { 
          opacity: [0, 1],
          y: [20, 0]
        }),
        { 
          target: ctaSection,
          offset: ["start 75%", "start 35%"]
        }
      );
      
      ctaButtons?.forEach((button, i) => {
        scroll(
          animate(button, { 
            opacity: [0, 1],
            y: [15, 0],
            scale: [0.95, 1]
          }),
          { 
            target: ctaSection,
            offset: [`start ${70 - (i * 5)}%`, `start ${30 - (i * 5)}%`]
          }
        );
      });
    }
  };

  // Animate split text
  const animateSplitText = () => {
    // Get all split text containers
    const splitTextElements = document.querySelectorAll('.splt');
    
    splitTextElements.forEach(element => {
      // Get all characters in this element
      const chars = element.querySelectorAll('.char');
      
      // Set initial state for all characters
      chars.forEach(char => {
        animate(char, {
          opacity: 0,
          y: 20,
          rotateX: 90
        }, { duration: 0 });
      });

      // Animate characters when container comes into view
      inView(element, () => {
        animate(
          chars,
          {
            opacity: [0, 1],
            y: [20, 0],
            rotateX: [90, 0]
          },
          {
            delay: stagger(0.02, { start: 0.1 }),
            duration: 0.6,
            easing: [.25, .25, .25, 1]
          }
        );
      }, {
        amount: 0.8 // Trigger when 80% of element is visible
      });
    });
  };

  // Run all animations
  animateHero();
  animateStudioSection();
  animateGallerySection();
  animateBenefitsSection();
  animateCtaSection();
  animateSplitText();
};
