import React from 'react';
import Login from './components/Login';
import { BrowserRouter as Router, Link, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './App.css';
import { Component } from 'react';
import Signup from './components/Signup';
import Homepage from './components/homepage';
//import OktobCard from './components/OktobCard';
//import ReactDOM from 'react-dom'; 
import { Layout, Menu, Breadcrumb } from 'antd';
import RecipeUi from './components/recipeUi';
import AddRecipe from './components/AddRecipe';
import Hello from './components/Hello';
import Header from './components/header/Header';
import upload from './components/upload';






const User = ({match}) => {
  return (<h1> Welcome {match.params.username} </h1>)
}

class App extends Component {
  
  onSearch(term){

    console.log("search on term:" + term);
  }
    
  
  
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <h1>WELCOME TO NUTRITION SITE</h1>
                  <navbar />
                  
                </Link>
              </li>
              <li>
                <Link to={'/register'}>Register</Link>
              </li>
              <li>
                <Link to="/post">post</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
                <h3> Please Login or Click sign up to create account</h3>
              </li>
              <li>
                <Link to="/homepage">homepage</Link>
              </li>
              <li>
                <Link to="/recipeUi">Add Recipe</Link>
              </li>
              <li>
                <Link to="/AddRecipe">Add Detailes of recipe</Link>
              </li>
            </ul>
          </nav>
        <div>
          <Header title="My Own title" logo={""} onSearchClick={this.onSearch} backgroundColor="#800000" />
        </div>

        <Switch>

          

          <Route path="/" exact strict render={
            () => {
              return ( <h1>Hello </h1>);
            }
          }>
              
          </Route>
        </Switch>
        
        <Switch>
          <Route path="/login" exact strict render={
            () => <Login />
          }> 
            
          </Route>
        </Switch>

        <Switch>
          <Route path="/register"> 
            <Signup />
          </Route>
        </Switch>

        {/* <Switch>
          <Route path="/addarticle">
            <AddArticle />
          </Route>
        </Switch> */}

        <Switch>
          <Route path="/post"> 
            
          </Route>
        </Switch> 

        <Switch>
          <Route path="/homepage"> 
            <Hello name="User"/>
            <Homepage />
            <upload />
            
          </Route>
        </Switch> 

        <Switch>
          <Route path="/recipeUi">
          <div>
            <h4> Welcome to Add Recipe page. </h4>
            <h5> To add a recipe, please make sure you do the following</h5>
            <ul>
                <li> Add Title of your recipe </li>
                <li> Add description </li>
                <li> Add ingredients </li>
                <li> Add steps and guidelines </li>
            </ul>
          </div>

           <RecipeUi />
          </Route>
        </Switch> 

        <Switch>
          <Route path="/AddRecipe"> 
            <AddRecipe />
          </Route>
        </Switch> 
        </div>
      </Router>
    )
  }
}



export default App;
