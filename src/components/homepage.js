import React from 'react';

import { Card, Row, Col, Form } from 'antd'; 
import Hello from './Hello';


function homepage(){
  let Meta = Card.Meta

  return(
      <div style = {{ background: '#ECECEC', padding: '30px' }}>
        <Row type="flex" justify="center">
          <Col span = {4}>
            <Hello name = "User" />
          </Col>
        </Row>

        <Row type="flex" justify="center">
          <Col span={6}>
            <Card
              hoverable
              style={{width: 320}}
              cover={<img alt="Recipe 1" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />}
            >
              <Meta title= "This is the first nutrition" description= "rhiehiri" />
            </Card>
          </Col>

          <Col span = {6}>
            <Card
              hoverable
              style = {{ width: 320}}
              cover = {<img alt="Recipe 2" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>}
            >
              <Meta title = "this is your 2nd recipe" description= "fdfjdijf" />

            </Card>
          </Col>

          <Col span = {6}>
            <Card
              hoverable
              style = {{ width: 320}}
              cover = {<img alt="Recipe 2" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>}
            >
              <Meta title = "this is your 2nd recipe" description= "fdfjdijf" />

            </Card>
          </Col>

          <Col span = {6}>
            <Card
              hoverable
              style = {{ width: 320}}
              cover = {<img alt="Recipe 2" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>}
            >
              <Meta title = "this is your 2nd recipe" description= "fdfjdijf" />

            </Card>
          </Col>

          <Col span = {6}>
            <Card
              hoverable
              style = {{ width: 320}}
              cover = {<img alt="Recipe 2" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>}
            >
              <Meta title = "this is your 2nd recipe" description= "fdfjdijf" />

            </Card>
          </Col>

          <Col span = {6}>
            <Card
              hoverable
              style = {{ width: 320}}
              cover = {<img alt="Recipe 2" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>}
            >
              <Meta title = "this is your 2nd recipe" description= "fdfjdijf" />

            </Card>
          </Col>

          <Col span = {6}>
            <Card
              hoverable
              style = {{ width: 320}}
              cover = {<img alt="Recipe 2" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>}
            >
              <Meta title = "this is your 2nd recipe" description= "fdfjdijf" />

            </Card>
          </Col>

          <Col span = {6}>
            <Card
              hoverable
              style = {{ width: 320}}
              cover = {<img alt="Recipe 2" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>}
            >
              <Meta title = "this is your 2nd recipe" description= "fdfjdijf" />

            </Card>
          </Col>

        </Row>


      </div>
  );
}


export default homepage;