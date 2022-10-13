import React from "react";
import '../styles/Navbar.scss'

const Navbar = () => {
    const navContent = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'About',
            link: '/'
        },
        {
            title: 'My Work',
            link: '/'
        },
        {
            title: 'Testimonial',
            link: '/'
        },
        {
            title: 'Contact',
            link: '/'
        }
    ]
    return(
        <div className="navbar-container">
            {navContent.map((item, index) => 
                <div key={index}>{item.title}</div>
            )}
        </div>
    )
}

export default Navbar