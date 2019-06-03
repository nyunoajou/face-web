import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { firebaseConnect } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'
import { setPropTypes, withProps } from 'recompose'
import { spinnerWhileLoading } from 'utils/components'
import { UserIsAuthenticated } from 'utils/router'

export default compose(
  // Redirect to /login if user is not logged in
  UserIsAuthenticated,
  // Add props.match
  withRouter,
  // Set proptypes of props used in HOCs
  setPropTypes({
    match: PropTypes.shape({
      params: PropTypes.shape({
        postId: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }),
  withProps(({ match: { params: { postId } } }) => ({
    postId
  })),
  firebaseConnect(({ postId }) => [{ path: `posts/${postId}` }]),
  connect(({ firebase: { data } }, { postId }) => ({
    post: get(data, `posts.${postId}`)
  })),
  // Show loading spinner while post is loading
  spinnerWhileLoading(['post']),
)
