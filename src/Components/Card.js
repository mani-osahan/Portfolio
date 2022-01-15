import React from 'react'
import skills from "../Skills_Data"
import './Card.css'

function Card({title,imageurl}){


return (
    <div className="card-container">
        <div className="image-container">
            <img src={imageurl}/>
        </div>
        <div className="card-title">
            <h3>{title}</h3>
        </div>
        <div className="card-body">
            <p></p>
        </div>

    </div>
)


}


export default Card