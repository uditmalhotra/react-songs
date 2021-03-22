import React, {useState} from 'react'
import '../components/Products.css'
import product1 from '../assets/product1.png'
import product2 from '../assets/product2.png'
import product3 from '../assets/product3.png'
function Products() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const optionswitch1 = () => setHover1(!hover1);
    const optionswitch2 = () => setHover2(!hover2);
    const optionswitch3 = () => setHover3(!hover3);
    return (
        <>
           <div className="products">
                <h1>LATEST PRODUCTS</h1>
                <svg className="products-svg" width="132" height="20" viewBox="0 0 132 20">
                        <g transform="translate(-617 -932)">
                            <line class="a" x2="48" transform="translate(617 942)"/>
                            <line class="a" x2="48" transform="translate(701 942)"/>
                            <text class="b" transform="translate(677.5 947)">
                                <tspan x="0" y="0">x</tspan>
                            </text>
                        </g>
                </svg>
                <div className="products-div">
                    <svg  class="pointer-svg-left" width="53.741" height="88" viewBox="0 0 53.741 88">
                        <path class="a" d="M39.45,44.116,9.177,13.867a5.693,5.693,0,0,1,0-8.074,5.765,5.765,0,0,1,8.1,0l34.3,34.275a5.707,5.707,0,0,1,.167,7.884L17.3,82.464a5.718,5.718,0,0,1-8.1-8.074Z" transform="translate(-3.498 -0.131)"/>
                    </svg>
                    <div className="products-area">
                        <div className="products-card">
                            <div className="image-container" onMouseOver={optionswitch1} >
                                <img src={ product1 } alt="products image"/>
                            </div>
                            <div className={hover1 ? 'img-cover' : 'img-cover-none'} onMouseLeave={optionswitch1}>
                                <div></div>
                                <p>SALE</p>
                                <svg  className="sale-svg" width="106.352" height="119.533" viewBox="0 0 106.352 119.533">
                                    <path class="a" d="M25,0,62.359,64.674-38.325,36.709Z" transform="translate(19.163 54.005) rotate(-60)"/>
                                </svg>
                                <svg className="heart-svg" width="22.303" height="19.632" viewBox="0 0 22.303 19.632">
                                    <path class="a" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.849 -2.298)"/>
                                </svg>
                                <button>ADD TO CART</button>
                            </div>
                            <h5>SONOS PLAY:5 WIRELESS SPEAKER</h5>
                            <p><span className="discount">$749.00</span>&nbsp;&nbsp;&nbsp;$650.00</p>
                        </div>
                        <div className="products-card">
                            <div className="image-container" onMouseOver={optionswitch2} >   
                                <img src={ product2 } alt="products image"/>
                            </div>
                            <div className={hover2 ? 'img-cover' : 'img-cover-none'} onMouseLeave={optionswitch2}>
                                <div></div>
                                <p>SALE</p>
                                <svg  className="sale-svg" width="106.352" height="119.533" viewBox="0 0 106.352 119.533">
                                    <path class="a" d="M25,0,62.359,64.674-38.325,36.709Z" transform="translate(19.163 54.005) rotate(-60)"/>
                                </svg>
                                <svg className="heart-svg" width="22.303" height="19.632" viewBox="0 0 22.303 19.632">
                                    <path class="a" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.849 -2.298)"/>
                                </svg>
                                <button>ADD TO CART</button>
                            </div>
                            <h5>Flexson PLAY : 5 Gen2 Wall Mount</h5>
                            <p><span className="discount">$195.95</span>&nbsp;&nbsp;&nbsp;$194.95</p>
                        </div>
                        <div className="products-card">
                            <div className="image-container" onMouseOver={optionswitch3} >
                                <img src={ product3 } alt="products image"/>
                            </div>
                            <div className={hover3 ? 'img-cover' : 'img-cover-none'} onMouseLeave={optionswitch3}>
                                <div></div>
                                <p>SALE</p>
                                <svg  className="sale-svg" width="106.352" height="119.533" viewBox="0 0 106.352 119.533">
                                    <path class="a" d="M25,0,62.359,64.674-38.325,36.709Z" transform="translate(19.163 54.005) rotate(-60)"/>
                                </svg>
                                <svg className="heart-svg" width="22.303" height="19.632" viewBox="0 0 22.303 19.632">
                                    <path class="a" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z" transform="translate(-0.849 -2.298)"/>
                                </svg>
                                <button>ADD TO CART</button>
                            </div>
                            <h5>Sonos Boost</h5>
                            <p><span className="discount">$149.00</span>&nbsp;&nbsp;&nbsp;$149.00</p>
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

export default Products
