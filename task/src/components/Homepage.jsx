import React, { useState } from 'react';
import { Modal, Typography, Button, Form, Input, Card, Drawer  } from 'antd';
import GoogleButton from './GoogleButton';

const { Title, Paragraph } = Typography;

import { Menu } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  MenuOutlined,
  GithubOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const [mode, setMode] = useState(null); // "login" | "signup" | null
    const [drawerVisible, setDrawerVisible] = useState(false);
  const navigate = useNavigate();

   const handleMenuClick = (e) => {
    if (e.key === 'home') navigate('/');
    else if (e.key === 'about') navigate('/about');
    // GitHub is an external link handled directly
  };

  const onSubmit = (values) => {
    console.log(mode, values);
    setMode(null); 
  };

   const menuItems = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: 'Home',
    },
    {
      key: 'about',
      icon: <InfoCircleOutlined />,
      label: 'About',
    },
    {
      key: 'github',
      icon: <GithubOutlined />,
      label: (
        <a
          href="https://github.com/AdeelAhmad45/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      ),
    },
  ];

  return (
    <div>
     <div className="w-full shadow-md bg-white px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-8">
        <div className="text-xl font-bold text-blue-600">MyApp</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        <Menu
          mode="horizontal"
          className="border-none"
          items={menuItems}
          onClick={handleMenuClick}
        />
        {/* <Button type="primary" icon={<LoginOutlined />}>
          Login
        </Button> */}
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <Button icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} />
      </div>

      {/* Drawer for Mobile Menu */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={handleMenuClick}
        />
        <Button type="primary" block className="mt-4" icon={<LoginOutlined />}>
          <GoogleButton />
        </Button>
      </Drawer>
      </div>

      {/* Right: Login Button */}
      <Button type="primary" icon={<LoginOutlined />}>
            <GoogleButton />
      </Button>
    </div>

     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl w-full items-center">

        {/* Left: Image Section */}
        <Card
  className="shadow-lg"
  cover={
    <img
      alt="Anime girl"
      src="public/left-img.jpg"
      className="object-cover h-full w-full"
    />
  }
/>

        {/* Right: Text Section */}
        <div>
          <Title level={2}>Transforming Industry with Innovation</Title>
          <Paragraph className="text-gray-700 text-lg mb-6">
            We bring cutting-edge technology and deep industry expertise together to drive transformation.
            Our team delivers scalable and secure solutions tailored to meet your specific needs.
          </Paragraph>
          <Button type="primary" size="large">
            Learn More
          </Button>
        </div>
      </div>
    </div>

   
    </div>
  );
}
