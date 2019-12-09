import React, {useEffect, useState}from 'react';
import react from 'react'
import Homepage  from './homepage';
import homepage from './homepage';

const connectToAPI = () => {
    const APP_ID = '665515d0';
    const APP_KEY = "733fc896680564d4f018e1e2767eda9b";
  
    const [recipes, setRecipes] = react.useState([]);
    const[search, setSearch]=react.useState("");
    const[query, setQuery] = react.useState('chicken');
    
    react.useEffect(() =>{
      getRecipes();
    }, []);
  
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q={query}}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    };
    
    const updateSearch = e => { 
      setSearch(e.target.value);
      console.log(search);
    }
  
    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
    }
  
    return(
        <div onSubmit={getSearch}  className="App">
          <form className="search-form">
            <input className= "search-bar" type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">Search</button>
          </form>
          {recipes.map((recipe => (
            <Homepage
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}/>
          )))}
        </div>
    );
};
export default connectToAPI;




