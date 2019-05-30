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

  padding: 2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

const CreateForm = ({ submitting, handleSubmit }) => (
  <Wrapper>
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="title"
          label="제목"
          component={renderTextInputField}
          disabled={submitting}
        />
      </div>
      <div>
        <Field
          name="content"
          label="내용"
          component={renderTextAreaField}
          disabled={submitting}
        />
      </div>
      <ButtonWrapper>
        <Button loading={submitting} htmlType="submit" type="primary">
          완료
        </Button>
      </ButtonWrapper>
    </form>
  </Wrapper>
)

CreateForm.propTypes = {
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired, // from enhancer (reduxForm)
}

export default CreateForm;
