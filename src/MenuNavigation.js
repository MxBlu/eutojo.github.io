import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';

import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';
import BucketList from './Pages/Blog/BucketList';
import Boba from './Pages/Blog/Boba';
import Makeup from './Pages/Blog/Makeup';
import Skincare from './Pages/Blog/Skincare'
import { PreviousMap } from 'postcss';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
const { Header, Footer } = Layout;

export default class WebTabs extends React.Component {
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  handleTitleClick = ({key, domEvent}) => {
    console.log(key);
    this.setState({
      current: key
    });
  }

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', height: 'auto' }}>
            {/* <Menu
              theme='dark'
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode='horizontal'
            >
              <Menu.Item key='home' style={{width: 'auto'}}>
                <Icon type='user' /> 
                <Link to = "/"> Home </Link>
              </Menu.Item>

              <SubMenu
                title={
                  <span className='submenu-title-wrapper'>
                    <Icon type='thunderbolt' /> Blog
                  </span>
                }
                key='blog'
                onTitleClick={this.handleTitleClick}
              >
                <MenuItemGroup title='Personal'>
                  <Menu.Item key='bucket_list' disabled='true'>Bucket List</Menu.Item>
                  <Menu.Item key='boba'><Link to = "/Blog/Boba">Boba </Link></Menu.Item>
                  <Menu.Item key='skincare' disabled='true'>Skincare </Menu.Item>
                  <Menu.Item key='makeup' disabled='true'>Makeup</Menu.Item>
                </MenuItemGroup>
              </SubMenu>

              <Menu.Item key='contact'>
                <Icon type='phone' />
                <Link to="/Contact">Contact Me</Link>
              </Menu.Item>
            </Menu> */}

        </Header>        

        <Footer style={{
            position: 'fixed',
            textAlign: 'center',
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          A boba a day keeps reality away.
        </Footer>
      </Layout>
    );
  }

}
