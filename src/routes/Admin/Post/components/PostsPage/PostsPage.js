import React, { Fragement } from 'react';
import styled from 'styled-components';
import { Upload, Icon, message } from 'antd';
import axios from 'axios';

import PostItem from '../PostItem';

const Wrapper = styled.div`
`;

export default function PostsPage({ posts }) {
  console.log(posts);
  return (
    <Wrapper>
      {posts.map(({ key, value }) => <PostItem key={key} {...value} />)}
    </Wrapper>
  );
}
