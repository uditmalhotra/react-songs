import React from 'react'
import '../components/Footer.css'
function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-info">
                    <div className="info" id="info1"></div>
                    <div className="info" id="info2">
                        <h2>Subscribe to our Newsletter</h2>
                        <div className="signup">
                            <input placeholder="Enter your email"></input>
                            <button>SIGN UP</button>
                        </div>
                        <h2>Follow Us On</h2>
                        <div className="social">
                            <svg className="instagram" width="22.821" height="23" viewBox="0 0 22.821 23">
                                <g transform="translate(0.5 0.5)">
                                    <g transform="translate(0 0)">
                                        <g transform="translate(0 0)">
                                            <path class="a" d="M21.766,6.468A8.1,8.1,0,0,0,21.258,3.8,5.373,5.373,0,0,0,20,1.848,5.367,5.367,0,0,0,18.065.58,7.94,7.94,0,0,0,15.417.069C14.249.013,13.878,0,10.915,0s-3.334.013-4.5.064A7.922,7.922,0,0,0,3.769.576,5.321,5.321,0,0,0,1.833,1.848,5.421,5.421,0,0,0,.576,3.795,8.117,8.117,0,0,0,.068,6.464C.013,7.641,0,8.015,0,11s.013,3.361.064,4.534a8.1,8.1,0,0,0,.507,2.669,5.429,5.429,0,0,0,1.262,1.951,5.367,5.367,0,0,0,1.931,1.268,7.941,7.941,0,0,0,2.648.511c1.164.052,1.535.064,4.5.064s3.334-.013,4.5-.064a7.918,7.918,0,0,0,2.648-.511,5.605,5.605,0,0,0,3.194-3.219,8.122,8.122,0,0,0,.507-2.669c.051-1.173.064-1.547.064-4.534S21.817,7.641,21.766,6.468ZM19.8,15.45a6.072,6.072,0,0,1-.375,2.041,3.635,3.635,0,0,1-2.072,2.089,5.962,5.962,0,0,1-2.025.378c-1.151.052-1.5.064-4.409.064s-3.262-.013-4.409-.064a5.938,5.938,0,0,1-2.025-.378,3.356,3.356,0,0,1-1.253-.821A3.423,3.423,0,0,1,2.417,17.5a6.1,6.1,0,0,1-.375-2.041c-.051-1.16-.064-1.509-.064-4.444s.013-3.288.064-4.444a6.069,6.069,0,0,1,.375-2.041,3.346,3.346,0,0,1,.819-1.264A3.385,3.385,0,0,1,4.49,2.441a5.966,5.966,0,0,1,2.025-.378C7.666,2.011,8.011,2,10.923,2s3.262.013,4.409.064a5.941,5.941,0,0,1,2.025.378,3.353,3.353,0,0,1,1.253.821,3.422,3.422,0,0,1,.814,1.264A6.1,6.1,0,0,1,19.8,6.567c.051,1.16.064,1.508.064,4.444S19.851,14.29,19.8,15.45Z" transform="translate(0 0)"/>
                                            <path class="a" d="M11.4,5.836A5.652,5.652,0,1,0,17,11.487,5.631,5.631,0,0,0,11.4,5.836Zm0,9.318a3.666,3.666,0,1,1,3.637-3.666A3.652,3.652,0,0,1,11.4,15.153Z" transform="translate(-0.481 -0.485)"/>
                                            <path class="b" d="M18.757,5.122a.961.961,0,1,1-.961-.969.965.965,0,0,1,.961.969Z" transform="translate(-1.052 0.005)"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg className="facebook" width="23" height="23" viewBox="0 0 23 23">
                                <g transform="translate(0.5 0.5)">
                                    <g transform="translate(0 0)">
                                        <path class="a" d="M1079,122.981a1.02,1.02,0,0,1-1.018,1.019h-5.806v-8.3h3.147l.52-3.157h-3.667v-2.19a1.5,1.5,0,0,1,1.528-1.528h2.088v-3.157H1073.7a4.684,4.684,0,0,0-4.684,4.694v2.181h-3.057V115.7h3.057V124h-11a1.02,1.02,0,0,1-1.019-1.019V103.019a1.02,1.02,0,0,1,1.019-1.019h19.963a1.02,1.02,0,0,1,1.018,1.019Z" transform="translate(-1057 -102)"/>
                                    </g>
                                </g>
                            </svg>
                            <svg className="linkedin" width="23" height="22.973" viewBox="0 0 23 22.973">
                                <g transform="translate(0.5 0.5)">
                                    <g transform="translate(0 0)">
                                        <g transform="translate(0 0)">
                                            <path class="a" d="M.3,7.821H5.02V22.647H.3Z" transform="translate(-0.025 -0.674)"/>
                                            <path class="a" d="M2.668.024A2.509,2.509,0,0,0,0,2.586,2.492,2.492,0,0,0,2.606,5.147h.031A2.509,2.509,0,0,0,5.3,2.586,2.5,2.5,0,0,0,2.668.024Z" transform="translate(0 -0.024)"/>
                                            <path class="a" d="M17.262,7.442a4.655,4.655,0,0,0-4.25,2.447V7.79H8.3V22.615h4.716V14.336a3.519,3.519,0,0,1,.155-1.2,2.6,2.6,0,0,1,2.42-1.8c1.706,0,2.389,1.36,2.389,3.353v7.931h4.716v-8.5c0-4.554-2.327-6.673-5.429-6.673Z" transform="translate(-0.691 -0.643)"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg className="twitter" width="21.633" height="17.945" viewBox="0 0 21.633 17.945">
                                <g transform="translate(0.274 0.807)">
                                    <g transform="translate(0 0)">
                                        <g transform="translate(0 0)">
                                            <path class="a" d="M6.29,16.662c7.548,0,11.675-6.4,11.675-11.951q0-.273-.012-.543A8.461,8.461,0,0,0,20,1.993a8.038,8.038,0,0,1-2.356.661,4.2,4.2,0,0,0,1.8-2.323,8.118,8.118,0,0,1-2.606,1.019,4.055,4.055,0,0,0-3-1.327,4.153,4.153,0,0,0-4.1,4.2,4.291,4.291,0,0,0,.106.958A11.564,11.564,0,0,1,1.392.793,4.27,4.27,0,0,0,2.662,6.4,4,4,0,0,1,.8,5.875c0,.018,0,.035,0,.054A4.178,4.178,0,0,0,4.1,10.046a4.006,4.006,0,0,1-1.853.072,4.121,4.121,0,0,0,3.833,2.917A8.144,8.144,0,0,1,0,14.776a11.422,11.422,0,0,0,6.29,1.887" transform="translate(0 -0.024)"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="info" id="info3">
                        <h2>Contact Us</h2>
                        <p><span className="span">Office Phone:&nbsp;</span> 1210 284 822</p>
                        <p><span className="span">Direct Line:&nbsp;</span> 03 8395 24188</p>
                        <p id="pl"><span className="span">Email:&nbsp;</span> hello@audhiz.com.au</p>
                        <h2>OFFICE OPENING HOURS:</h2>
                        <p className="time">Mon - Fri: By Appointment Only </p>
                        <p className="time">Sat - Sun: Closed</p>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="links">
                        <ul>
                            <li>Privacy Policy</li>
                            <p>|</p>
                            <li>Terms & Condition</li>
                            <p>|</p>
                            <li>FAQs</li>
                            <p>|</p>
                            <li>Disclaimer</li>
                        </ul>
                    </div>
                    <p>© Copyright 2020 - The Useful Company</p>
                </div>
            </div>
        </>
    )
}

export default Footer
