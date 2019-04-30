import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewPost(props) {

  let _name = null;
  let _text = null;

  function handleNewPostSubmisson(event) {
    event.preventDefault();
    props.onNewPostCreation({ name: _name.value, text: _text.value, likes: 0, id: v4() });
    _name.value = '';
    _text.value = '';
  }

  return (
    <div>
      <style jsx>{`
  
      `}</style>

      <h1>NewPOst Works</h1>
      <form onSubmit={handleNewPostSubmisson}>
        <h3>Create new post</h3>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => { _name = input; }} />
        <br />
        <textarea
          type='text'
          id='text'
          placeholder='text'
          ref={(textarea) => { _text = textarea; }} />
        <br />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func
}


export default NewPost;