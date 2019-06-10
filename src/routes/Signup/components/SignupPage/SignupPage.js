import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import GoogleButton from 'react-google-button'
import Paper from '@material-ui/core/Paper'
import { LOGIN_PATH } from 'constants/paths'
import SignupForm from '../SignupForm'

const SignupPage = ({ emailSignup, googleLogin, onSubmitFail, classes }) => (
  <div className={classes.root}>
    <Paper className={classes.panel}>
      <SignupForm onSubmit={emailSignup} onSubmitFail={onSubmitFail} />
    </Paper>
    <div className={classes.orLabel}>또는</div>
    <div className={classes.providers}>
      <GoogleButton onClick={googleLogin} />
    </div>
    <div className={classes.login}>
      <span className={classes.loginLabel}>이미 가입을 하셨나요?</span>
      <Link className={classes.loginLink} to={LOGIN_PATH}>
        로그인
      </Link>
    </div>
  </div>
)

SignupPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  emailSignup: PropTypes.func.isRequired, // from enhancer (withHandlers)
  googleLogin: PropTypes.func.isRequired, // from enhancer (withHandlers)
  onSubmitFail: PropTypes.func.isRequired // from enhancer (reduxForm)
}

export default SignupPage
