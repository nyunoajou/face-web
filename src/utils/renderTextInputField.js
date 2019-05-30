import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

const renderTextInputField = ({
  input,
  meta: { touched, error, warning },
  placeholder,
  label,
  type,
  formItemStyle,
  inputStyle,
  hasFeedback,
  labelCol,
  wrapperCol,
  disabled,
  hasButton,
}) => {
  const defaultHasFeedback = hasFeedback === undefined ? true : hasFeedback;
  const defaultLabelCol = !labelCol ? { span: 4 } : labelCol;
  const defaultWrapperCol = !wrapperCol ? { span: 20 } : wrapperCol;
  let errorProps = null;
  let warningProps = null;
  let successProps = null;

  if (touched) {
    if (error) {
      errorProps = {
        validateStatus: 'error',
        help: error,
      };
    }

    if (warning) {
      warningProps = {
        validateStatus: 'warning',
        help: warning,
      };
    }

    if (!error && !warning && input.value) {
      successProps = {
        validateStatus: 'success',
      };
    }
  }

  return (
    <FormItem
      labelCol={defaultLabelCol}
      wrapperCol={defaultWrapperCol}
      colon={false}
      label={label}
      hasFeedback={defaultHasFeedback}
      style={formItemStyle}
      {...errorProps || warningProps || successProps}
    >
      <Input
        size="large"
        style={inputStyle}
        type={type}
        {...input}
        placeholder={placeholder}
        disabled={disabled}
      />
    </FormItem>
  );
};

export default renderTextInputField;
