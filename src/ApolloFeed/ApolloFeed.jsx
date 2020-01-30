import React, { useState, useEffect } from "react";
import Card from '../UI/Card/Card'
import { apollo } from "../service/service";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadFavorites } from '../actions/favorites';
import './ApolloFeed.css'

const ApolloFeed = (props) => {
  // const [apiResult, setApiResult] = useState([]);
  console.log(props.favorites);


  useEffect(() => {
    const getInfo = async () => {
      try { 
        const resultFromApi = await apollo;
        // setApiResult(resultFromApi.data.collection.items)
        console.log(resultFromApi)
        props.loadFavorites({resultFromApi:resultFromApi.data.collection.items});
      } catch(error) {
        console.log(error)
      }
    }
    getInfo()
  },[])

  return(
  <div>
    <h1>Discover Apollo</h1>
    <div className="feed-line">       
      {props.favorites.length > 0 && props.favorites.map((item, idx) => {
        if (item.links) {
          return(
              <Card className="card-box" withButton={true}  title={item.data[0].keywords[0]} img={item.links[0].href} key={idx} idx={idx} /> 
          )
          }
        }
      )}
    </div>
  </div>
  );
}

const mapStateToProps = (state) => {
  return {
    favorites: state.favorites
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadFavorites: (resultFromApi) => { dispatch(loadFavorites(resultFromApi)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ApolloFeed));