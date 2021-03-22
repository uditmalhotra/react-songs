import React from 'react'
import { gsap} from 'gsap'
import '../components/Hero.css'
import { Power4 } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Hero() {
    gsap.registerPlugin(ScrollTrigger);
    var t1 = gsap.timeline();

    t1.from('.hero',{
        y: '-30%',
        opacity:0,
        duration: 2,
        ease: Power4.easeOut
    })
    return (
        <>
            <div className="hero container-fluid">
                <div className="hero-area container-fluid">
                    <h3>TRY SONOS</h3>
                    <h1>A BETTER WAY TO LISTEN</h1>
                    <button>ORDER NOW</button>
                </div>
            </div>
        </>
    )
}

export default Hero