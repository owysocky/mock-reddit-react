import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Feed(props) {
  return (
    <div>
      {props.ticketList.map((post) =>
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