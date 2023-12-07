'use client';
import React, { useState } from 'react';
import {
  CaretUpFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  CaretLeftFilled,
  CaretRightFilled,
  AccountBookFilled,
  BellFilled,
  ProjectFilled,
  IdcardFilled,
  SignalFilled,
  SearchOutlined,
  VideoCameraOutlined,
  RightOutlined,
  LeftOutlined,
  QuestionCircleOutlined,
  BellOutlined,
} from '@ant-design/icons';
import TabsComponent from '@/Components/Tabs/Tabs';
import { Layout, Menu, Button, theme, Card, Avatar, Badge, Input, Divider } from 'antd';
import CircularProgress from '@/Components/Charts/Circular';
import axios from 'axios';
import Cards from '@/Components/Cards/Cards';
import BarChart from '@/Components/Charts/BarChart';
import StackedBarChart from '@/components/Charts/StackedBarChart';
import Resources from '@/Components/Resources/Resources';
import Navbar from '@/Components/Navbar/Navbar';
import Sidebar from '@/Components/Sidebar/Sidebar';
// import projectLayout from '@/app/projects/page'
import ProjectsList from '@/Components/Projectslists/Projectslist'

const { Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  const cardData1 = {
    title: 'Total Projects',
    numberOfProjects: 13,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 5,
    progressPercentage: 15,
    progress: 75,
    isCompleted: true,
  };
  const cardData2 = {
    title: 'Completed Projects',
    numberOfProjects: 33,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 15,
    progressPercentage: 15,
    progress: 75,
    isCompleted: true,
  };
  const cardData3 = {
    title: 'Inprogress Projects',
    numberOfProjects: 25,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 35,
    progressPercentage: 55,
    progress: 35,
    isCompleted: true,
  };
  const cardData4 = {
    title: 'Unassign Projects',
    numberOfProjects: 44,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 66,
    progressPercentage: 85,
    progress: 89,
    isCompleted: true,
  };
  const cardData5 = {
    title: 'Procurements',
    numberOfProjects: 13,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 5,
    progressPercentage: 15,
    progress: 75,
    isCompleted: true,
  };
  const cardData6 = {
    title: 'Completed Projects',
    numberOfProjects: 33,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 15,
    progressPercentage: 15,
    progress: 75,
    isCompleted: true,
  };
  const cardData7 = {
    title: 'Inprogress Projects',
    numberOfProjects: 25,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 35,
    progressPercentage: 55,
    progress: 35,
    isCompleted: true,
  };
  const cardData8 = {
    title: 'Unassign Projects',
    numberOfProjects: 44,
    // imageUrl: 'https://placekitten.com/800/400', // Replace with your image URL
    totalTask: 66,
    progressPercentage: 85,
    progress: 89,
    isCompleted: true,
  };
  // const barChartData = [
  //   { name: 'A', value: 30 },
  //   { name: 'B', value: 60 },
  //   { name: 'C', value: 45 },
  //   { name: 'D', value: 80 },
  //   { name: 'E', value: 80 },
  //   { name: 'F', value: 80 },
  //   { name: 'G', value: 80 },
  //   // Add more data as needed
  // ];
  const stackedBarChartData = [
    { name: 'Angela', value1: 30, value2: 20 },
    { name: 'Jhosna', value1: 60, value2: 40 },
    { name: 'Scarlett', value1: 45, value2: 25 },
    { name: 'Benny', value1: 80, value2: 30 },
    { name: 'Andy', value1: 80, value2: 30 },
    { name: 'Chris', value1: 80, value2: 30 },
    { name: 'Rocco', value1: 80, value2: 30 },
    // Add more data as needed
  ];
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const barChartData = [
    { name: 'Prourement', 'Completed': 30, 'Incompleted': 20 },
    { name: 'HRMS', 'Completed': 60, 'Incompleted': 40 },
    { name: 'Appkube', 'Completed': 45, 'Incompleted': 25 },
    { name: 'EMS', 'Completed': 80, 'Incompleted': 30 },
    { name: 'Xformation', 'Completed': 80, 'Incompleted': 30 },
    { name: 'SPM', 'Completed': 30, 'Incompleted': 20 },
    // Add more data as needed
  ];
  const tabData = [
    {
      title: 'All',
      content: (
        <>
          <div className='flex flex-row'>
            <Cards {...cardData5} />
            <Cards {...cardData6} />
            <Cards {...cardData7} />
            <Cards {...cardData8} />
          </div>
        </>
      ),
    },
    {
      title: 'Inprogress',
      content: (
        <>
          <div className='flex flex-row'>
            <Cards {...cardData5} />
            <Cards {...cardData6} />
            <Cards {...cardData7} />
            <Cards {...cardData8} />
          </div>
        </>
      ),
    },
    {
      title: 'Completed',
      content: (
        <>
          <div className='flex flex-row'>
            <Cards {...cardData5} />
            <Cards {...cardData6} />
            <Cards {...cardData7} />
            <Cards {...cardData8} />
          </div>
        </>
      ),
    },
    // Add more tabs as needed
  ];
  return (
    <>
      <Layout theme="dark" style={{ minHeight: '100vh' }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
          className="fixed "
          style={{ position: 'fixed', height: '100vh' }}
        >
          <h5 className='uppercase bg-[#001529] text-white text-2xl p-4'>Synect<span className='text-red-700'>i</span>ks</h5>
          {/* ... your existing Sider content */}
          <Menu className='relative'
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              {
                key: '1',
                icon: <ProjectFilled />,
                label: 'Dashboard',
                path: '/'
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Projects',
                path: '/projects'
              },
              {
                key: '3',
                icon: <SignalFilled />,
                label: 'Team',
              },
              {
                key: '4',
                icon: <IdcardFilled />,
                label: 'Reports',
              },
              {
                key: '5',
                icon: <AccountBookFilled />,
                label: 'Preference',
              },
              {
                key: '6',
                icon: <BellFilled />,
                label: 'Notifications',
              },
            ]}
          />
          <Button theme="dark"
            className='bg-white absolute top-2/4 -right-3'
            type="text"
            icon={collapsed ? < RightOutlined className='' /> : <LeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 16,
              height: 64,
              clipPath: `polygon(0 0, 100% 21%, 99% 80%, 0% 100%)`
            }}
          />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: collapsed ? 80 : 200 }}>
          <Navbar />
          <Content style={{ margin: '18px 16px', padding: '0px 10px', minHeight: 280 }}>

          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
