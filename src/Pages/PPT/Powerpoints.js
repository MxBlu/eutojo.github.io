import React from 'react';
import { Layout, Card, Col, Row } from 'antd';
import '../../index.css';
const { Content } = Layout;

export default function Profile(props) {

  const {Meta} = Card;
  
  return (
    <div>
        <h1>Powerpoint Projects</h1>
        <p>
        This page is currently incomplete. Please be patient!
        </p>
        <div className="card">
        <Row gutter={16} type='flex'>
          <Col type='flex'>
            <Card
            title='Design Project A: Second Presentation'
            style={{marginBottom:6}}
            >
              <Meta 
              description = {<iframe src="https://unsw-my.sharepoint.com/personal/z5116858_ad_unsw_edu_au/_layouts/15/Doc.aspx?sourcedoc={95b4e66c-e3d3-462a-917e-7ec54567eecd}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office Online</a>.</iframe>}
              />
            </Card>
          </Col>

          <Col type='flex'>
          <Card
          title='Design Project A: First Presentation'
          style={{marginBottom:16}}
          >
          <Meta 
          description = {<iframe src="https://unsw-my.sharepoint.com/personal/z5116858_ad_unsw_edu_au/_layouts/15/Doc.aspx?sourcedoc={14f1cfb2-fee9-478e-ab1d-a5fa527dfe00}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office Online</a>.</iframe>}          />
          </Card>
          </Col>

          <Col type='flex'>
          <Card
          title = 'Computer Architecture: Final Presentation'
          style={{marginBottom:16}}
          >
          <Meta 
          description = {<iframe src="https://unsw-my.sharepoint.com/personal/z5116858_ad_unsw_edu_au/_layouts/15/Doc.aspx?sourcedoc={07cf2cb3-5893-47e1-b0f6-9520bef1504c}&amp;action=embedview&amp;wdAr=1.7777777777777777" width="350px" height="221px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office Online</a>.</iframe>}
          />
          </Card>
          </Col>
        </Row>
        </div>
    </div>
  );
}
