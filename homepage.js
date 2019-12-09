import React, { Component } from 'react';

import { Card, Row, Col, Form } from 'antd'; 

  
const homepage = ({title,calories,image}) => {
  return(
    <div>
      <h1>{title}</h1>
            
      <p>{calories}</p>
      <img src={image} alt=""/>
    </div>
            
    );
};


export default homepage;