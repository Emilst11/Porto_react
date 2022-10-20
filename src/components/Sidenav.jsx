import React from "react";
import { Link } from 'react-scroll'
import '../styles/Sidenav.scss'

const Sidenav = () => {
    const navContent = [
        {
            title: 'Home',
            link: 'home'
        },
        {
            title: 'About',
            link: 'about'
        },
        {
            title: 'My Work',
            link: 'work'
        },
        {
            title: 'Testimonial',
            link: 'testi'
        },
        {
            title: 'Contact',
            link: 'contact'
        }
    ]
    return(
        <div className="sidenav">
            {navContent.map((item, index) => 
                <Link key={index} className="sidenav-item" activeClass="active" smooth spy to={item.link}>
                    <p>{item.title}</p>
                    <div className="status"></div>
                </Link>
            )}
        </div>
    )
}

export default Sidenav