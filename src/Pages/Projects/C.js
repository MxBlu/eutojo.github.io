import React from 'react';
import { Layout } from 'antd';
import '../../index.css';

const { Content } = Layout;

export default function Profile(props) {
  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <div style={{ background: '#fff', padding: 24, marginTop: 30 }}>
        This is my skincare list!
      </div>
    </Content>
  );
}