import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import porto1 from '../assets/porto1.png'
import porto2 from '../assets/porto2.png'
import porto3 from '../assets/porto3.png'
import '../styles/Work.scss'

const Work = () => {
    const [nums, setNums] = useState(0)
    const collection = [
        {
            id: 1,
            images: porto1,
            title: 'Internship program',
            tech: 'HTML/CSS/JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime voluptatum totam numquam voluptate, culpa non enim corrupti error sit voluptatibus cupiditate provident odio ab illum praesentium alias nesciunt? Quam?'
        },
        {
            id: 2,
            images: porto2,
            title: 'Textplag',
            tech: 'React.js SCSS REDUX',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime voluptatum totam numquam voluptate, culpa non enim corrupti error sit voluptatibus cupiditate provident odio ab illum praesentium alias nesciunt? Quam?'
        },
        {
            id: 3,
            images: porto3,
            title: 'CSS Template Library',
            tech: 'HTML/CSS/JS',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime voluptatum totam numquam voluptate, culpa non enim corrupti error sit voluptatibus cupiditate provident odio ab illum praesentium alias nesciunt? Quam?'
        }
    ]

    const nextBtn = () => {
        setNums(nums + 1);
        if(nums === collection.length-1){
            setNums(0)
        }
    }
    const prevBtn = () => {
        setNums(nums - 1)
        if(nums === 0){
            setNums(collection.length - 1)
        }
    }
    return(
        <div className="work" id="work">
            <div className="empty"></div>
            <div className="work-container">
                <div className="banners">Collection</div>
                <div className="collections">
                    <button onClick={prevBtn}>
                        <span>Prev</span>
                        <FaChevronLeft/>
                    </button>
                    <div className="posters">
                        <div className="title">
                            <h1>
                                {collection[nums].title}
                            </h1>
                        </div>
                        <img src={collection[nums].images} alt="" />
                        <div className="build">
                            <h1>Build with</h1>
                            <div className="build-icon">{collection[nums].tech}</div>
                        </div>
                        <div className="details">
                            <h1>Details</h1>
                            <p>{collection[nums].desc}</p>
                        </div>
                    </div>
                    <button onClick={nextBtn}>
                        <FaChevronRight/>
                        <span>Next</span>
                    </button>
                </div>
            </div>
            <div className="svg">
                <svg width="96" height="328" viewBox="0 0 96 328" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.9393 289.061C47.5251 289.646 48.4749 289.646 49.0607 289.061L58.6066 279.515C59.1924 278.929 59.1924 277.979 58.6066 277.393C58.0208 276.808 57.0711 276.808 56.4853 277.393L48 285.879L39.5147 277.393C38.9289 276.808 37.9792 276.808 37.3934 277.393C36.8076 277.979 36.8076 278.929 37.3934 279.515L46.9393 289.061ZM46.5 33L46.5 288L49.5 288L49.5 33L46.5 33Z" fill="#5D5C5B"/>
                    <path d="M10.9393 256.061C11.5251 256.646 12.4749 256.646 13.0607 256.061L22.6066 246.515C23.1924 245.929 23.1924 244.979 22.6066 244.393C22.0208 243.808 21.0711 243.808 20.4853 244.393L12 252.879L3.51472 244.393C2.92893 243.808 1.97919 243.808 1.3934 244.393C0.807612 244.979 0.807612 245.929 1.3934 246.515L10.9393 256.061ZM10.5 -6.55671e-08L10.5 255L13.5 255L13.5 6.55671e-08L10.5 -6.55671e-08Z" fill="#5D5C5B"/>
                    <path d="M82.9393 327.061C83.5251 327.646 84.4749 327.646 85.0607 327.061L94.6066 317.515C95.1924 316.929 95.1924 315.979 94.6066 315.393C94.0208 314.808 93.0711 314.808 92.4853 315.393L84 323.879L75.5147 315.393C74.9289 314.808 73.9792 314.808 73.3934 315.393C72.8076 315.979 72.8076 316.929 73.3934 317.515L82.9393 327.061ZM82.5 71L82.5 326L85.5 326L85.5 71L82.5 71Z" fill="#5D5C5B"/>
                </svg>
            </div>
        </div>
    )
}

export default Work