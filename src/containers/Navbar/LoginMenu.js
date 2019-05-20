import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { LOGIN_PATH, SIGNUP_PATH } from 'constants/paths'

const buttonStyle = {
  color: 'white',
  textDecoration: 'none',
  alignSelf: 'center'
}

export const LoginMenu = () => (
  <div>
    <Button style={buttonStyle} component={Link} to={SIGNUP_PATH}>
      가입하기
    </Button>
    <Button style={buttonStyle} component={Link} to={LOGIN_PATH}>
      로그인
    </Button>
  </div>
)

export default LoginMenu
