import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll';

const portfolioData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    imgSrc: 'https://via.placeholder.com/300',
    elementName: 'project1',
    details: 'Details about Project 1',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400'
    ],
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    imgSrc: 'https://via.placeholder.com/300',
    elementName: 'project2',
    details: 'Details about Project 2',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400'
    ],
  },
];

const Portfolio = () => (
  <div id="portfolio">
    <Row gutter={[16, 16]}>
      {portfolioData.map((item, index) => (
        <Col key={index} span={8}>
          <ScrollLink to={item.elementName} smooth={true} duration={500}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.imgSrc} />}
            >
              <Card.Meta
                title={item.title}
                description={item.description}
              />
            </Card>
          </ScrollLink>
        </Col>
      ))}
    </Row>
    {portfolioData.map((item, index) => (
      <ScrollElement key={index} name={item.elementName} className="element">
        <div>
          <h2>{item.title}</h2>
          <p>{item.details}</p>
          <Row gutter={[16, 16]}>
            {item.images.map((imgSrc, imgIndex) => (
              <Col key={imgIndex} span={8}>
                <img src={imgSrc} alt={`${item.title} ${imgIndex + 1}`} style={{ width: '100%' }} />
              </Col>
            ))}
          </Row>
        </div>
      </ScrollElement>
    ))}
  </div>
);

export default Portfolio;