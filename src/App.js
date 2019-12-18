import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import ApolloFeed from './ApolloFeed/ApolloFeed'
import Details from './ApolloFeed/Details/Details';
import Rovers from './Rovers/Rovers'

const App = () => {
  return (
    <div className="App">
      <Switch>  
        <Route exact path='/' component={Home} />
        <Route exact path='/apollo' component={ApolloFeed} />
        <Route exact path='/rovers' component={Rovers} />
        <Route path='/details/:id' component={Details} />
      </Switch>
    </div>
  );
}

export default App;