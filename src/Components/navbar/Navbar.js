import React, { Component } from 'react'
import './navbar.css'

class Navbar extends Component {
  state = {}

  render () {
    return (
      <nav className='navigation__nav'>
        <ul className='navigation_list'>
          <li className='navigation_item'>
            <a className='navigation_link' href='/'>Home</a>
          </li>
          <li className='navigation_item'>
            <a className='navigation_link' href='/'>Movies</a>
          </li>
          <li className='navigation_item'>
            <a className='navigation_link' href='/'>Most Popular</a>
          </li>
          <li className='navigation_item'>
            <a className='navigation_link' href='/'>Top Rated</a>
          </li>
          <li className='navigation_item'>
            <a className='navigation_link' href='/'>In Theathers</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar
