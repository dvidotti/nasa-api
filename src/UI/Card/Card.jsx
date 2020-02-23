import React from 'react';
import './Card.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'


const Card = (props) => {
  let title = '';
  if (props.title) {
    title = props.title.toString().split(',')[0]
  }
  const viewDetails = () => {
    props.history.push(`/details/${props.idx}`)
  }

  const addFavorite = () => {
    props.saveFavorite(props.idx);
    console.log(props.idx)
  }

  return(
    <div className="box-card-inner">
      <div className="box-title"><h2>{title}</h2></div>
      <div className="box-image-btn">
        <div className="box-image-margin"></div>
        <div className="box-image">
          <img className="image-content" src={props.img} alt={props.title}/>
        </div>
        {props.withButton && 
          <div>
            <div className="box-image-margin"><button onClick={viewDetails}>View</button></div>
            <div className="box-image-margin"><button onClick={addFavorite}>Add Favorite</button></div>
          </div>
        }
      </div> 
    </div> 
  );
}



const mapStateToProps = (state) => {
  return {
    apollo_feed: state.apollo_feed,
    apollo_favorites: state.apollo_favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveFavorite: (idx) => {dispatch({type: "ADD_FAVORITE", idx})}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Card));