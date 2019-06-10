import { withFirebase } from 'react-redux-firebase'
import { withHandlers, compose } from 'recompose'
import { UserIsNotAuthenticated } from 'utils/router'
import { withNotifications } from 'modules/notification'
import { withStyles } from '@material-ui/core/styles'
import styles from './SignupPage.styles'
import { message } from 'antd';

const showErrorMessage = content => message.error(content);

function handleError({ code }) {
  if (code === 'auth/email-already-in-use') {
    showErrorMessage('이메일이 중복됐습니다. 다시 입력해주세요.');
    return;
  }

  if (code === 'auth/weak-password') {
    showErrorMessage('비밀번호는 6자 이상이어야 합니다.');
    return;
  }

  showErrorMessage('알 수 없는 에러. 잠시 후에 다시 시도해주세요.');
}

export default compose(
  // Redirect to list page if logged in
  UserIsNotAuthenticated,
  // Add props.showError
  withNotifications,
  // Add props.firebase (used in handlers)
  withFirebase,
  // Add handlers as props
  withHandlers({
    onSubmitFail: props => (formErrs, dispatch, err) => {
      showErrorMessage('입력란을 확인해주세요.');

      props.showError(formErrs ? 'Form Invalid' : err.message || 'Error');
    },
    googleLogin: ({ firebase, showError }) => e =>
      firebase
        .login({ provider: 'google', type: 'popup' })
        .catch(err => showError(err.message)),
    emailSignup: ({ firebase, showError }) => creds =>
      firebase
        .createUser(creds, {
          email: creds.email,
          username: creds.username
        })
        .catch(err => handleError(err))
  }),
  // Add styles as props.classes
  withStyles(styles)
)
