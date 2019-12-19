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
      <nav>
        <a href="/">HOME</a>
        <a href="/apollo">APOLLO</a>
        <a href="/rovers">ROVER</a>
      </nav>
      <Switch>  
        <Route exact path='/' component={Home} />
        <Route path='/apollo' component={ApolloFeed} />
        <Route path='/rovers' component={Rovers} />
        <Route path='/details/:id' component={Details} />
      </Switch>
    </div>
  );
}

export default App;