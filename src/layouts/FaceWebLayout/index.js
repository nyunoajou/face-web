import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd';

//import Navbar from 'containers/FaceWebNavBar'
import Navbar from 'containers/Navbar'

const {
  Header, Content, Footer, Sider,
} = Layout;

export const FaceWebLayout = ({ children, classes }) => (
  <Layout style={{ minHeight: '100%' }}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => { console.log(broken); }}
      onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    >
      <Navbar />
    </Sider>
    <Layout>
      {/*
      <Header style={{ background: '#fff', padding: 0 }} >
        <Navbar />
      </Header>
      */}
      <Content style={{ margin: '24px 16px 0' }}>
        <div>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        FaceWeb ©2019 Created by team Lucky
      </Footer>
    </Layout>
  </Layout>
)

FaceWebLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default FaceWebLayout
