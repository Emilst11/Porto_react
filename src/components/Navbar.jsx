import React from "react";
import '../styles/Navbar.scss'

const Navbar = () => {
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
        <div className="navbar-container">
            {navContent.map((item, index) => 
                <a href={`#${item.link}`} key={index}>{item.title}</a>
            )}
        </div>
    )
}

export default Navbar