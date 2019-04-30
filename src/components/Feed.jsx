import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


function Feed(props) {


  return (
    <div>
      <style>{`

      `}</style>
      {props.postList.map((post) =>
        <Post
          onSetColor={props.onSetColor}
          onClickLike={props.onClickLike}
          onClickDislike={props.onClickDislike}
          post={post}
          key={post.id} />
      )}
    </div>
  );
}

Feed.propTypes = {
  postList: PropTypes.array,
  onClickLike: PropTypes.func,
  onClickDislike: PropTypes.func,
  onSetColor: PropTypes.func
};


export default Feed;