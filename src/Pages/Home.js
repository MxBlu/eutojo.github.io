import React from 'react';
import { Layout, Button } from 'antd';
import DocumentTitle from 'react-document-title';

const { Content } = Layout;

export default function Profile(props) {
  return (
    <DocumentTitle title='Welcome~'>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <h1 align={'center'}>
          Student
      </h1>
      
    </Content>
    </DocumentTitle>
  );
}