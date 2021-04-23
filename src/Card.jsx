import React from 'react';


function Card(props){
    return <>
    <div className="card-body">
        <div className="Img-box">
        <img src={props.imgSrc} alt={props.title} />
        </div>
     <div className="card-info">
        <span className="card-cetagory">{props.cat}</span>
        <h3>{props.title}</h3>
        <a href={props.btnLink} className="card-btn">watch now</a>
     </div>
    </div>
    </>
}
export default Card;