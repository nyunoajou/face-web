import React, { Fragment } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Input, Divider, Typography } from 'antd';
import moment from 'moment';

const { Title } = Typography;

const { TextArea } = Input;

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
`;

const StyledInput = styled(Input)`
  width: 100%;

  margin-bottom: 1rem;
`;

const StyledTextArea = styled(TextArea)`
  width: 100%;

  margin-bottom: 1rem;
`;

export default function PostItem({ content, title, answer, createdAt }) {
  const formatedCreatedAt = moment(createdAt).format('YYYY-MM-DD. hh:mm');

  return (
    <Wrapper>
      <Title level={4}>{`${title} (${formatedCreatedAt})`}</Title>
      <StyledTextArea rows={4} value={`-내용-\n${content}`} disabled={true} />
      <Title level={4}>답변</Title>
      {answer ?
        <StyledTextArea rows={4} value={`-답변-\n${answer}`} disabled={true} /> :
        <div>아직 답변이 없습니다.</div>
      }
      <Divider />
    </Wrapper>
  );
}
