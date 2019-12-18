import React, { useState, useEffect } from "react";
import Card from '../../UI/Card/Card';
import Colors from '../../hoc/Colors';
import { connect } from 'react-redux';
import { deleteFavorite } from '../../actions/favorites'
import { addFavorite } from '../../actions/favorites'



const Details = (props) => {
  console.log(props);
  
  // const handleDelete= () => {
  //   props.deleteFavorite(props.idx);
  //   props.history.push('/')
  // }

  // const handleAdd= () => {
  //   props.addFavorite();
  //   props.history.push('/')
  // }

  const backToFeed = () => {
    console.log('passou')
    props.history.push('/apollo');
  }

  return (
    <div>
      {props.favorite && 
        <div>
          <Card withButton={false} img={props.favorite.links[0].href} alt={props.favorite.data[0].title}/>
          <h1>{props.favorite.data[0].keywords[0]}</h1>
          <h2>{props.favorite.data[0].title}</h2>
          <p>{props.favorite.data[0].description}</p>
          <button onClick={backToFeed}>BACK</button>
          {/* <button onClick={handleDelete}>DELETE</button>
          <button onClick={handleAdd}>ADD</button> */}
        </div>
      }
    </div>
  );
};

const mapPropsToState = (state, ownProps) => {
  console.log(state.favorites)
  let id = parseInt(ownProps.match.params.id);
  return {
    favorite: state.favorites[id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteFavorite: (id) => {dispatch(deleteFavorite(id))},
    addFavorite: () => {dispatch(addFavorite())}
  }
}

export default Colors(connect(mapPropsToState, mapDispatchToProps)(Details));