import React from 'react'
import "./education.scss"
export default function Education() {
    return (
        <div className="education" id="education">
            <h1>Education</h1>
            <div className="slider">
                <div className="container">
                    <div className="item">
                            <div className="left">
                                <div className="leftcontainer">
                                    <div className="imagecontainer">
                                    <a href="https://lacm.edu.np/" rel="noreferrer" target="_blank"><img src="image/LACM.jpg " alt="LACM" /></a>
                                    </div>
                                    <h2>Little Angels College of Management</h2>
                                    <h4>Hattiban, Lalitpur</h4>


                                </div>
                            
                            </div>
                            <div className="right">
                                <div className="rightcontainer">
                                    <h2>Bachelor of Business Information System</h2>
                                    <span>2017-2021 A.D</span>
                                    <h3>Aggregate GPA 3.5</h3>
                                    <h5>(till 7th semester)</h5>

                                </div>
                           
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

