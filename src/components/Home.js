import React from 'react';
import { Typography, Card, Row, Col, Input } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Home = () => (
  <div id="home">
    <Title>Welcome to My Portfolio</Title>
    <Paragraph>
      I am a freelance print designer. Check out my work below.
    </Paragraph>
    <Row gutter={16}>
      <Col span={12}>
        <Card
          cover={<img alt="Example Image" src="https://via.placeholder.com/300" />}
        >
          <Card.Meta
            title="Project Overview"
            description="A brief description of the project."
          />
          <div style={{ marginTop: '16px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
              <FacebookOutlined style={{ fontSize: '24px' }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '8px' }}>
              <TwitterOutlined style={{ fontSize: '24px' }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined style={{ fontSize: '24px' }} />
            </a>
          </div>
        </Card>
      </Col>
      <Col span={12}>
        <TextArea
          rows={4}
          placeholder="Write something about the project..."
          style={{ height: '100%', resize: 'none' }}
        />
      </Col>
    </Row>
  </div>
);

export default Home;
