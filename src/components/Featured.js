import React from 'react'
import '../components/Featured.css'
import { Link } from 'react-router-dom' 
import featured from '../assets/featured.png'
function Featured() {
    return (
        <>
            <div className="featured">
                <h1>FEATURED PRODUCTS</h1>
                <svg className="hero-svg" width="132" height="20" viewBox="0 0 132 20">
                        <g transform="translate(-617 -932)">
                            <line class="a" x2="48" transform="translate(617 942)"/>
                            <line class="a" x2="48" transform="translate(701 942)"/>
                            <text class="b" transform="translate(677.5 947)">
                                <tspan x="0" y="0">x</tspan>
                            </text>
                        </g>
                </svg>
                <div className="featured-area">
                    <svg  class="pointer-svg-left" width="53.741" height="88" viewBox="0 0 53.741 88">
                        <path class="a" d="M39.45,44.116,9.177,13.867a5.693,5.693,0,0,1,0-8.074,5.765,5.765,0,0,1,8.1,0l34.3,34.275a5.707,5.707,0,0,1,.167,7.884L17.3,82.464a5.718,5.718,0,0,1-8.1-8.074Z" transform="translate(-3.498 -0.131)"/>
                    </svg>
                    <div className="featured-card">
                        <div className="featured-image-area">
                            <div class="sale"><p>SALE</p></div>
                            <img src={ featured } alt="Featured Image"/>
                            <div className="image-pointer">
                                <svg width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
                                    <rect width="10" height="10" transform="translate(0 7.071) rotate(-45)"/>
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
                                <svg className="image-svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
                                    <g class="a" transform="translate(0 7.071) rotate(-45)">
                                        <rect class="b" width="10" height="10"/>
                                        <rect class="c" x="1" y="1" width="8" height="8"/>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className="featured-info">
                            <h3 className="featured-info-title">Sonos SUB Wireless Subwoofer</h3>
                            <p className="featured-review">(0 customer review)</p>
                            <h3 className="featured-price"><span className="featured-discount">$999.00</span> &nbsp;$929.00</h3>
                            <ul className="featured-info-list">
                                <li className="featured-list">Adds dramatically deeper bass to any Sonos speaker (or amplified component).</li>
                                <li className="featured-list">Zero cabinet buzz or rattle. Versatile.</li>
                                <li className="featured-list">Place it anywhere.</li>
                                <li className="featured-list">Standing up or lying flat. One-button setup.</li>
                                <li className="featured-list">Connects to the internet through your home…<Link className="read-more">Read More</Link></li>
                            </ul>
                            <div className="featured-buttons">
                                <button class="cart">ADD TO CART</button>
                                <button className="wishlist">ADD TO WISHLIST</button>
                            </div>
                        </div>
                    </div>
                    <svg  class="pointer-svg-right" width="53.741" height="88" viewBox="0 0 53.741 88">
                        <path class="a" d="M39.45,44.116,9.177,13.867a5.693,5.693,0,0,1,0-8.074,5.765,5.765,0,0,1,8.1,0l34.3,34.275a5.707,5.707,0,0,1,.167,7.884L17.3,82.464a5.718,5.718,0,0,1-8.1-8.074Z" transform="translate(-3.498 -0.131)"/>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Featured
