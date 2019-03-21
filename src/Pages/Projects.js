import React, { Fragment } from 'react';
import { Layout, Tabs } from 'antd';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../index.css';

import Overview from './Projects/Overview';
import Python from './Projects/Python';
import VHDL from './Projects/VHDL';
import Java from './Projects/Java';
import JS from './Projects/JS';
import Assembly from './Projects/Assembly';
import Powerpoints from './PPT/Powerpoints.js';
// import Instagram from './Instagram.js';
import WIP from './Temp';

const { Content } = Layout;
const TabPane = Tabs.TabPane;

// Fixes the height of the tab bar just scaling with the 100% calculation
// Because the height of a tab is the height of the text + the height of the top
// and bottom padding, it's the following calculation
const tabBarStyle = {
  height: 'calc(1em + 16px * 2)'
};

export default function Profile(props) {
  return (
    // <Fragment>
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
    <Router>
      <div style={{ background: '#D3D3D3', padding: 24, marginTop: 30 }}>
        <Tabs defaultActiveKey='1' tabBarStyle={tabBarStyle}>
          <TabPane key='1' tab='Programming Overview'>
            <Overview/>
          </TabPane>
          <TabPane key='2' tab='Python'>
            <Python/>
          </TabPane>
          <TabPane key='3' tab='Java'>
            <Java/>
          </TabPane>
          <TabPane key='4' tab='C'>
            <WIP/>
          </TabPane>
          <TabPane key='5' tab='Assembly'>
            <Assembly/>
          </TabPane>
          <TabPane key = '6' tab='VHDL'>
            <VHDL/>
          </TabPane>
          <TabPane key = '7' tab='JS'>
            <JS/>
          </TabPane>
        </Tabs>        
      </div>
      </Router>

      <div style={{ background: '#D3D3D3', padding: 24, marginTop: 30 }}>
        <Tabs defaultActiveKey='1' tabBarStyle={tabBarStyle}>
          <TabPane key='1' tab='Powerpoint Presentations'>
          <Powerpoints/>
          </TabPane>
          <TabPane key='2' tab='Instagram'>
            {/* <Instagram/> */}
          </TabPane>
        </Tabs>        
      </div>

    </Content>
    // </Fragment>
  );
}