import React, { Fragement } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message } from 'antd';
import axios from 'axios';

import CreateForm from '../CreateForm';

const Wrapper = styled.div`
`;

export default function PostPage({ addPost }) {
  return (
    <Wrapper>
      <CreateForm onSubmit={addPost} />
    </Wrapper>
  );
}
