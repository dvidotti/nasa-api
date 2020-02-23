import React, { useState, useEffect } from "react";
import Card from '../UI/Card/Card';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



const Favorites = (props) => {
  console.log('FAVORITES', props);
  
  const backToFeed = () => {
    console.log('passed')
    props.history.push('/apollo');
  }

  return (
    <div className="padding-top">
      <h1>HELLO PORRA</h1>
      {props.favoritesList.length > 0 && props.favoritesList.map(item => {
        return(
        <div>
          <Card withButton={false} img={item.links[0].href} alt={item.data[0].title}/>
          <h1>{item.data[0].keywords[0]}</h1>
          <h2>{item.data[0].title}</h2>
          <p>{item.data[0].description}</p>
          <button onClick={backToFeed}>BACK</button>
        </div>
        )
      })
      } 
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let list = state.apollo_feed.filter((item, idx) => {
    console.log(state.apollo_favorites.includes(idx))
    if (state.apollo_favorites.includes(idx)) {
      return item;
    }
  })
  console.log('LIST', list)
  return {
    favoritesList: list
  }
}

const mapDispatchToProps = (dispatch) => {
 
}

export default withRouter(connect(mapStateToProps)(Favorites));