import React from 'react';
import { Layout, Card, Avatar } from 'antd';
import '../../index.css';

const { Content } = Layout;

export default function Profile(props) {

  const {Meta} = Card;
  
  return (
        <div>
          <h1>Java Projects</h1>
          <p>
            This page is currently incomplete. Please be patient!
          </p>
          <Card
            title ='P2P Protocol Circular Distributed Hash Table'
            extra = {<a href="https://bitbucket.org/eutojo/comp3331-cdht/src/master/">View Code</a>}
            style={{marginBottom:16}}
            >
            <Meta 
            description = 'Worked...'
            />
          </Card>

          <Card
            title ='Sokoban Game'
            extra = {<a href='https://bitbucket.org/comp291117/warehouse-boss/src/master/'>View Code</a>}
            style={{marginBottom:16}}
            >
            <Meta 
            description = 'Worked...'
            />
          </Card>

          <Card
            style={{marginBottom:16}}
            title = 'Van Rental Booking System'
            extra = {<a href='https://bitbucket.org/eutojo/comp2911-ass1/src/master/'>View Code</a>}
            >
            <Meta 
            description = "Worked..."
            />
          </Card>
        </div>
  );
}