import React from 'react'
import PropTypes from 'prop-types'
import { isEmpty } from 'react-redux-firebase'
import { Route, Switch } from 'react-router-dom'
import PostRoute from 'routes/User/Posts/routes/Post'
import PostItem from '../PostItem';

const renderChildren = (routes, match, parentProps) =>
  routes.map(route => (
    <Route
      key={`${match.url}-${route.path}`}
      path={`${match.url}/${route.path}`}
      render={props => <route.component {...parentProps} {...props} />}
    />
  ))

export const PostsPage = ({
  posts,
  auth,
  match,
  goToPost,
}) => {
  return (
    <Switch>
      {/* Child routes */}
      {renderChildren([PostRoute], match, { auth })}
      {/* Main Route */}
      <Route
        exact
        path={match.path}
        render={() => (
          <div>
            {!isEmpty(posts) &&
                posts.map(({ key, value }) => (
                  <PostItem key={key} {...value} />
              ))}
          </div>
        )}
      />
    </Switch>
  );
}

PostsPage.propTypes = {
  match: PropTypes.object.isRequired, // from enhancer (withRouter)
  auth: PropTypes.object, // from enhancer (connect + firebaseConnect - firebase)
  posts: PropTypes.array, // from enhancer (connect + firebaseConnect - firebase)
  newDialogOpen: PropTypes.bool, // from enhancer (withStateHandlers)
  toggleDialog: PropTypes.func.isRequired, // from enhancer (withStateHandlers)
  deletePost: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  addPost: PropTypes.func.isRequired, // from enhancer (withHandlers - firebase)
  goToPost: PropTypes.func.isRequired // from enhancer (withHandlers - router)
}

export default PostsPage
