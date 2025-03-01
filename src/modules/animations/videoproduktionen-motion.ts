import { animate, inView, scroll, stagger } from "motion";

export const initVideoproduktionenMotion = () => {
    console.log('Initializing videoproduktionen motion animations');
    
    // Animate header content on page load
    animateHeader();
    
    // Set up scroll-triggered animations for sections
    setupScrollAnimations();
    
    // Add hover effects to cards
    setupCardHoverEffects();
    
    // Monitor and ensure videos keep playing
    ensureVideosKeepPlaying();
};

// Add this new function to monitor and restart videos
const ensureVideosKeepPlaying = () => {
    console.log('Setting up enhanced video playback monitoring');
    
    // Get all video elements
    const videoElements = document.querySelectorAll('.video-plyr');
    
    if (videoElements.length === 0) {
        console.warn('No video elements found to monitor');
        return;
    }
    
    console.log(`Monitoring ${videoElements.length} video elements`);
    
    // Apply additional attributes to each video to help with playback
    videoElements.forEach((video, index) => {
        if (video instanceof HTMLVideoElement) {
            // Set important attributes to ensure continuous playback
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.autoplay = true;
            video.setAttribute('playsinline', '');
            video.setAttribute('webkit-playsinline', '');
            video.setAttribute('data-monitored', 'true');
            
            // Set a short loop duration by limiting the playback time
            // This will make the video effectively loop every 2 seconds
            const setShortLoop = () => {
                // Get the actual duration of the video
                const actualDuration = video.duration;
                // If the video is longer than 2 seconds, we'll create a virtual loop
                if (actualDuration > 2) {
                    // Set up a timeupdate listener to reset the video position
                    video.addEventListener('timeupdate', () => {
                        // If the current time exceeds 2 seconds, reset to beginning
                        if (video.currentTime > 2) {
                            video.currentTime = 0;
                        }
                    });
                }
                console.log(`Set short loop for video ${index} (actual duration: ${actualDuration}s)`);
            };
            
            // Wait for metadata to be loaded to get the duration
            if (video.readyState >= 1) {
                setShortLoop();
            } else {
                video.addEventListener('loadedmetadata', setShortLoop);
            }
            
            // Force play on load
            video.load();
            
            // Add event listeners with more aggressive restart
            video.addEventListener('pause', () => {
                console.log(`Video ${index} paused - forcing restart`);
                // Use a more aggressive approach to restart
                setTimeout(() => {
                    video.currentTime = 0;
                    const playPromise = video.play();
                    if (playPromise) {
                        playPromise.catch(() => {
                            console.log(`Retry play for video ${index}`);
                            // Try again with a delay
                            setTimeout(() => video.play(), 100);
                        });
                    }
                }, 50);
            });
            
            video.addEventListener('ended', () => {
                console.log(`Video ${index} ended - restarting`);
                video.currentTime = 0;
                video.play();
            });
            
            // Try to play immediately
            try {
                video.play();
            } catch (e) {
                console.error(`Initial play failed for video ${index}:`, e);
            }
        }
    });
    
    // More aggressive monitoring interval (check every second)
    setInterval(() => {
        videoElements.forEach((video, index) => {
            if (video instanceof HTMLVideoElement) {
                // Check if video is paused, ended, or has error
                if (video.paused || video.ended) {
                    console.log(`Video ${index} not playing - forcing restart`);
                    
                    // Reset and force play
                    video.currentTime = 0;
                    video.muted = true; // Ensure muted to bypass autoplay restrictions
                    
                    try {
                        const playPromise = video.play();
                        if (playPromise) {
                            playPromise.catch(error => {
                                console.error(`Error restarting video ${index}:`, error);
                                // Try one more time with a delay
                                setTimeout(() => video.play(), 200);
                            });
                        }
                    } catch (e) {
                        console.error(`Exception trying to restart video ${index}:`, e);
                    }
                }
            }
        });
    }, 1000);
    
    // Add a document visibility change listener to restart videos when tab becomes visible
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            console.log('Page became visible - checking all videos');
            videoElements.forEach((video, index) => {
                if (video instanceof HTMLVideoElement && (video.paused || video.ended)) {
                    console.log(`Restarting video ${index} after visibility change`);
                    video.play().catch(e => console.error(`Visibility restart failed for video ${index}:`, e));
                }
            });
        }
    });

    // Handle Plyr error events directly
    const plyrContainers = document.querySelectorAll('.plyr');
    plyrContainers.forEach((container, index) => {
        container.addEventListener('error', (event) => {
            console.log(`Plyr container ${index} error event - attempting recovery`);
            
            // Find the video element inside this container
            const video = container.querySelector('video');
            if (video instanceof HTMLVideoElement) {
                // Reset video state completely
                video.pause();
                video.currentTime = 0;
                video.load();
                
                // Force muted state to help with autoplay
                video.muted = true;
                video.setAttribute('muted', '');
                
                // Try to play after a short delay
                setTimeout(() => {
                    const playPromise = video.play();
                    if (playPromise) {
                        playPromise.catch(() => {
                            console.log(`Recovery attempt for Plyr ${index} failed - trying one more time`);
                            setTimeout(() => video.play(), 500);
                        });
                    }
                }, 100);
            }
        });
    });

    // Add a more robust recovery mechanism for network issues
    window.addEventListener('online', () => {
        console.log('Network connection restored - recovering videos');
        videoElements.forEach((video, index) => {
            if (video instanceof HTMLVideoElement) {
                // Reload and restart video when network comes back
                video.load();
                video.play().catch(e => console.error(`Network recovery failed for video ${index}:`, e));
            }
        });
    });
};

