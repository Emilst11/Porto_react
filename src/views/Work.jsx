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
        if(nums == 0){
            setNums(collection.length - 1)
        }
    }
    return(
        <div className="work">
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
    )
}

export default Work