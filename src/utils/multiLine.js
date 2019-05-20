import React from 'react';
import styled from 'styled-components';

const StyledTypo = styled.p`
  margin: 0;
  line-height: 1.3em;
`;

export default function multiLine(text) {
  return text.split('\n').map(line => <StyledTypo>{line}</StyledTypo>);
}
