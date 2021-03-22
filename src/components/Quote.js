import React from 'react'
import '../components/Quote.css'
import person from '../assets/person.png'
function Quote() {
    return (
        <>
            <div className="quote">
            <svg className="pointer-svg-left" width="53.741" height="88" viewBox="0 0 53.741 88">
                <path class="a" d="M39.45,44.116,9.177,13.867a5.693,5.693,0,0,1,0-8.074,5.765,5.765,0,0,1,8.1,0l34.3,34.275a5.707,5.707,0,0,1,.167,7.884L17.3,82.464a5.718,5.718,0,0,1-8.1-8.074Z" transform="translate(-3.498 -0.131)"/>
            </svg>
            <div className="quote-info">
                <img src={ person } alt="person image"/>
                <h1>Glasgow den</h1>
                <h3>IOS developer</h3>
                <p>“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected of passages ofeven alteration in some form, by injected of passages ofeven slightly b.elievable.”</p>
                <div className="svg-pointer">
                    <svg className="image-svgs" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
                        <rect class="a" width="10" height="10" transform="translate(0 7.071) rotate(-45)"/>
                    </svg>
                    <svg className="image-svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
                        <g class="a" transform="translate(0 7.071) rotate(-45)">
                            <rect class="b" width="10" height="10"/>
                            <rect class="c" x="1" y="1" width="8" height="8"/>
                        </g>
                    </svg>
                    <svg className="image-svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
                        <g class="a" transform="translate(0 7.071) rotate(-45)">
                            <rect class="b" width="10" height="10"/>
                            <rect class="c" x="1" y="1" width="8" height="8"/>
                        </g>
                    </svg>
                 </div>
            </div>
            <svg className="pointer-svg-right" width="53.741" height="88" viewBox="0 0 53.741 88">
                <path class="a" d="M39.45,44.116,9.177,13.867a5.693,5.693,0,0,1,0-8.074,5.765,5.765,0,0,1,8.1,0l34.3,34.275a5.707,5.707,0,0,1,.167,7.884L17.3,82.464a5.718,5.718,0,0,1-8.1-8.074Z" transform="translate(-3.498 -0.131)"/>
            </svg>
            </div>
        </>
    )
}

export default Quote
