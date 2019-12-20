import React from 'react';
import './Card.css';
import { withRouter } from 'react-router-dom'


const Card = (props) => {
  let title = '';
  if (props.title) {
    title = props.title.toString().split(',')[0]
  }
  const viewDetails = () => {
    props.history.push(`/details/${props.idx}`)
  }

  return(
    <div className="box-card-inner">
      <div className="box-title"><h2>{title}</h2></div>
      <div className="box-image-btn">
        <div className="box-image-margin"></div>
        <div className="box-image"><img className="image-content" src={props.img} alt={props.title}/></div>
        {props.withButton && 
          <div className="box-image-margin"><button onClick={viewDetails}>View</button></div>
        }
      </div>
      
      
    </div> 
  );
}

export default withRouter(Card);