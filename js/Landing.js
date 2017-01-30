import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>Really Good Video Player</h1>
          <input type='text' placeholder='Search' />
          <Link to='/search'>or Browse All</Link>
        </div>
      </div>
    )
  }
})

export default Landing
