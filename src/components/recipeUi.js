import React from 'react';
import { NavLink } from 'react-router-dom';
import { Card } from 'antd';
import { Button, Modal, Form, Input, Radio } from 'antd';

function RecipeUi(){
    
    
    
    return (
        <div>
            {/* <form>
                <label>
                    Add recipe:
                    <input type="text" name="Recipe"/>
                    <textarea> </textarea>
                    
                </label>
                    <input type="Submit" value="Submit"/>
            </form> */}
            <Button variant="primary">
            <NavLink to="/AddRecipe">Click me to add Recipe </NavLink>
            </Button>

        </div>

       
            
        

    );
}


export default RecipeUi;