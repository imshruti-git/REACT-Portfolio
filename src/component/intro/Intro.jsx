import React from 'react'
import "./intro.scss"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";


export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imagecontainer">
                    <img src="image/IMG_5585.jpg" alt="shruti vaidya" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h3>Hello everyone.....</h3>
                    <h2>I AM SHRUTI VAIDYA</h2>
                    <h4>WEB DESIGNER<span></span></h4>
                        <a href="#portfolio"><KeyboardArrowDownIcon className="arrow" /></a>
                        
                    
                </div>
            </div>
            
            
        </div>
    )
}

