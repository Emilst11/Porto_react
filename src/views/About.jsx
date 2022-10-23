import React from "react";
import abouts from  '../assets/about_me.png'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiSass, DiReact } from 'react-icons/di'
import { SiJavascript, SiFigma } from 'react-icons/si'
import '../styles/About.scss'

const About = () => {
    return(
        <div className="about" id="about">
            <div className="banners">About Me</div>
            <div className="about-container">
                <div className="svg">
                    <svg width="301" height="143" viewBox="0 0 301 143" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="300" y1="1" x2="300" y2="98" stroke="#5D5C5B" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="1" y1="98" x2="298" y2="98" stroke="#5D5C5B" strokeWidth="2" strokeLinecap="round"/>
                        <line x1="1" y1="100" x2="1" y2="142" stroke="#5D5C5B" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </div>
                <div className="text">
                    <img src={abouts} alt="emil" />
                    <div className="desc">
                        <div className="desc-text">
                            <h1>About Me</h1>
                            <p>Saya merupakan seorang freshgraduate lulusan Institut Teknologi PLN program studi S1 Teknik Informatika. Saya memiliki minat bakat terhadap dunia developer salah satunya yaitu Frontend Web Developer. Saya memulai minat ini semenjak mendapatkan mata kuliah yang berhubungan dengan minat saya, kemudian saya kembangkan ilmu saya yang dimulai dari belajar HTML/CSS/JS. Dan seiring berjalannya waktu saya sudah mahir menggunakan salah satu framework Frontend Javascript yaitu React.js. Adapun beberapa kemampuan yang saya kuasai lainnya.</p>
                        </div>
                        <div className="cursors"></div>
                        <div className="desc-text">
                            <h2>Frontend Web</h2>
                            <div className="bar-icon">
                                <div className="bar-icon-item">
                                    <AiFillHtml5/>
                                </div>
                                <div className="bar-icon-item">
                                    <DiCss3/>
                                </div>
                                <div className="bar-icon-item">
                                    <SiJavascript/>
                                </div>
                                <div className="bar-icon-item">
                                    <DiSass/>
                                </div>
                                <div className="bar-icon-item">
                                    <DiReact/>
                                </div>
                            </div>
                            <h2>UI/UX</h2>
                            <div className="bar-icon">
                                <div className="bar-icon-item">
                                    <SiFigma/>

                                </div>
                            </div>
                        </div>
                        <div className="arrows"></div>
                    </div>
                </div>
            </div>
            <div className="svgs-bot">
                <svg width="100%" height="20%" viewBox="0 0 1920 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.109269 143.602C0.109269 143.602 323.313 3.87388 542.109 1.60214C841.019 -1.50142 968.377 228.255 1266.61 248.602C1524.37 266.188 1920.11 145.602 1920.11 145.602" stroke="white" strokeOpacity="0.27" strokeWidth="2"/>
                </svg>
            </div>
        </div>
    )
}

export default About