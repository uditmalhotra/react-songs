import React, {useState} from 'react'
import '../components/Services.css'
import servicesimage from '../assets/services.png'
function Services() {
    const [toggle, setToggle] = useState(false);
    const optionswitch = () => setToggle(!toggle);
    return (
        <>
           <div className="services">
                <h1>OUR SERVICES</h1>
                <svg className="services-svg" width="132" height="20" viewBox="0 0 132 20">
                    <g transform="translate(-617 -932)">
                        <line class="a" x2="48" transform="translate(617 942)"/>
                        <line class="a" x2="48" transform="translate(701 942)"/>
                        <text class="b" transform="translate(677.5 947)">
                            <tspan x="0" y="0">x</tspan>
                        </text>
                    </g>
                </svg>
                <div className="services-buttons">
                    <button className={toggle ? 'business' : 'residential'} onClick={optionswitch}>Residential</button>
                    <button className={toggle ? 'residential' : 'business'} onClick={optionswitch}>Business</button>
                </div>
                <div className="services-content">
                    <div className="services-text">
                        <p>Audihiz specialises in the installation of fully custom Sonos systems. Whether you’re looking for a small setup for the living room or a full audio layout for the whole house, Audihiz is there to service your needs. </p>
                        <p>No job is too big or too small and our rates are extremely competitive. For a quick free on-site quote, please contact us at your convenience.</p>
                        <button className="talk">TALK TO EXPERT</button>
                    </div>
                    <div className="services-images">
                        <img src={ servicesimage } alt="services" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
