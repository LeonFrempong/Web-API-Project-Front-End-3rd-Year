import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
import { Component } from 'react';
import Signup from './components/Signup';
import { func } from 'prop-types';

const User = ({match}) => {
  return (<h1> Welcome {match.params.username} </h1>)
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={'/register'}>Register</Link>
              </li>
              <li>
                <Link to="/articles">articles</Link>
              </li>
            </ul>
          </nav>
        

        <Switch>
          <Route path="/" exact strict render={
            () => {
              return ( <h1> Welcome</h1>);
            }
          }>
              <Login />
          </Route>
        </Switch>
        
        <Switch>
          <Route path="/register"> 
            <Signup />
          </Route>
        </Switch>

        {/* <Route path="/" exact strict render={
          () => {
            return ( <h1> Welcome to Nutrition site</h1>);
          }
          
        }/>
        
        
         <Route path="/signup" exact strict render={
          () => {
            return ( <h1> Create your account</h1>);
            
          }
           
        }/>
        <div>
        <Login />
        
        <Route path="/about" exact strict render={
          () => {
            return ( <h1> About</h1>);
          }
        }/>

        <Route path="/user/:username" exact strict Component={User}/>
        
      </div></div>
      </Router>
       */}
        
        </div>
      </Router>
    )
  }
}
const register = ({ match }) => (
  <div>
    <Signup />
  </div>
)

export default App;