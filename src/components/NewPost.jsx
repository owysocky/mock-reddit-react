import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function NewPost(props) {

  return (
    <div>
      <style jsx>{`
  
      `}</style>

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


export default NewTicketForm;