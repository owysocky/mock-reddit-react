import React from 'react';
// import PropTypes from 'prop-types';
// import { v4 } from 'uuid';


function NewPost() {

  let _name = null;
  let _text = null;

  return (
    <div>
      <style jsx>{`
  
      `}</style>

      <h1>NewPOst Works</h1>
      <form>
        <h3>Create new post</h3>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => { _name = input; }} />
        <br />
        <input
          type='text'
          id='text'
          placeholder='text'
          ref={(input) => { _text = input; }} />
        <br />
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}


export default NewPost;