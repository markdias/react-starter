import React from 'react';
import { Layout } from 'antd';
import { Element as ScrollElement } from 'react-scroll';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './app.css';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header>
      <Navbar />
    </Header>
    <Content>
      <ScrollElement name="home"><Home /></ScrollElement>
      <ScrollElement name="about"><AboutMe /></ScrollElement>
      <ScrollElement name="portfolio"><Portfolio /></ScrollElement>
      <ScrollElement name="contact"><Contact /></ScrollElement>
    </Content>
    <Footer>
      Social Media Links Here
    </Footer>
  </Layout>
);

export default App;