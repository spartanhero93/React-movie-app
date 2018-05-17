import React, { Component } from 'react'
import './movies.css'

class Movies extends Component {
  render () {
    const data = this.props.data
    const imgUrl = 'https://image.tmdb.org/t/p/w500'

    if (data === undefined) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='movies_container'>
          {data.map(item => (
            <div className='movies_item' key={item.id}>
              <img
                className='movies_item_img'
                src={imgUrl + item.backdrop_path}
                alt={item.title}
              />
              <div className='movies_item_title'>{item.title}</div>
              <div className='movies_item_overview' />
            </div>
          ))}
        </div>
      )
    }
  }
}

export default Movies
