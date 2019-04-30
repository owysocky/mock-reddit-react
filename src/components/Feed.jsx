import React from 'react';
import Post from './Post';
// import PropTypes from 'prop-types';


function Feed() {
  let postList = [];
  return (


    <div>
      <h1>Feed Works</h1>
      {postList.map((post) =>
        <Post name={post.name}
          text={post.text}
          likes={post.likes}
          key={post.id} />
      )}
    </div>
  );
}


export default Feed;