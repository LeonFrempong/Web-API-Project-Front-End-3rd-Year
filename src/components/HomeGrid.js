import React from 'react';
import {Col, Row, Result} from 'antd';
import OktobCard from './OktobCard';

class HomeGrid extends React.Component {
   //this is a functional component to represent each row
   constructor(props){
       super(props);

       this.state = {
           items : []
       }

       this.clickItem = this.clickItem.bind(this);
   }

   componentDidMount(){
       fetch("http://localhost:3000/api/v1.0/articles")
       .then(res => res.json())
       .then(
           (result) => {
               console.log(result)
            this.setState({
                isLoaded : true,
                items : result
            });
           },

           (error) => {
               this.setState({
                   isLoaded : true,
                   error
               });
           }
       )
   }
   clickItem(id) {
    console.log("article with id:" + id + " was clicked");
   }

     oneRow(articles, rowNumber){
    
     //first we need to go through each column in the grid
     //map each article to Col and inside of it our OktobCard component
     //this way we can compose our whole grid
        let row = articles.map((element, index) => {
    
    //render the column, if it should have a card render a crad inside it, othewerwise do not render anything
          return <Col span={6} key={index}>
              {element !== null ? (
              <OktobCard key={element.id} title={element.title} description={element.description}
                likes={element.likes} comments={element.comments} selected={element.liked}
                liked={element.liked} pinned={element.pinned}
                imgURL = {element.imgURL} clicked={this.clickItem} />) : null}
            </Col>
            
    
           }
    
            );
    
    //after we go throw wach col inside the row compose the whole row
            return <div key={rowNumber}>
            <Row type="flex" justify="center">
                 {row}
            </Row>
            <br/>
            </div>
    }
    render() {
    
     //in this array we will save rows, one item per row
        let allRows = [];
     //count how many articles we have so far
        let counter = 0;
        let rowNumber = 0;
    
     //iterate through all the articles in the json data
        while(counter < this.props.articles.length){
    
     //initialise the array to store articles for each new row
            let articlesPerRow = [];
    
     //send each three articles to separate row
            for(let i=0; i < 3; i++){
    
                //make sure we do not overflow the array
                if(counter < this.props.articles.length)
                    articlesPerRow.push(this.props.articles[counter]);
                else
                    articlesPerRow.push(null);
    
                counter++;
    
            } 

     //increment row number
                rowNumber++;
     //keep adding rows until we finish the rows
                allRows.push(this.oneRow(articlesPerRow, rowNumber));
    
            }
     //now we have composed columns inside rows, and then rows inside grid,
     //now render the whole grid
        return <>
          {allRows}
        </>;
    
        
    } 
    

    
}



export default HomeGrid; 