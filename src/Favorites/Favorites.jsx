import React from "react";
import Card from '../UI/Card/Card';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";



const Favorites = (props) => {
  console.log(props)
  const backToFeed = () => {
    props.history.push('/apollo');
  }

  const deleteFav = (idx) => {
    props.deleteFav(idx);
    console.log(idx)
  }

  return (
    <div className="padding-top">
      <button onClick={backToFeed}>BACK</button>
      {props.favoritesList.length > 0 && props.favoritesList.map((item, idx) => {
        return(
        <div>
          <Card withButton={false} img={item.links[0].href} alt={item.data[0].title}/>
          <h1>{item.data[0].keywords[0]}</h1>
          <h2>{item.data[0].title}</h2>
          <p>{item.data[0].description}</p>
          <button onClick={() => deleteFav(idx)}>DELETE</button>
        </div>
        )
      })
      } 
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let list = state.apollo_feed.filter((item, idx) => {
    if (state.apollo_favorites.includes(idx)) {
      return item;
    }
  })
  return {
    favoritesList: list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveFavorite: (idx) => {dispatch({type: "ADD_FAVORITE", idx})},
    deleteFav: (idx) => { dispatch({type: "DELETE_FAV", idx})}
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favorites));