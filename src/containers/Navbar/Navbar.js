import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Layout, Menu, Icon, Spin } from 'antd';

import { LIST_PATH } from 'constants/paths'
import MenuLink from 'components/MenuLink';

import Logo from './Logo';
import AccountMenu from './AccountMenu'
import LoginMenu from './LoginMenu'

const {
  Header, Content, Footer, Sider,
} = Layout;

const NavFooter = styled.div`
  margin-top: 3rem;
`;

const StyledLink = styled(Link)`
  display: block;

  width: 100%;

  text-decoration: none;
`;

const userMenu = [{
  icon: 'radar-chart',
  to: '/user/dashboard',
  label: '측정하기',
}, {
  icon: 'edit',
  to: '/user/form',
  label: '질문하기',
}];

const adminMenu = [{
  icon: 'edit',
  to: '/admin/posts',
  label: '요청 질문들',
}];

export default function Navbar ({
  avatarUrl,
  displayName,
  authExists,
  goToAccount,
  handleLogout,
  closeAccountMenu,
  anchorEl,
  handleMenu,
  classes,
  isLoaded,
  auth: { email },
  ...props
}) {
  const path = props.history.location.pathname;
  const isAdmin = email === 'admin@test.com';

  return (
    <Menu
      mode="inline"
      onClick={() => {}}
    >
      <Logo />
      {!isLoaded ? <Spin /> : authExists && isAdmin ? (
          adminMenu.map((data, index) => <MenuLink key={index} isSelected={data.to === path} {...data} />)
        ) : (
          userMenu.map((data, index) => <MenuLink key={index} isSelected={data.to === path} {...data} />)
      )}
      <NavFooter>
        {authExists ? (
          <AccountMenu
            avatarUrl={avatarUrl}
            displayName={displayName}
            onLogoutClick={handleLogout}
            goToAccount={goToAccount}
            closeAccountMenu={closeAccountMenu}
            handleMenu={handleMenu}
            anchorEl={anchorEl}
          />
        ) : isLoaded ? (
          <LoginMenu />
        ) : (
          <Spin />
        )}
      </NavFooter>
    </Menu>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  displayName: PropTypes.string, // from enhancer (flattenProps - profile)
  avatarUrl: PropTypes.string, // from enhancer (flattenProps - profile)
  authExists: PropTypes.bool, // from enhancer (withProps - auth)
  goToAccount: PropTypes.func.isRequired, // from enhancer (withHandlers - router)
  handleLogout: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  closeAccountMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  handleMenu: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  anchorEl: PropTypes.object // from enhancer (withStateHandlers - handleMenu)
}