// Function to animate header elements without SplitJS
const animateHeader = () => {
    const headerTitle = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_hero-sektion_heading');
    const headerText = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_hero-sektion_paragraph');
    const headerButton = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_hero-sektion_button');
    
    // Animate title as a whole element
    if (headerTitle) {
        animate(
            headerTitle,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, easing: [0.25, 0.1, 0.25, 1] }
        );
    }
    
    // Animate text as a whole element
    if (headerText) {
        animate(
            headerText,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, delay: 0.2, easing: [0.25, 0.1, 0.25, 1] }
        );
    }
    
    // Animate button
    if (headerButton) {
        animate(
            headerButton,
            { opacity: [0, 1], y: [20, 0] },
            { duration: 0.8, delay: 0.4, easing: [0.25, 0.1, 0.25, 1] }
        );
    }
};

const setupScrollAnimations = () => {
    // Fix the scroll animation for the vorteile section image
    const vorteileSection = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion');
    const vorteileImage = document.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_image');
    
    if (vorteileSection && vorteileImage) {
        scroll(
            ({ y }) => {
                if (y && typeof y.progress === 'number') {
                    vorteileImage.style.transform = `translateY(${y.progress * 50}px)`;
                }
            },
            { target: vorteileSection }
        );
    }
    
    // Safely set up inView animations with proper null checks
    inView('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_component .text-align-center', (entry) => {
        const target = entry.target;
        if (!target) return false;
        
        const elements = target.querySelectorAll('.text-style-tagline, h2, p');
        if (elements.length > 0) {
            animate(
                elements,
                { opacity: [0, 1], y: [30, 0] },
                { delay: stagger(0.15), duration: 0.7, easing: [0.25, 0.1, 0.25, 1] }
            );
        }
        return false; // Run animation only once
    });

    // Animate the video cards when they come into view
    inView('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_grid-list', (entry) => {
        const target = entry.target;
        if (!target) return false;
        
        const cards = target.querySelectorAll('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_card-large, .professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_card-small');
        if (cards.length > 0) {
            animate(
                cards,
                { opacity: [0, 1], scale: [0.9, 1], y: [30, 0] },
                { delay: stagger(0.1), duration: 0.7, easing: [0.25, 0.1, 0.25, 1] }
            );
        }
        return false; // Run animation only once
    });

    // Animate the vorteile section
    inView('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_component', (entry) => {
        const target = entry.target;
        if (!target) return false;
        
        const textElements = target.querySelectorAll('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_content-left > *');
        if (textElements.length > 0) {
            animate(
                textElements,
                { opacity: [0, 1], x: [-30, 0] },
                { delay: stagger(0.15), duration: 0.7, easing: [0.25, 0.1, 0.25, 1] }
            );
        }
        
        const image = target.querySelector('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_vorteile-sektion_image');
        if (image) {
            animate(
                image,
                { opacity: [0, 1], scale: [0.9, 1] },
                { duration: 1, easing: [0.25, 0.1, 0.25, 1] }
            );
        }
        
        return false; // Run animation only once
    });

    // Animate the CTA section
    inView('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_cta-sektion_component', (entry) => {
        const target = entry.target;
        if (!target) return false;
        
        animate(
            target,
            { opacity: [0, 1], y: [50, 0] },
            { duration: 0.8, easing: [0.25, 0.1, 0.25, 1] }
        );
        return false; // Run animation only once
    });
};

const setupCardHoverEffects = () => {
    // Add hover effects to all video cards
    const cards = document.querySelectorAll('.professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_card-large, .professionelle-videoproduktion-kreative-losungen-fur-ihre-marke_features-liste-sektion-1_card-small');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            animate(
                card,
                { y: -10, scale: 1.02 },
                { duration: 0.3, easing: [0.25, 0.1, 0.25, 1] }
            );
        });
        
        card.addEventListener('mouseleave', () => {
            animate(
                card,
                { y: 0, scale: 1 },
                { duration: 0.3, easing: [0.25, 0.1, 0.25, 1] }
            );
        });
    });

    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.button-main, .button');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            animate(
                button,
                { scale: 1.05 },
                { duration: 0.2, easing: [0.25, 0.1, 0.25, 1] }
            );
        });
        
        button.addEventListener('mouseleave', () => {
            animate(
                button,
                { scale: 1 },
                { duration: 0.2, easing: [0.25, 0.1, 0.25, 1] }
            );
        });
    });
};
