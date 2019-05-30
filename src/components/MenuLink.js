import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Menu, Icon } from 'antd';

const StyledLink = styled(NavLink)`
  display: block;

  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 24px;

  color: black;

  text-decoration: none;

  &.isSelected {
    background: #e6f7ff;

    color: #1890ff;

    border-right: 3px solid #1890ff;
  }

  > i {
    min-width: 14px;
    margin-right: 10px;
    font-size: 14px;
  }
`;



export default function MenuLink({ icon, to, label, isSelected }) {
  console.log('link render');

  return (
    <StyledLink className={isSelected && 'isSelected'} to={to}>
      <Icon type={icon} />
      <span className="nav-text">{label}</span>
    </StyledLink>
  );
}
