import React from 'react'
import PropTypes from 'prop-types'
import { Layout, Menu, Icon } from 'antd';

import LoginMenu from '../Navbar/LoginMenu';

const {
  Header, Content, Footer, Sider,
} = Layout;

export default class FaceWebNavBar extends React.PureComponent {
  state = {
    selectedKey: '1',
  };

  handleClick = ({ key }) => {
    console.log(window.history);
    this.setState({ selectedKey: key });
  };

  render() {
    const { selectedKey } = this.state;

    return (
      <Menu
        theme="dark"
        mode="inline"
        onClick={this.handleClick}
        selectedKeys={[selectedKey]}
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text"></span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text"></span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text"></span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text"></span>
        </Menu.Item>
        <LoginMenu />
      </Menu>
    );
  }
}
