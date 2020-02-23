import React, { useState, useEffect } from "react";
import Card from '../UI/Card/Card'
import { apollo } from "../service/service";
import { withRouter , Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadFavorites } from '../actions/favorites';
import './ApolloFeed.css'

const ApolloFeed = (props) => {
  const [apiResult, setApiResult] = useState([]);

  useEffect(() => {
    const getInfo = async () => {
      try {
        const resultFromApi = await apollo;
        setApiResult(resultFromApi.data.collection.items)
        console.log(resultFromApi)
        props.loadFavorites(resultFromApi.data.collection.items);
      } catch(error) {
        console.log(error)
      }
    }
    getInfo()
  },[])

  return(
  <div className="padding-top">
    <div className="space-between">
      <h1>Discover Apollo</h1>
      <Link to="/favorites">Favorites</Link>
    </div>
    <div className="feed-line">       
      {props.apollo_feed.length > 0 && props.apollo_feed.map((item, idx) => {
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
    apollo_feed: state.apollo_feed,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadFavorites: (resultFromApi) => { dispatch(loadFavorites(resultFromApi)) }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ApolloFeed));