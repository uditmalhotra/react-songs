import React, {useState} from 'react'
import { Link } from 'react-router-dom' 
import '../components/Navbar.css'
function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <span className="logo-col">L</span>O<span className="logo-col">G</span>O 
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className="nav-buttons">
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item1">
                                <Link to="/home" className="nav-links1" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/shop" className="nav-links1" onClick={closeMobileMenu}>
                                    Shop
                                </Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/services" className="nav-links1" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/blog" className="nav-links1" onClick={closeMobileMenu}>
                                    Learn
                                </Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/aboutus" className="nav-links1" onClick={closeMobileMenu}>
                                    About Us
                                </Link>
                            </li>
                            <li className="nav-item1">
                                <Link to="/contactus" className="nav-links1" onClick={closeMobileMenu}>
                                    Contact Us
                                </Link>
                            </li>  
                        </ul>
                        <p className="nav-divi">|</p>
                        <ul className="nav-menu-side">
                            <li className="nav-item2">
                                <Link to="/search" className="nav-links2" onClick={closeMobileMenu}>
                                <svg id="svg-search" width="18.414" height="18.414" viewBox="0 0 18.414 18.414">
                                    <g transform="translate(-3.5 -3.5)">
                                    <path class="a" d="M18.722,11.611A7.111,7.111,0,1,1,11.611,4.5a7.111,7.111,0,0,1,7.111,7.111Z"/>
                                    <path class="a" d="M28.842,28.842l-3.867-3.867" transform="translate(-8.342 -8.342)"/>
                                    </g>
                                </svg>
                                </Link>
                            </li>
                            <li className="nav-item2">
                                <Link to="/user" className="nav-links2" onClick={closeMobileMenu}>
                                <svg id="svg-user" width="16.022" height="17.8" viewBox="0 0 16.022 17.8">
                                    <g transform="translate(-3.1 -2.1)">
                                    <path class="a" d="M18.222,20.333V18.556A3.556,3.556,0,0,0,14.667,15H7.556A3.556,3.556,0,0,0,4,18.556v1.778" transform="translate(0 -1.333)"/>
                                    <path class="a" d="M15.111,6.556A3.556,3.556,0,1,1,11.556,3a3.556,3.556,0,0,1,3.556,3.556Z" transform="translate(-0.444)"/>
                                    </g>
                                </svg>
                                </Link>
                            </li>
                            <li className="nav-item2">
                                <Link to="/bag" className="nav-links2" onClick={closeMobileMenu}>
                                <svg id="svg-bag" width="28.7" height="28.7" viewBox="0 0 28.7 28.7">
                                    <g transform="translate(-1200.3 -28)">
                                        <g transform="translate(1197.875 37.917)">
                                            <path class="a" d="M5.525,2.083l-2.4,3.2v11.2a1.6,1.6,0,0,0,1.6,1.6h11.2a1.6,1.6,0,0,0,1.6-1.6V5.283l-2.4-3.2Z"/>
                                            <path class="a" d="M3.125,6.25h14.4" transform="translate(0 -0.967)"/>
                                            <path class="a" d="M14.733,10.417a3.2,3.2,0,1,1-6.4,0" transform="translate(-1.208 -1.933)"/>
                                        </g>
                                        <circle class="b" cx="7.5" cy="7.5" r="7.5" transform="translate(1214 28)"/>
                                        <text class="c" transform="translate(1219 38)">
                                            <tspan x="0" y="0">1</tspan>
                                        </text>
                                    </g>
                                </svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
