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
            style={{marginBottom:16}}
            title = {<a href= 'https://summer2019.compclub.com.au/'>
            Comp Club Summer School 2019</a>}
            >
            <Meta 
            //avatar = {<img height={100} src={require("./Python/image2.png")}/>}
            description = {'Organised and ran the Game Development' +
            'workshop with my partner which was based around ' +
            'creating a Snake game using Python turtle.'}
            />
          </Card>

          <Card
            title = {<a href='https://winter.compclub.com.au/'> Comp Club Winter School 2018</a>}
            >
            <Meta 
            //avatar = {<img height={100} src={require("./Python/image.png")}/>}
            description = 'lola'
            />
          </Card>
        </div>
  );
  }