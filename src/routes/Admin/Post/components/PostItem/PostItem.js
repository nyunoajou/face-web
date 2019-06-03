import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Form, Input, Button, Divider } from 'antd';
import moment from 'moment';

import renderTextInputField from 'utils/renderTextInputField';
import renderTextAreaField from 'utils/renderTextAreaField';

import AnswerForm from '../AnswerForm';

const { TextArea } = Input;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;

  padding: 2rem;
`;

const Title = styled.h3`
`;

const PostItem = ({ uid, onSubmit, title, content, userEmail, createdAt, answer }) => {
  const formatedCreatedAt = moment(createdAt).format('YYYY-MM-DD. hh:mm');

  return (
    <Wrapper>
      <Title>{`작성자: ${userEmail} (${formatedCreatedAt})`}</Title>
      <Input value={title} disabled={true} />
      <TextArea rows={8} value={content} disabled={true} />
      <AnswerForm onSubmit={onSubmit} initialValues={{ uid, answer }} disabled={answer} />
      <Divider />
    </Wrapper>
  );
}

export default PostItem;
