import React from "react";
import { GoLocation } from 'react-icons/go'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { Link } from "react-router-dom";
import '../styles/Contact.scss'

const Contact = () => {
    return(
        <div className="contact" id="contact">
            <div className="contact-container">
                <div className="contact-item">
                    <h1>You can touch</h1>
                    <p><GoLocation/> Perum Griya Rajeg Lestari blok C no 10 / 11, Kecamatan Rajeg, Kabupaten Tangerang, Banten</p>
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
                <div className="contact-item">
                    <a href="#home" className="navs">Home</a>
                    <a href="#about" className="navs">About</a>
                    <a href="#work" className="navs">Work</a>
                </div>
                <div className="contact-item">
                    <h2>Download my CV/Resume here</h2>
                    <Link className="button" to='/resume'>Click Here</Link>
                </div>
            </div>
            <div className="presenting">
                <svg width="24" height="166" viewBox="0 0 24 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9393 165.061C11.5251 165.646 12.4749 165.646 13.0607 165.061L22.6066 155.515C23.1924 154.929 23.1924 153.979 22.6066 153.393C22.0208 152.808 21.0711 152.808 20.4853 153.393L12 161.879L3.51471 153.393C2.92893 152.808 1.97918 152.808 1.39339 153.393C0.807605 153.979 0.807605 154.929 1.39339 155.515L10.9393 165.061ZM10.5 -6.55672e-08L10.5 164L13.5 164L13.5 6.55672e-08L10.5 -6.55672e-08Z" fill="white"/>
                </svg>
                <p>Designed and developed by Emil Setiawan</p>
            </div>
        </div>
    )
}

export default Contact