import React from 'react'
import { useState } from "react";
import "./education.scss"

export default function Education() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data =[
        {
            id: 1,
            image: "./image/LA.jpg",
            icon: "./image/cap.jpg",
            para: "Graduate of",
            paragraph:"From Little Angels' College of Management Afiliated with Kathamandu University (2017-2021 )with an aggregate of GPA 3.57",
            title:"Bachelor of Business information System",
        },
    
        {
            id: 2,
            image: "./image/gihe.png",
            icon: "./image/cap.jpg",
            para: "Graduated",
            paragraph:"From GEMS Institute of Higher Studies (2017)with an aggregate marks 75.20%",
            title:"Plus 2",
        },
    
        {
            id: 3,
            image: "./image/gems.png",
            icon: "./image/cap.jpg",
            para: "Graduated",
            paragraph:"From Graded English Medium School (GEMS) (2015)with an aggregate marks 81.50%",
            title:"School Leaving Certificate (SLC)",
        },
    ];
    
    const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };
    return (
        <div className="education" id="education">
           
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            {data.map((item)=> (
                <div className="container">
                    
                    
                    
                        <div className="item">
                        <div className="left">
                            <div className="leftcontainer">
                                <div className="imagecontainer">
                                <a href="https://lacm.edu.np/" rel="noreferrer" target="_blank"><img src={item.image} alt="LACM" /></a>
                                </div>
                               


                            </div>
                        
                        </div>
                        <div className="right">
                            <div className="rightcontainer">
                                <img src={item.icon} className="cap" alt="cap" />
                                <p>{item.para}</p>
                                <h2>{item.title}</h2>
                                <p>{item.paragraph}</p>

                            </div>
                       
                        </div>
                </div>
                   
                    
                    
                   
                </div>
            ))}
            </div>
            <img src="image/arrow.png" className="arrow left" alt="arrow" onClick={() => handleClick("left")} />
                    <img src="image/arrow.png" className="arrow right" alt="arrow" onClick={() => handleClick()}/>
        </div>
    )
}

