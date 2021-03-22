import React, {useState} from 'react'
import '../components/BlogNews.css'
import blognews1 from '../assets/blognews1.png'
import blognews2 from '../assets/blognews2.png'
import blognews3 from '../assets/blognews3.png'
function BlogNews() {
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const optionswitch1 = () => setHover1(!hover1);
    const optionswitch2 = () => setHover2(!hover2);
    const optionswitch3 = () => setHover3(!hover3);
    return (
        <>
           <div className="blognews">
                <h1>LATEST PRODUCTS</h1>
                <svg className="blognews-svg" width="132" height="20" viewBox="0 0 132 20">
                        <g transform="translate(-617 -932)">
                            <line class="a" x2="48" transform="translate(617 942)"/>
                            <line class="a" x2="48" transform="translate(701 942)"/>
                            <text class="b" transform="translate(677.5 947)">
                                <tspan x="0" y="0">x</tspan>
                            </text>
                        </g>
                </svg>
                <div className="blognews-area">
                <div className="blognews-card">
                        <div className="image-container" onMouseOver={optionswitch1} >
                            <img src={ blognews1 } alt="products image"/>
                        </div>
                        <div className={hover1 ? 'img-cover' : 'img-cover-none'} onMouseLeave={optionswitch1}>
                            <div><p>VIEW MORE</p></div>
                        </div>
                        <div className="blognews-info">
                            <div className="date">
                                <h1>20</h1>
                                <p>Aug 2019</p>
                            </div>
                            <div className="info">
                                <h2>Removal of ‘On this iPhone/ iPad’ feature</h2>
                                <p>Playback with the ‘On this iPhone/iPad’ feature will be removed from the Sonos app this month. Customers who are still using…</p>
                            </div>
                        </div>
                    </div>
                    <div className="blognews-card">
                        <div className="image-container" onMouseOver={optionswitch2} >
                            <img src={ blognews2 } alt="products image"/>
                        </div>
                        <div className={hover2 ? 'img-cover' : 'img-cover-none'} onMouseLeave={optionswitch2}>
                            <div><p>VIEW MORE</p></div>
                        </div>
                        <div className="blognews-info">
                            <div className="date">
                                <h1>20</h1>
                                <p>Aug 2019</p>
                            </div>
                            <div className="info">
                                <h2>Flexson VinylPlay</h2>
                                <p>Sonos fans, Lovers of vinyl, prepare to be amazed! Not only is the record coming back but there is now a way to stream it directly…</p>
                            </div>
                        </div>
                    </div>
                    <div className="blognews-card">
                        <div className="image-container" onMouseOver={optionswitch3} >
                            <img src={ blognews3 } alt="products image"/>
                        </div>
                        <div className={hover3 ? 'img-cover' : 'img-cover-none'} onMouseLeave={optionswitch3}>
                            <div><p>VIEW MORE</p></div>
                        </div>
                        <div className="blognews-info">
                            <div className="date">
                                <h1>20</h1>
                                <p>Aug 2019</p>
                            </div>
                            <div className="info">
                                <h2>Playbar vs Playbase, spoilt for choice.</h2>
                                <p>If you are like me, deciding to stay in and watch a movie rather than battle parking and expensive snacks at the local theatre, is a…</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogNews
