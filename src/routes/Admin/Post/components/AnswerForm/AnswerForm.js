import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { Form, Input, Button } from 'antd';

import renderTextInputField from 'utils/renderTextInputField';
import renderTextAreaField from 'utils/renderTextAreaField';

const { TextArea } = Input;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;

  margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const AnswerForm = ({ disabled, submitting, handleSubmit }) => (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="answer"
          label="답변"
          component={renderTextAreaField}
          disabled={submitting || disabled}
        />
      </div>
      <ButtonWrapper>
        <Button disabled={disabled} loading={submitting} htmlType="submit" type="primary">
          완료
        </Button>
      </ButtonWrapper>
    </form>
  </Wrapper>
)

AnswerForm.propTypes = {
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
}

export default AnswerForm;
