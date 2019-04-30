import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <h4>{props.likes}</h4>
        </div>
    );
}

Post.propTypes = {
    name: PropTypes.string,
    text: PropTypes.string,
    likes: PropTypes.number
}

export default Post;