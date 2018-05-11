import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <div className='footer_previousPage'>Prev</div>
        <div className='footer_currentPage'>{this.props.page}</div>
        <div className='footer_nextPage'>Next</div>
      </div>
    )
  }
}
