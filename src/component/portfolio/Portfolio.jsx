import React from 'react'
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { Button } from '@material-ui/core';
import {useState, useEffect} from "react";
import {
    wordpressPortfolio,
    reactJs,
    reactNative,
  } from "../../data";

export default function Portfolio() {

  const [selected, setSelected]= useState("React_Js");
  const [data, setData] = useState([]);

    const list = [
      {
        id: "React_Js",
        title: "React Js",
    
    },

    {
        id: "React_Native",
        title: "React Native",
    
    },
        {
            id: "Wordpress",
            title: "Wordpress",
        
        },
        
    ];



    useEffect(() => {
        switch (selected) {
          case "React_Js":
            setData(reactJs);
            break;
            case "React_Native":
              setData(reactNative);
              break;
          case "Wordpress":
            setData(wordpressPortfolio);
            break;
        default:
            setData(reactJs);
        }
      }, [selected]);

      

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                     title= {item.title} 
                     active={selected === item.id} 
                     setSelected={setSelected}
                     id={item.id}
                     />
                ))}
            </ul>
            <div className="container">
                {data.map((d)=>
                  <a href={d.link} target='_blank'>
                     <div className="item">
                        <img src={d.img} alt={d.title}/>
                        <h3>{d.title}</h3>
                 </div>
                 </a>
                  )}
               
                
            </div>
        </div>
    )
}

