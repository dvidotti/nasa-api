import React, { useState, useEffect } from "react";
import Card from '../../UI/Card/Card';
import Colors from '../../hoc/Colors';
import { connect } from 'react-redux';
import { deleteFavorite } from '../../actions/favorites'
import { addFavorite } from '../../actions/favorites'



const Details = (props) => {

  const backToFeed = () => {
    console.log('passed')
    props.history.push('/apollo');
  }

  return (
    <div>
      {props.apollo_detail && 
        <div>
          <Card withButton={false} img={props.apollo_detail.links[0].href} alt={props.apollo_detail.data[0].title}/>
          <h1>{props.apollo_detail.data[0].keywords[0]}</h1>
          <h2>{props.apollo_detail.data[0].title}</h2>
          <p>{props.apollo_detail.data[0].description}</p>
          <button onClick={backToFeed}>BACK</button>
        </div>
      }
    </div>
  );
};

const mapPropsToState = (state, ownProps) => {
  let id = ownProps.match.params.id;
  return {
    apollo_detail: state.apollo_feed[id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavorite: (id) => {dispatch(deleteFavorite(id))},
    addFavorite: () => {dispatch(addFavorite())}
  }
}

export default Colors(connect(mapPropsToState, mapDispatchToProps)(Details));