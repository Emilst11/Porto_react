import React, { useState } from "react";
import { HiMenu } from 'react-icons/hi'
import '../styles/Navbar.scss'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const navContent = [
        {
            title: 'Home',
            link: '#'
        },
        {
            title: 'About',
            link: '#about'
        },
        {
            title: 'My Work',
            link: '#work'
        },
        {
            title: 'Testimonial',
            link: '#testi'
        },
        {
            title: 'Contact',
            link: '#contact'
        }
    ]
    return(
        <div className={`navbar-container ${open ? 'mobile' : ''}`}>
            <button onClick={() => setOpen(!open)}><HiMenu/> {open ? 'Close' : 'Menu'}</button>
            <div className={`${open ? 'mobile-item' : 'navbar-container-item'}`}>
                {navContent.map((item, index) => 
                    <a href={item.link} key={index} onClick={() => setOpen(false)} >{item.title}</a>
                )}
            </div>
        </div>
    )
}

export default Navbar