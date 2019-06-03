import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'

import { success, error } from 'components/Messages';
import { LIST_PATH } from 'constants/paths'

export default compose(
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid, email } } }) => ({ uid, email })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  firebaseConnect(({ params, uid }) => [
    {
      path: 'posts',
      queryParams: ['orderByChild=createdBy', `equalTo=${uid}`]
    }
  ]),
  // Add props.router
  withRouter,
  // Add handlers as props
  withHandlers({
    addPost: props => newInstance => {
      const { firebase, uid, email } = props
      if (!uid) {
        return error('로그인이 필요한 작업입니다.');
      }
      return firebase
        .push('posts', {
          ...newInstance,
          userEmail: email,
          createdBy: uid,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        })
        .then(() => {
          success('작성을 성공적으로 마무리했습니다.');
        })
        .catch(err => {
          console.error('Error:', err); // eslint-disable-line no-console
          error(err.message || '실패.');
          return Promise.reject(err);
        })
    },
  }),
)
