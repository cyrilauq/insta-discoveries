import '../scss/style.scss'
import { gsap } from 'gsap'
import SplitType from 'split-type'

const hero = document.querySelector('.hero');
const menuSection = document.querySelector('.menu-section')
const menuIcon = document.querySelector('.menu-icon')
const menuIconLine = document.querySelectorAll('.menu-icon__line')
const menuLinks = document.querySelectorAll('.menu-link')
const menuItems = new gsap.utils.toArray('.menu .mask')
const menuItemsIcons = new gsap.utils.toArray('.arrow-svg')

const heroText = new SplitType('.hero', { types: 'chars' })

// Create a timeline and give it default values
// With that, every animations that is on this timeline will inherits the default values
const tl = gsap.timeline({
    defaults: {
        ease: 'power4.inOut',
        duration: 1.5
    }
});

// Set the initial properties of the menuSection
// We can replace "menuSection" by '.menu-section' and the animation will be set for all the element with that class
gsap.set(menuSection, {
    scaleY: 0,
})

// Set the initial properties of the menuItems
gsap.set(menuItems, {
    yPercent: 100
})

// Set the initial properties of the menuItemsIcons
gsap.set(menuItemsIcons, {
    scale: 0
})

// Set the initial properties of the heroText
gsap.set(heroText.chars, {
    y: 100, // y => shortcut for translateY, so it will bring the element to 100 on axe Y
    scale: 0, // resize the element to 0
    opacity: 0 // set the opacity to 0
})

// "Tells" the element to be that
gsap.to(heroText.chars, {
    y: 0, // bring the element at the position 0 on the y axe 
    scale: 1, // Size of the text
    opacity: 1, // set the opacity to 1
    stagger: .02,
    duration: .8, // set the animation duration to 0.8 seconds
    ease: 'power2.in',
})

tl
    .to(hero, {
        scale: 0.85,
    })
    .to(menuIconLine, {
        backgroundColor: '#fff'
    }, "<")
    .to(menuSection, {
        scaleY: 1,
    }, "-=1.5")
    .to(menuItems, {
        yPercent: 0,
        stagger: .1
    }, "-=1")
tl.pause()

let menuOpen = false

menuIcon.addEventListener('click', () => {
    gsap.set(menuSection, {
        transformOrigin: menuOpen ? 'top' : 'bottom'
    })
    if (!menuOpen) {
        // begin the animation
        tl.play()
        menuOpen = true
    } else {
        // play the animation but in reverse
        tl.reverse()
        menuOpen = false
    }
})


menuLinks.forEach(link => {
    let linkIcon = link.querySelector('.arrow-svg')
    let linkText = link.querySelector('a')

    // Listen the event "mouseenter", to do action when the mouse enter the element
    link.addEventListener('mouseenter', () => {
        gsap.to(linkIcon, {
            scale: 1
        })
        gsap.to(linkText, {
            x: 20
        })
    })
    // Listen the event "mouseleave", to do action when the mouse leave the element
    link.addEventListener('mouseleave', () => {
        gsap.to(linkIcon, {
            scale: 0
        })
        gsap.to(linkText, {
            x: -20
        })
    })
})