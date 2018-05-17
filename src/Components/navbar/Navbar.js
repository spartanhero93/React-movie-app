import React, { Component } from 'react'
import HamburgerMenu from 'react-hamburger-menu'
import IconButton from 'material-ui/IconButton'
import Search from '@material-ui/icons/Search'
import './navbar.css'

class Navbar extends Component {
  state = {
    hamburgerIsOpen: false
  }

  toggleNavbar = () => {
    this.setState({ hamburgerIsOpen: !this.state.hamburgerIsOpen })
  }

  render () {
    return (
      <div className='navigation_wrapper'>
        <div className='navigation_hamburger'>
          <HamburgerMenu
            isOpen={this.state.hamburgerIsOpen}
            menuClicked={this.toggleNavbar}
            color='white'
          />
        </div>
        <nav className='navigation_nav'>
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
        <div className='navigation_searchBar'>
          <IconButton color='primary' aria-label='Search Top Rated'>
            <Search />
          </IconButton>
          <input className='search_input' type='text' />
        </div>
      </div>
    )
  }
}

export default Navbar
