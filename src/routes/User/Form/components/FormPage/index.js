import React, { Fragement } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message } from 'antd';
import axios from 'axios';

const Wrapper = styled.div`
`;

export default class DashboardPage extends React.PureComponent {
  render() {

    return (
      <Wrapper>
        여기는 게시판이 될 것임.
      </Wrapper>
    );
  }
}
