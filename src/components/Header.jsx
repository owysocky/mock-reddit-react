import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  let style = {
    padding: '10px'
  }
  return (
    <div>
      <h1>Reddit</h1>
      <Link style={style} to="/">Feed</Link>
      <Link style={style} to="/newpost">Create Post</Link>
    </div>

  );
}

export default Header;
