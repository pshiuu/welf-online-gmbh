import { animate, scroll, inView, stagger } from "motion"



export const initHomeMotion = () => {

    // Select all cards
    const smallCards = document.querySelectorAll(".zuhause_features-liste-sektion_card-small")
    const mediumCards = document.querySelectorAll(".zuhause_features-liste-sektion_card-medium")
    const largeCards = document.querySelectorAll(".zuhause_features-liste-sektion_card-large")

    // Helper function for card animations
    const setupCardAnimation = (card: Element, initialY: number = 50, initialX: number = 0) => {
        // Initial state
        animate(card, { 
            opacity: 0, 
            y: initialY,
            x: initialX,
            scale: 0.9
        }, { duration: 0 })
        
        // Scroll animation
        scroll(
            animate(card, { 
                opacity: [0, 1],
                y: [initialY, 0],
                x: [initialX, 0],
                scale: [0.9, 1]
            }),
            { 
                target: card,
                offset: ["start 80%", "start 40%"] // Starts when card top hits 80% of viewport, ends when it hits 40%
            }
        )
    }

    // Apply animations with different initial positions
    smallCards.forEach((card, i) => {
        setupCardAnimation(card, 50, 0)
        
        // Hover animations remain the same
        card.addEventListener("mouseenter", () => {
            animate(card, { 
                scale: 1.03,
                y: -5
            }, {
                duration: 0.3,
                easing: "ease-out"
            })
        })

        card.addEventListener("mouseleave", () => {
            animate(card, { 
                scale: 1,
                y: 0
            }, {
                duration: 0.3,
                easing: "ease-out"
            })
        })
    })

    mediumCards.forEach((card, i) => {
        setupCardAnimation(card, 0, -50)
        
        // Hover animations remain the same
        card.addEventListener("mouseenter", () => {
            animate(card, { 
                scale: 1.05,
                rotate: 1
            }, {
                duration: 0.3,
                easing: "ease-out"
            })
        })

        card.addEventListener("mouseleave", () => {
            animate(card, { 
                scale: 1,
                rotate: 0
            }, {
                duration: 0.3,
                easing: "ease-out"
            })
        })
    })

    largeCards.forEach((card, i) => {
        setupCardAnimation(card, 30, 0)
        
        // Hover animations remain the same
        card.addEventListener("mouseenter", () => {
            animate(card, { 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }, {
                duration: 0.4,
                easing: "ease-out"
            })
        })

        card.addEventListener("mouseleave", () => {
            animate(card, { 
                scale: 1,
                boxShadow: "0 0 0 rgba(0,0,0,0)"
            }, {
                duration: 0.4,
                easing: "ease-out"
            })
        })
    })

    // Benefits items animation
    const benefitsItems = document.querySelectorAll(".zuhause_benefits_item")
    
    benefitsItems.forEach((item, i) => {
        // Initial state
        animate(item, { 
            opacity: 0, 
            x: -100,
            scale: 0.95
        }, { duration: 0 })
        
        // Scroll animation with improved visibility trigger
        scroll(
            animate(item, { 
                opacity: [0, 1],
                x: [-100, 0],
                scale: [0.95, 1]
            }),
            { 
                target: item,
                offset: ["start 85%", "start 65%"] // Starts earlier, finishes when clearly visible
            }
        )
    })
};


