import React, { Fragment } from 'react';
import { Layout, Timeline, Row, Col, Carousel} from 'antd';

const { Content, Header } = Layout;

class Volunteering extends React.Component {
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
      return (
        <div>
        <div align={'center'}>
        {/* <Carousel afterChange={onchange}> */}
        <div>
        {<img src={require('../Photos/volunteer.jpg')}  width={this.state.windowWidth*0.9}
        resizeMode="contain" style={{flex: 1}}
        />}
        </div>
        {/* <div> */}
        {/* {<img src={require('../Photos/me.jpg')}  width={this.state.innerWidth-220} */}
        {/* />} */}
        {/* </div> */}
        {/* </Carousel> */}
        </div>
      <Content style={{ padding: '0 50px', marginLeft: this.state.windowWidth*0.05}}>
        <div>
          <h1>
            Volunteering and Extracurriculars
          </h1>
          <div>
            <Timeline>
              <Timeline.Item color = '#A1666B'>
                <p>
                  <b>Feb 2018 - Jan 2019</b>
                  <br/>
                  <b>Comp Club UNSW</b>
                  <br/>
                  <b>Workshop Organiser</b>
                  <br/>
                  Developed and presented Python workshops for high school students:
                  <ul>
                    <li>Created the content for a game development workshop, where students programmed Space Invaders, using Pygame, and Snake, using Python Turtle, to be used in future Comp Club workshops.</li>
                    <li>Created the workshop website page using Markdown.</li>
                    <li>Commended by the executives of Young Scientists of Australia for smoothly running their first Python workshop.</li>
                  </ul>
                </p>
              </Timeline.Item>
              <Timeline.Item color='#A1666B'>
                <p>
                  <b>Jul 2017 - Dec 2017</b>
                  <br/>
                  <b>Student Network of CSE UNSW</b>
                  <br/>
                  <b>Peer Mentor</b>
                  <br/>
                  Worked...
                </p>
              </Timeline.Item>
              <Timeline.Item color='#A1666B'>
                <p>
                  <b>Jun 2016 - Jul 2017</b>
                  <br/>
                  <b>PPIA UNSW (Indonesian Society)</b>
                  <br/>
                  <b>Design and Documentation Subcommittee Member</b>
                  <br/>
                  Collaborated closely with other members of the committee to develop advertising material, as well as photograph and document events:
                  <ul>
                    <li>In charge of the film and photography for sciety events, and designed/produced posters/banners for social media campaigns, all of which were core to the society's branding.</li>
                    <li>For the Indoensian Night Market event, in collaboration with the Marketing Team, I was a large contributor to the overall theme. I was also key in the designs of the logo, jackets, and other materials, and contributed immensely in filming and producing teasers.</li>
                  </ul>
                </p>
              </Timeline.Item>
              <Timeline.Item color='#A1666B'>
                <p>
                  <b>Feb 2016 - May 2016</b>
                  <br/>
                  <b>Disability Services UNSW</b>
                  <br/>
                  <b>Scribe</b>
                  <br/>
                  Worked...
                </p>
              </Timeline.Item>
              <Timeline.Item color='#A1666B'>
                <p>
                  <b>Jan 2016 - Dec 2016</b>
                  <br/>
                  <b>IPC Randwick</b>
                  <br/>
                  <b>Sunday School Leader</b>
                  <br/>
                  Worked...
                </p>
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </Content>
      </div>
    );
      
  }
  
}

export default Volunteering;