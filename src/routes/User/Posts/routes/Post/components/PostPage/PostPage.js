import React from 'react'
import PropTypes from 'prop-types'

const PostPage = ({ post, postId }) => {
  console.log(post);

  return (
    <div>
      {postId}
    </div>
  );
}

PostPage.propTypes = {
  classes: PropTypes.object.isRequired, // from enhancer (withStyles)
  post: PropTypes.object.isRequired, // from enhancer (connect)
  postId: PropTypes.string.isRequired // from enhancer (withProps)
}

export default PostPage
