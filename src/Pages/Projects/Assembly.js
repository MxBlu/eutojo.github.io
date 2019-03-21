import React from 'react';
import { Layout, Card, Avatar } from 'antd';
import '../../index.css';
const { Content } = Layout;

export default function Profile(props) {

  const {Meta} = Card;
  
  return (
        <div>
          <h1>Assembly Projects</h1>
          <p>
            This page is currently incomplete. Please be patient!
          </p>
          <Card 
            style={{marginBottom:16}}
            title='Vending Machine'
            extra={<a href='https://bitbucket.org/eutojo/comp2121-vending-machine/src/master/'>View Code</a>}
          >
            <Meta 
            description = "AVR Assembly"
            />
          </Card>
        </div>
  );
}