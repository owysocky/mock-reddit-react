import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


function Feed(props) {
  return (


    <div>
      <h1>Feed Works</h1>
      {props.postList.map((post) =>
        <Post name={post.name}
          text={post.text}
          likes={post.likes}
          key={post.id} />
      )}
    </div>
  );
}

Feed.propTypes = {
  postList: PropTypes.array
};


export default Feed;