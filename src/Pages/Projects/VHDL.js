import React from 'react';
import { Layout, Card, Avatar } from 'antd';
import '../../index.css';

const { Content } = Layout;

export default function Profile(props) {

  const {Meta} = Card;
  
  return (
        <div>
          <h1>Python Projects</h1>
          <p>
            This page is currently incomplete. Please be patient!
          </p>
          <Card
            title= 'Modified Blackjack Simulator'
            style={{marginBottom:16}}
            extra={<a href='https://bitbucket.org/eutojo/comp3222-blackjack/src/master/'>View Code</a>}>
            <Meta 
            description = "Worked..."
            />
          </Card>

          <Card
            title = 'Pipelined Uniprocessor AE Encryptor'
            extra ='View Code'
            style={{marginBottom:16}}
            >
            <Meta 
            description = "Worked..."
            />
          </Card>

          <Card
            title = 'Unpipelined Uniprocessor AE Encryptor'
            extra ='View Code'
            style={{marginBottom:16}}
            >
            <Meta 
            description = "Worked..."
            />
          </Card>
        </div>
  );
}