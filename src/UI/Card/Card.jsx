import React from 'react';
import './Card.css';
import { withRouter } from 'react-router-dom'


const Card = (props) => {

  const viewDetails = () => {
    props.history.push(`/details/${props.idx}`)
  }

  return(
    <div>
      <img className="image-content" src={props.img} alt={props.title}/>
      {props.withButton && 
        <button onClick={viewDetails}>View</button>
      }
      
      <h2>{props.title}</h2>
    </div> 
  );
}

export default withRouter(Card);