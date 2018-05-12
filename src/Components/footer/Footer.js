import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <button className='footer_previousPage'>Prev</button>
        <div className='footer_currentPage'>{this.props.page}</div>
        <button className='footer_nextPage'>Next</button>
      </div>
    )
  }
}
