import React, {useRef} from "react";
import Pdf from 'react-to-pdf'
import { Link } from "react-router-dom";
import { IoMdArrowBack } from 'react-icons/io'
import '../styles/Resume.scss'

const Resume = () => {
    const ref = useRef()
    const certificate = [
        {
            name: 'React Masterclass untuk Semua - Udemy (September, 2022)',
            validate: 'https://www.udemy.com/certificate/UC-9583b166-396a-489c-bd84-66a55064f112/'
        },
        {
            name: 'Belajar Fundamental Front-End Web Development- Dicoding (September, 2021)',
            validate: 'https://www.dicoding.com/certificates/ERZR4EL0WZYV'
        },
        {
            name: 'BELAJAR MEMBUAT FRONT-END WEB - Dicoding (June, 2021)',
            validate: 'https://www.dicoding.com/certificates/GRX5G6OEYX0M'
        },
        {
            name: 'DASAR PEMROGRAMAN WEB - Dicoding (May, 2021)',
            validate: 'https://www.dicoding.com/certificates/MEPJ507L6P3V'
        },
        {
            name: 'Microsoft Office Specialist - Office Word 2016 (June, 2021)',
            validate: 'Verify Certiport : wN5BB-22XH'
        },
    ]
    return(
        <div className="resume">
            <div className="navbar-head">
                <Link className="navbar-head-item" to='/'>
                    <IoMdArrowBack/>
                    <span>
                        Back to Home
                    </span>
                </Link>
            </div>
            <div className="container-pdf">
                <div className="btn-container">
                    <Pdf targetRef={ref} filename='Resume_EmilSetiawan.pdf'>
                        {({toPdf}) => (
                            <button className='btn-download' onClick={() => toPdf()}>Download as PDF</button>
                        )}
                    </Pdf>
                </div>
                <div className="container-pdf-hvs">
                    <div className="heads-file">
                        <p>Resume Emil Setiawan</p>
                        <p>Latest Update : 23 October 2022</p>
                    </div>
                    <div ref={ref}>
                        <div className="hvs">
                            <div className="header">
                                <h1>Emil Setiawan</h1>
                                <p>email : emil15setiawan@gmail.com / No.telp : +6289512887331</p>
                            </div>
                            <div className="body">
                                <div className="summary">
                                    <h2>Summary</h2>
                                    <p>I am a student who graduated from the ITPLN campus with the S1 Informatics Engineering study program. I am a person who is easy to communicate, want to find out more information and learn new things. From my major, I want to become a Front-end developer where I have skills from HTML / CSS / Javascript and I developed it so that I am proficient in operating the Reactjs, SCSS javascript frameworks and I am proficient in using Bootstrap and Tailwind's libraries</p>
                                </div>
                                <div className="experience">
                                    <h2>Experience</h2>
                                    <h3>Internship (Web Designer)</h3>
                                    <p>Badan Pengawasan Keuangan dan Pembangunan (BPKP) - Jakarta, Daerah Khusus Ibukota Jakarta. 09/2021 - 11/2021</p>
                                    <p>Web designer internship job description :</p>
                                    <ul>
                                        <li>Creating UI/UX design for feature named "Surat Tugas" on BPKP Web App</li>
                                        <li>Implementing wireframing design into HTML/ CSS/ Javacript for integrated with backend</li>
                                    </ul>
                                </div>
                                <div className="education">
                                    <h2>Education</h2>
                                    <h3>Bachelor Degree, Informatics Engineer</h3>
                                    <p>Institut Teknologi PLN, Jakarta</p>
                                    <p>Graduate bachelor of Informatics Engineers with GPA 3.69/4.00, August 2022</p>
                                </div>
                                <div className="certificate">
                                    <h2>Certification</h2>
                                    {certificate.map((item, index) => 
                                        <div className="certificate-item" key={index}>
                                            <h3>{item.name}</h3>
                                            <p>{item.validate}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume