import React from "react";
import Navbar from "../components/Navbar";
import profile from '../assets/profile_emil.jpg'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import '../styles/Home.scss'

const Home = () => {
    return(
        <div>
            <div className="home" id="home">
                <div className="tags">
                    <img src={profile} alt="profile" />
                </div>
                <h1>Emil Setiawan</h1>
                <h2>Frontend Web Developer</h2>

                <div className="socmed">
                    <div className="socmed-item">
                        <BsLinkedin/>
                        <a href="https://www.linkedin.com/in/emil-setiawan-040842234/">Emil Setiawan</a>
                    </div>
                    <div className="socmed-item">
                        <SiGmail/>
                        <span>emil15setiawan@gmail.com</span>
                    </div>
                    <div className="socmed-item">
                        <BsGithub/>
                        <a href="https://github.com/Emilst11">https://github.com/Emilst11</a>
                    </div>
                </div>
            </div>
            <div className="svgs">
                <div className="svgs-s">
                    <svg width="100%" height="20%" viewBox="0 0 1920 353" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M430.397 219.961C247.492 223.089 0 35.806 0 35.806V353H1920V35.806C1920 35.806 1605.63 132.8 1399 127C1191.02 121.162 1072.58 -28.4712 867.307 5.36303C679.618 36.2987 620.61 216.708 430.397 219.961Z" fill="url(#paint0_linear_1124_3)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1124_3" x1="960" y1="-166" x2="960" y2="353" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0.31"/>
                        <stop offset="1" stop-color="#252525" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="svgs-s">
                    <svg width="100%" height="20%" viewBox="0 0 1920 370" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M293 211C110.095 214.128 0 52.4174 0 52.4174V369.612H1920V52.4174C1920 52.4174 1605.63 149.411 1399 143.611C1191.02 137.774 844.275 -28.3342 639 5.50011C451.311 36.4358 483.213 207.747 293 211Z" fill="url(#paint0_linear_1124_4)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1124_4" x1="960" y1="-149.388" x2="960" y2="369.612" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0.31"/>
                        <stop offset="1" stop-color="#252525" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="svgs-s">
                    <svg width="100%" height="20%" viewBox="0 0 1920 445" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M643.5 303.966C460.595 307.094 0 126.884 0 126.884V444.078H1920V126.884C1920 126.884 1761.63 132.683 1555 126.884C1347.02 121.046 1295.77 -28.868 1090.5 4.96631C902.811 35.902 833.713 300.713 643.5 303.966Z" fill="url(#paint0_linear_1124_5)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1124_5" x1="960" y1="-74.9222" x2="960" y2="444.078" gradientUnits="userSpaceOnUse">
                        <stop stop-opacity="0.31"/>
                        <stop offset="1" stop-color="#252525" stop-opacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

        </div>
    )
}

export default Home