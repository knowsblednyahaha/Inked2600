import {useState, useEffect} from 'react'
import { gsap } from "gsap";
import { lerp, getMousePos, getSiblings } from "./utils.js";


// Grab the mouse position and set it to mouse state
let mouse = { x: 0, y: 0 };
window.addEventListener("mousemove", (ev) => (mouse = getMousePos(ev)));
export default class Cursor {
    constructor(el) {
      // Varibles
        this.Cursor = el;
        this.Cursor.style.opacity = 0;
        this.Item = document.querySelectorAll(".text-header");
        this.Text = document.querySelector(".hover-text");
        this.Img = document.querySelectorAll(".swiper-container .image-container");
        this.Hi = document.querySelector(".big-text-container a");
        // console.log(this.Hi);
        
        // this.selectedTheme = localStorage.getItem("selectedTheme");
        // const [theme, setTheme] = useState("");
        
        // console.log(selectedTheme)
        this.bounds = this.Cursor.getBoundingClientRect();
        this.cursorConfigs = {
            x: { previous: 0, current: 0, amt: 0.2 },
            y: { previous: 0, current: 0, amt: 0.2 },
        };
        this.onMouseMoveEv = () => {
            this.cursorConfigs.x.previous = this.cursorConfigs.x.current = mouse.x;
            this.cursorConfigs.y.previous = this.cursorConfigs.y.current = mouse.y;

            // Set cursor opacity to 1 when hovered on screen
            gsap.to(this.Cursor, {
            duration: 1,
            ease: "Power3.easeOut",
            opacity: 1,
            });

            // //Execute Scale
            // this.onScaleMouse();
            // //Execute Hover Text
            // this.onHover();
            // console.log("rendered")
            if(window.location.pathname === '/'){
                //this is JavaScript for the home page
                //Execute Scale
                this.onScaleMouse();
                //Execute Hover Text
                this.onHover();
                this.hoverContactPage();
                // console.log("rendered")
            }
            else if(window.location.pathname === '/about'){
                this.hoverContactPage();
            }
            else if(window.location.pathname === '/artist/1'){
                this.hoverContactPage();
            }

            // The window.requestAnimationFrame() method tells the browser
            // that you wish to perform an animation and requests that the browser
            // calls a specified function to update an animation before the next repaint.
            // The method takes a callback as an argument to be invoked before the repaint.
            requestAnimationFrame(() => this.render());
            // Clean up function
            window.removeEventListener("mousemove", this.onMouseMoveEv);
        };
        // Scale cursor animation
        window.addEventListener("mousemove", this.onMouseMoveEv);
    }
    onHover(){
        if (this.Text.matches(":hover")) {
            this.Cursor.classList.add("media-blend");
            gsap.to(this.Cursor.children[1], {
                duration: 0.6,
                opacity: 1,
                ease: "Power3.easeOut",
            });
        }
        this.Text.addEventListener("mouseover", () => {
            this.Cursor.classList.add("media-blend");
            gsap.to(this.Cursor.children[1], {
                duration: 0.6,
                opacity: 1,
                ease: "Power3.easeOut",
            });
        });
        this.Text.addEventListener("mouseout", () => {
            this.Cursor.classList.remove("media-blend");
            gsap.to(this.Cursor.children[1], {
                duration: 0.6,
                opacity:0,
                ease: "Power3.easeOut",
            });
        });
        this.Text.addEventListener("click", () => {
            gsap.to(this.Cursor.children[1], {
                duration: 0.6,
                opacity: 0,
                ease: "Power3.easeOut",
            });
        });
        this.Img.forEach((img) => {
            img.children[0].addEventListener("mouseenter", () => {
                gsap.to(this.Cursor.children[2], {
                    duration: 0.6,
                    opacity:1,
                    ease: "Power3.easeOut",
                });
            });
            img.children[0].addEventListener("mouseleave", () => {
                gsap.to(this.Cursor.children[2], {
                    duration: 0.6,
                    opacity:0,
                    ease: "Power3.easeOut",
                });
            });
        });
    }
    hoverContactPage(){
        this.Hi.addEventListener("mouseenter", () => {
            gsap.to(this.Cursor.children[3], {
                duration: 0.6,
                opacity: 1,
                ease: "Power3.easeOut",
            });
        });
        this.Hi.addEventListener("mouseleave", () => {
            gsap.to(this.Cursor.children[3], {
                duration: 0.6,
                opacity:0,
                ease: "Power3.easeOut",
            });
        });
    }
    
    onScaleMouse() {
        this.Item.forEach((link) => {
            if (link.matches(":hover")) {
                this.ScaleCursor(this.Cursor.children[0], 0.8);
            }
            let backcolor = document.querySelector("body").style.getPropertyValue("background-color");
            link.addEventListener("mouseenter", () => {
                this.Cursor.classList.add("media-blend");
                this.ScaleCursor(this.Cursor.children[0], 0.8);
                document.querySelector('.cursor').style.setProperty("--body_color", "transparent");
            });
            link.addEventListener("mouseleave", () => {
                this.Cursor.classList.remove("media-blend");
                this.ScaleCursor(this.Cursor.children[0], 0);
                document.querySelector('.cursor').style.setProperty("--body_color", backcolor);
            });
        });
    }
    ScaleCursor(el, amount) {
        gsap.to(el, {
        duration: 0.6,
        scale: amount,
        ease: "Power3.easeOut",
        });
    }

    render() {
        this.cursorConfigs.x.current = mouse.x;
        this.cursorConfigs.y.current = mouse.y;

        // lerp
        for (const key in this.cursorConfigs) {
            // key will be x & y
            // WTF IS LERP?
            // Lerp - A lerp returns the value between two numbers at a specified, decimal midpoint:
            this.cursorConfigs[key].previous = lerp(
            this.cursorConfigs[key].previous,
            this.cursorConfigs[key].current,
            this.cursorConfigs[key].amt
            );
        }
            // Setting the cursor x and y to our cursoer html element
            this.Cursor.style.transform = `translateX(${this.cursorConfigs.x.previous}px) translateY(${this.cursorConfigs.y.previous}px)`;
            // RAF
            requestAnimationFrame(() => this.render());
    }
}