import React from 'react';
import { Menu } from 'antd';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => (
  <Menu mode="horizontal">
    <Menu.Item key="home">
      <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
    </Menu.Item>
    <Menu.Item key="about">
      <ScrollLink to="about" smooth={true} duration={500}>About Me</ScrollLink>
    </Menu.Item>
    <Menu.Item key="portfolio">
      <ScrollLink to="portfolio" smooth={true} duration={500}>Portfolio</ScrollLink>
    </Menu.Item>
    <Menu.Item key="contact">
      <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
    </Menu.Item>
  </Menu>
);

export default Navbar;