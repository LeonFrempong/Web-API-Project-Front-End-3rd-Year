import React from 'react';
import { form, Button, NavLink, FormButton } from 'react';
import ReactDom from 'react-dom'




    
    class AddRecipe extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                recipe: '',
                Description: '',
                ingredients: '',
                steps: '',
            };
        }

        myChangeHandler = (event) => {
            let nam = event.target.name;
            let val = event.target.value;
            this.setState({[nam]: val});
        }


        render(){
            return(
                <form>

                <h1>My recipe is {this.state.recipe}</h1>
                <p>Enter your recipe</p>
                <input
                    type = 'text'
                    name = 'recipe'
                    onChange={this.myChangeHandler}
                />
                

                <h5>{this.state.Description}</h5>
                <h6>Fill in description</h6>
                <input
                    type = 'text'
                    name = 'Description'
                    onChange={this.myChangeHandler}
                />

                <h5>Lists of ingredients</h5>
                <h5>{this.state.ingredients}</h5>
                <input
                    type = 'text'
                    name = 'ingredients'
                    onChange={this.myChangeHandler}
                />

                <h5>Steps</h5>
                <h5>{this.state.steps}</h5>
                <input
                    type = 'text'
                    name = 'steps'
                    onChange={this.myChangeHandler}
                />
           
                </form>
                
               
                    
                
            

            )
        }
    }

    // https://www.w3schools.com/react/showreact.asp?filename=demo2_react_forms_multiple

// https://reactjs.org/docs/jsx-in-depth.html 

  


export default AddRecipe;