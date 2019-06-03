import { compose } from 'redux'
import { connect } from 'react-redux'
import { withHandlers, withStateHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'

import { success, error } from 'components/Messages';

export default compose(
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  firebaseConnect(({ params }) => [
    {
      path: 'posts',
      queryParams: ['orderByChild=createdBy']
    }
  ]),
  // Map posts from state to props
  connect(({ firebase: { ordered } }) => ({
    posts: ordered.posts
  })),
  // Show loading spinner while posts and collabProjects are loading
  spinnerWhileLoading(['posts']),
  // Add props.router
  withRouter,
  // Add handlers as props
  withHandlers({
    updatePost: props => ({ uid, answer }) => {
      const { firebase, uid: userUid } = props
      if (!userUid) {
        return error('로그인이 필요한 작업입니다.');
      }
      return firebase
        .update(`posts/${uid}`, {
          answer,
          updatedAt: firebase.database.ServerValue.TIMESTAMP
        })
        .then(() => {
          success('답변 완료!');
        })
        .catch(err => {
          console.error('Error:', err); // eslint-disable-line no-console
          error(err.message || '실패.');
          return Promise.reject(err);
        })
    },
  }),
)
