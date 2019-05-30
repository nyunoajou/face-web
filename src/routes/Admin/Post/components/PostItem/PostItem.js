import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Form, Input, Button, Divider } from 'antd';

import renderTextInputField from 'utils/renderTextInputField';
import renderTextAreaField from 'utils/renderTextAreaField';

const { TextArea } = Input;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;

  padding: 2rem;
`;

const Title = styled.h3`
`;

const PostItem = ({ title, content, createdBy }) => (
  <Wrapper>
    <Title>{`작성자: ${createdBy}`}</Title>
    <Input value={title} disabled={true} />
    <TextArea rows={8} value={content} disabled={true} />
    <Divider />
  </Wrapper>
)

export default PostItem;
