import React from 'react'
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import {useState, useEffect} from "react";
import {
    wordpressPortfolio,
    laravelPortfolio,
    frontendPortfolio,
  } from "../../data";

export default function Portfolio() {

  const [selected, setSelected]= useState("Wordpress");
  const [data, setData] = useState([]);

    const list = [
        {
            id: "Wordpress",
            title: "Wordpress",
        
        },
        {
            id: "Laravel",
            title: "Laravel",
        
        },

        {
            id: "Frontend",
            title: "Frontend",
        
        },
    ];



    useEffect(() => {
        switch (selected) {
          case "Wordpress":
            setData(wordpressPortfolio);
            break;
          case "Laravel":
            setData(laravelPortfolio);
            break;
          case "Frontend":
            setData(frontendPortfolio);
            break;
        default:
            setData(wordpressPortfolio);
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
                     <div className="item">
                     <img src={d.img}/>
                     <h3>{d.title}</h3>
                 </div>
                  )}
               
                
            </div>
        </div>
    )
}

