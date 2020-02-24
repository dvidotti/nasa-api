import React, { Component } from "react";
import Card from '../UI/Card/Card'
import { apollo } from "../service/service";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadFavorites } from '../actions/favorites';
import './ApolloFeed.css'

class ApolloFeed extends Component {
 
  getInfo = () => {
    apollo
    .then(resultFromApi => {
      this.props.loadFavorites(resultFromApi.data.collection.items);
    })
    .catch(error => console.log(error))
  }
  
  componentDidMount() {
    this.getInfo()
  }

  render() {
    return(
    <div className="padding-top">
      <div className="space-between">
        <h1>Discover Apollo</h1>
        <Link to="/favorites">Favorites</Link>
      </div>
      <div className="feed-line">       
        {this.props.apollo_feed.length > 0 && this.props.apollo_feed.map((item, idx) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(ApolloFeed);