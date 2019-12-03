import React, { Component } from 'react';
import './Header.css';




class Header extends Component {
    
    
    constructor(props){
        super(props);

        this.state = {
            searchTerm : "",
            headerStyle:{backgroundColor:this.props.backgroundColor}
        };
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(event){
        this.setState({searchTerm: event.target.value})
    }
   handleSearchSubmit(event){
        
        //prevent the form to be submitted to its action url
        event.preventDefault();
        this.props.onSearchClick(this.state.searchTerm);  
    }
    
    
    

    render(){
        return (
            <div className="header">
                <img src={""} alt= "" /><a href="#default" className="logo">Your Recipe </a>
                <div className="header-right">
                    <div className = "search-container">
                        <form action="">
                            <input type="text" placeholder="Search.." name="txtSearch" onChange={this.handleInputChange} />
                            <button type="submit" onClick={this.handleSearchSubmit}>Search</button>

                            </form>
                            
                        </div>
                    </div>
                </div>
        );
    }
}

export default Header;