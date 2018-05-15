import React, { Component } from 'react'
import API_KEY from './config/apiKey'
import axios from 'axios'

import Navbar from './Components/navbar/Navbar'
import NavAppBar from './Components/navAppBar/NavAppBar'
import Movies from './Components/movies/Movies'
import Footer from './Components/footer/Footer'

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

  fetchData = async pageNum => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${this.state.type}?api_key=${API_KEY}&language=en-US&page=${this.state.pageNum}`
    )
    const results = response.data
    this.setState({ data: results })
  }

  render () {
    console.log(this.state.data)
    return (
      <div className='wrapper'>
        <NavAppBar />
        <h1>{window.innerWidth}</h1>

        <Movies data={this.state.data.results} />

        <Footer
          fetchData={this.fetchData}
          pages={this.state.data.total_pages}
          page={this.state.data.page}
        />
      </div>
    )
  }
}

export default App
