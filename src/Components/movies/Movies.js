import React, { Component } from 'react'
import './movies.css'

class Movies extends Component {
  state = {
    isOpen: true
  }

  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    const data = this.props.data
    const imgUrl = 'https://image.tmdb.org/t/p/w500'

    if (data === undefined) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='movies_container'>
          <button onClick={this.handleClick}>CLOSE THE DOOR</button>
          {data.map(item => (
            <div
              className='movies_item'
              key={item.id}
              // style={{
              //   background: `center / cover no-repeat url(${imgUrl}${item.backdrop_path})`
              // }}
            >
              <img
                className={this.state.isOpen ? 'movies_item_img' : 'none'}
                src={imgUrl + item.backdrop_path}
                alt={item.title}
              />
              <div className='movies_item_title'>{item.title}</div>
              <div className='movies_item_overview'>
                {this.state.isOpen ? item.overview : <p />}
              </div>
            </div>
          ))}
        </div>
      )
    }
  }
}

export default Movies
