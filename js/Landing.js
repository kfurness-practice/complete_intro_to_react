import React from 'react'

const Landing = React.createClass({
  render () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>Really Good Video Player</h1>
          <input type='text' placeholder='Search' />
          <a>or Browse All</a>
        </div>
      </div>
    )
  }
})

export default Landing
