import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import './navbar.css'

class Navbar extends Component {
  state = {
    isOpen: false
  }

  toggleNavbar = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <nav className='navigation_nav'>
        <div className='navigation_hamburger'>
          <HamburgerMenu
            isOpen={this.state.isOpen}
            menuClicked={this.toggleNavbar}
            color='white'
          />
        </div>
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
