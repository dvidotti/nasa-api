import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import ApolloFeed from './ApolloFeed/ApolloFeed'
import Details from './ApolloFeed/Details/Details';
import Rovers from './Rovers/Rovers';
import { withRouter} from 'react-router-dom'

const App = (props) => {
  console.log(props.location);

  const navColor = () => {
    if (props.location.pathname === '/') {
      return 'first-child-selected'
    } if (props.location.pathname === '/apollo') {
      return 'second-child-selected'
    } if (props.location.pathname === '/rovers') {
      return 'third-child-selected'
    }
  }

  return (
    <div className="App">
      <nav className={`navbar ${navColor()}`}>
        <a className="nav-item" href="/">HOME</a>
        <a className="nav-item" href="/apollo">APOLLO</a>
        <a className="nav-item" href="/rovers">ROVER</a>
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

export default withRouter(App);