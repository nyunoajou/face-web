import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";

import logoImage from 'images/logo.png';

const Image = styled.img`
  width: 100%;

  margin-bottom: 2rem;
`;

export default function Logo() {
  return (
    <NavLink to="/">
      <Image src={logoImage}>
      </Image>
    </NavLink>
  );
}
