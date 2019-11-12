import React, { Component } from 'react';
import './PhotoGrid.css';

class PhotoGrid extends Component {
    render() {
        let content = this.props.children.map(item =>{
            return(
                <div className = "imgCard">{item}</div>
            )
        })
        return (<div className="columns">{content}</div>);
    }
}
export default PhotoGrid;