import React, { Component } from 'react';
import {Link} from 'react-router'

const Navbar = () => {
  return (
    <div>
      <ul>
        <button><Link to={'/campuses'}>Campuses</Link></button>
        <button><Link to={'/students'}>Students</Link></button>
      </ul>
    </div>
  )
}

export default Navbar
