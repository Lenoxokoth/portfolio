import "./Work.css"

import React from 'react'
import Data from "./Data"
const Work = () => {
  return (
    <div className="work">
        <h4 className="project-heading">PROJECTS</h4>

        <div className="project-container">
          {Data.map((value, index) =>{
            return(
        <div className="project-card" key={index}>
            <img src={value.img} alt={value.title} />
            <h4 className="project-title">{value.title}</h4>
            <div className="pro-detail">
            <p>{value.desc}</p>
            <div className="probtn">
               <a href={value.view} target='blank' className='btn'>view</a>
            </div>
        </div>
        </div>
            )
          })}
        </div>
    </div>
  )
}

export default Work
