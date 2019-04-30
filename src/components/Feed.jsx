import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


function Feed(props) {


  return (
    <div>
      <style>{`

      `}</style>
      {props.postList.map((post) =>
        <Post onClickLike={props.onClickLike}
          post={post}
          key={post.id} />
      )}
    </div>
  );
}

Feed.propTypes = {
  postList: PropTypes.array,
  onClickLike: PropTypes.func
};


export default Feed;