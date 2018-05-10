import React, { Component } from 'react'
import API_KEY from './config/apiKey'
import axios from 'axios'

import Navbar from './Components/navbar/Navbar'
import Movies from './Components/movies/Movies'

import './App.css'

class App extends Component {
  state = {
    type: 'top_rated',
    pageNum: 1,
    data: {}
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.type}?api_key=${API_KEY}&language=en-US&page=${this.state.pageNum}`
    )
    const results = response.data
    this.setState({ data: results })
  }

  render () {
    return (
      <div className='wrapper'>
        <Navbar />
        <Movies data={this.state.data.results} />
      </div>
    )
  }
}

export default App
