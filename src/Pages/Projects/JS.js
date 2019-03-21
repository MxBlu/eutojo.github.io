import React from 'react';
import { Layout, Card, Avatar } from 'antd';
const { Content } = Layout;

export default function Profile(props) {

  const {Meta} = Card;
  
  return (
        <div>
          <h1>JS Projects</h1>
          <p>
            This page is currently incomplete. Please be patient!
          </p>

          <Card>
            <Meta 
            title = {<a href='https://eutojo.github.io/website'>Personal Website</a>}
            description = "Worked..."
            />
          </Card>

          <Card
            title = 'Spotter Mobile Application' 
            style={{marginBottom:16}}
            extra={<a href='https://bitbucket.org/eutojo/spotter-mobile-application/src/master/'>View Code</a>}
          >
            <Meta
            description="React and React Native front-end with Node JS back-end"
            />
          </Card>
        </div>
  );
}