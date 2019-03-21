import React from 'react';
import { Layout, Timeline, Icon, Divider, Row, Col, Avatar } from 'antd';
import DocumentTitle from 'react-document-title';

import '../index.css';

const { Content, Header } = Layout;

class Resume extends React.Component {
    state = {
      windowHeight: undefined,
      windowWidth: undefined
    }

    handleResize = () => this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    })

    componentDidMount() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }

  render() {

    var margins = this.state.windowHeight * 0.05;

    return (
      <div>
        <DocumentTitle title='Why Eunike?'>
      <Content style={{ padding: '0 50px', marginLeft: {margins}, marginLeft: {margins}}}>
        {/* About Me Section */}
        <div>
            <Divider>
              <h1>
                About Me
              </h1>
            </Divider>
            <div align={'center'}>
                <div>
                <Icon type='mail'/>
                <a href='mailto:eunikeutojo98@gmail.com'> eunikeutojo98@gmail.com</a> 
                <br/>
                </div>
                <div>
                <Icon type='linkedin'/>
                <a href='https://linkedin.com/in/eutojo/'> linkedin.com/in/eutojo</a>
                <br/>
                </div >
                <div>
                <Icon type='code' />
                <a href='https://bitbucket.org/eutojo/'> bitbucket.org/eutojo</a>
                </div>
                </div>
          </div>
        {/* Education Section */}
        <div>
            <Divider>
              <h1>
                Education
              </h1>
            </Divider>
            <div align={'center'}>
                <b>2016 - 2020 (Expected)</b>
                <br/>
                <b className={'heading'}>UNSW: Bachelor of Engineering (Computer) / Masters of Biomedical 
                  Engineering</b>
                <br/>
                Weighted Average Mark (WAM): 72.72 <br/>
                Academic transcript available upon request.
            </div> 
          </div>

          {/* Skills Section */}
          <div>
            <Divider>
              <h1>
                Skills
              </h1>
            </Divider>
            <div align={'center'}>
              <b>Languages</b>
              <br/>
              <p>JS (React, React-Native, Node), Python, Java, C, Assembly (MIPS, AVR), VHDL</p>
              <b>Technologies</b>
              <p>Git, Eclipse, VS Code, Unix/Linux, Adobe Illustrator/Photoshop, Microsoft Powerpoint/Excel/Word, Xilinx ISE Design Suite, Quartus II, Sketch</p>
            </div> 
          </div>

        <div align={'center'}>
        <Divider>
          <h1>
            Work Experience
          </h1>
        </Divider>
            <p>
            <b>Sep 2018 - March 2019</b>
            <br/>
            <b className={'heading'}>UNSW: Student Assistant</b>
            <br/>
            Collaborated closely with Computer Engineering PhD students 
            and their supervisors in order to create engaging presentations 
            that best showcase their research results. One of my clients won 
            best paper at Embedded Systems Week in 2018!
          </p>
          <p>
            <b>Jun 2017 - Dec 2017</b>
            <br/>
            <b className={'heading'}>Toll Group: Data Entry Operator</b>
            <br/>
            Responsible for data entry of around 300 cargo documents 
            in 3 hours from renowned clients into the company's system. 
            I was required to have high attention to detail and accuracy 
            in order to complete efficiently and on time.
          </p>
          <p>
            <b>Apr 2017 - Jan 2018</b>
            <br/>
            <b className={'heading'}>Code Camp: Assistant Teacher</b>
            <br/>
            Assisted the Head Teacher in managing a class of 25 primary 
            school children and helping them build their own games using 
            Stencyl. I had to think on my feet and debug quickly to 
            ensure that students left the workshops with a sense of 
            accomplishment. I also had to simplify complex programming 
            ideas to young students such that they could grasp a basic 
            understanding of coding.
            
          </p>
          <p>
            <b>Jun 2016 - Sep 2017</b>
            <br/>
            <b className={'heading'}>Ezy Math Tutoring: High School Mathematics Tutor</b>
            <br/>
            Provided assistance to high schoolers struggling with mathematics in 
            order to improve their skills and boost their confidence. I 
            had to teach them the fundamentals and the basics of mental 
            maths, as well as encourage my client to become a more 
            independent learner. It was highly rewarding to see my 
            client's marks improve significantly with each report.
          </p>
          <p>
            <b>Nov 2013 - Current</b>
            <br/>
            <b className={'heading'}>San Churro: Café All-Rounder</b>
            <br/>
            Worked as part of a rostered team in order to provide 
            excellent customer service, which I have been commended for 
            by our regular customers, as well as my store managers. I am 
            also trusted with the induction of new employees and am also 
            the go-to person for marketing and promotional ideas and 
            graphics.
          </p>
        <div>
          
          </div>
        </div>
      </Content>
      </DocumentTitle>
      </div>
    );
  }
}

export default Resume;