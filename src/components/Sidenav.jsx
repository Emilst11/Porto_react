import React from "react";
import '../styles/Sidenav.scss'

const Sidenav = () => {
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
        <div className="sidenav">
            {navContent.map((item, index) => 
                <div key={index} className="sidenav-item active">
                    <p>{item.title}</p>
                    <div className="status"></div>
                </div>
            )}
        </div>
    )
}

export default Sidenav