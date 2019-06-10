import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import Button from '@material-ui/core/Button'
import { required, validateEmail } from 'utils/form'

const SignupForm = ({ pristine, submitting, handleSubmit, classes }) => (
  <form className={classes.root} onSubmit={handleSubmit}>
    <Field
      name="username"
      component={TextField}
      label="이름"
      validate={required}
    />
    <Field
      name="email"
      component={TextField}
      label="이메일"
      validate={[required, validateEmail]}
    />
    <Field
      name="password"
      component={TextField}
      label="비밀번호"
      type="password"
      validate={required}
    />
    <div className={classes.submit}>
      <Button
        color="primary"
        type="submit"
        variant="contained"
        disabled={pristine || submitting}>
        {submitting ? '로딩중...' : '회원가입'}
      </Button>
    </div>
  </form>
)

SignupForm.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  pristine: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  submitting: PropTypes.bool.isRequired, // from enhancer (reduxForm)
  handleSubmit: PropTypes.func.isRequired // from enhancer (reduxForm - calls onSubmit)
}

export default SignupForm
