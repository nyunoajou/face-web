import { compose } from 'redux'
import { connect } from 'react-redux'
import { USER_POSTS_PATH } from 'constants/paths'
import { withHandlers, withStateHandlers } from 'recompose'
import { withRouter } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase'
import { withNotifications } from 'modules/notification'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'

export default compose(
  // redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Map auth uid from state to props
  connect(({ firebase: { auth: { uid } } }) => ({ uid })),
  // Wait for uid to exist before going further
  spinnerWhileLoading(['uid']),
  // Create listeners based on current users UID
  firebaseConnect(({ params, uid }) => [
    {
      path: 'posts',
      queryParams: ['orderByChild=createdBy', `equalTo=${uid}`]
    }
  ]),
  // Map posts from state to props
  connect(({ firebase: { ordered } }) => ({
    posts: ordered.posts
  })),
  // Show loading spinner while posts and collabPosts are loading
  spinnerWhileLoading(['posts']),
  // Add props.router
  withRouter,
  // Add props.showError and props.showSuccess
  withNotifications,
  // Add state and state handlers as props
  withStateHandlers(
    // Setup initial state
    ({ initialDialogOpen = false }) => ({
      newDialogOpen: initialDialogOpen
    }),
    // Add state handlers as props
    {
      toggleDialog: ({ newDialogOpen }) => () => ({
        newDialogOpen: !newDialogOpen
      })
    }
  ),
  // Add handlers as props
  withHandlers({
    addPost: props => newInstance => {
      const { firebase, uid, showError, showSuccess, toggleDialog } = props
      if (!uid) {
        return showError('You must be logged in to create a post')
      }
      return firebase
        .push('posts', {
          ...newInstance,
          createdBy: uid,
          createdAt: firebase.database.ServerValue.TIMESTAMP
        })
        .then(() => {
          toggleDialog()
          showSuccess('Post added successfully')
        })
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not add post')
          return Promise.reject(err)
        })
    },
    deletePost: props => postId => {
      const { firebase, showError, showSuccess } = props
      return firebase
        .remove(`posts/${postId}`)
        .then(() => showSuccess('Post deleted successfully'))
        .catch(err => {
          console.error('Error:', err) // eslint-disable-line no-console
          showError(err.message || 'Could not delete post')
          return Promise.reject(err)
        })
    },
    goToPost: ({ history }) => postId => {
      history.push(`${USER_POSTS_PATH}/${postId}`)
    }
  }),
)
