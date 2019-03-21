import React from 'react';
import { Layout, Divider, Row, Col } from 'antd';
import DocumentTitle from 'react-document-title';
import '../index.css'

const { Content } = Layout;

export default function Profile(props) {
  return (
    <DocumentTitle title ='About Me'>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <h1 align={'center'}>
        Who am I?
      </h1>
      <Divider>
        <h1>
            As a Smol Girl
        </h1>
      </Divider>
        <div align={'left'}>
          <p style={paragraph}>
          I am a 20-year old bubble tea enthusiast who's not afraid to have icecream in the cold,
          my favourite games are Stardew Valley, Terraria, and the Sims,
          I love my skincare routine and playing with makeup, and my favourite restaurant right now is the Dolar Shop.
        </p>
        </div>
      
      <Divider>
        <h1>
            As a Student
        </h1>
      </Divider>
      <Row>
      <Col span={3}></Col>
      <Col span={18}>
        <p style={paragraph}>
          Why engineering? Why not? I chose this path, not because it was something I knew I wanted to do,
          but because I knew what I didn't want to do, but it was a decision I don't regret one bit. I love
          how I get to basically make something out of nothing. I love how lines of text can work together
          to form something functional out of a blank space. I love how something so simple, such as 
          high-low signals, can be manipulated into becoming a complex processor capable of running algorithms. 
          And I love I can see everything be built from scratch, bit by bit.
        </p>
      </Col>
      <Col span={3}></Col>
      </Row>

      <Divider>
        <h1>
            As an Employee
        </h1>
      </Divider>
      <Row>
      <Col span={3}></Col>
      <Col span={18}>
        <p style={paragraph}>
          I am loyal. I am dedicated. I am efficient. I've been a cafe all-rounder since 2013, and by all-rounder,
          I seriously mean all-rounder. For my cafe, I do many things from make coffee for our regular customers,
          to occasionally taking photos for our Instagram account, to even creating graphics for marketing 
          and promotional purposes. I love my job. A small group of us have been working at the cafe since we opened. We've watched
          each other grow - from stressing over our Year 10 electives to almost finishing up our university degree,
          and from seeing our manager get engaged to seeing him hold his first child. Because of my small family at
          the cafe, company culture is something I prioritise when looking for my next adventure. I hope the next
          chapter in my life provides me with a challenge that'll help me become better equipped as an engineer,
          but I also hope that it provides me with wonderful people that I get to watch grow as I grow with them.
        </p>
      </Col>
      <Col span={3}></Col>
      </Row>    
    </Content>
    </DocumentTitle>
  );
}

const paragraph = {
    align:'center',
    fontSize:'20px'
}