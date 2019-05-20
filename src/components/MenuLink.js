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

  color: rgba(255, 255, 255, 0.65);

  text-decoration: none;

  &.isSelected {
    background: white;

    color: #141721;
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
