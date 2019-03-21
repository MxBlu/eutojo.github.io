import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Menu, Icon, Layout } from 'antd';

import 'antd/dist/antd.css';
import './index.css';


import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Me from './Pages/Me';
import Resume from './Pages/Resume';
import Volunteering from './Pages/Volunteering';

// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Men.ItemGroup;
const {Footer,Header} = Layout;

const routing = (

  <Fragment>
    <Router>
      <div style={{background:'#787476'}}>
      <Header align='right' style={{background:'transparent'}}>
        <Menu
          //theme='dark'
          mode='horizontal'
          type='flex' 
          style={{background:'transparent'}}
        >
          <Menu.Item key='home' type='flex'>
            <Link to='/' style={{color:'white'}}> Home </Link>
          </Menu.Item>

          <Menu.Item key='me'>
            <Link to='/me' style={{color:'white'}}>Me</Link>
          </Menu.Item>

          <Menu.Item key='resume'>
            <Link to='/resume' style={{color:'white'}}>Resume</Link>
          </Menu.Item>

          <Menu.Item key='volunteering'>
            <div style={{color:'white'}}>
              <Link to='/volunteering' style={{color:'white'}}>Volunteering</Link>
            </div>
          </Menu.Item>

          <Menu.Item key='projects' type='flex'>
            <Link to='/projects' style={{color:'white'}}>Projects</Link>
          </Menu.Item>

          <Menu.Item key='blog'disabled='true'>
            <div style={{color:'white'}}>
              Blog
            </div>
          </Menu.Item>

          <Menu.Item key='contact'disabled='true'>
            <div style={{color:'white'}}>
            <a href='mailto:eunikeutojo98@gmail.com'>Contact</a>
            </div>
          </Menu.Item>
        </Menu>
        </Header>
        {/* <Switch> */}
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/me' component={Me} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/volunteering' component={Volunteering} />
          <Route exact path='*' component={routing}/>
        {/* </Switch> */}
      </div>
    </Router>
    <Layout>
      <Footer style={{
        position: 'sticky',
        textAlign: 'center',
        bottom: 0,
        left: 0,
        right: 0,
        background:'#787476'
      }}>
        <div style={{color:'white'}}>
          A boba a day keeps the anxiety away.
        </div>
      </Footer>
    </Layout>
  </Fragment>
)

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>{routing}</Router>,
  document.getElementById('root'),
);