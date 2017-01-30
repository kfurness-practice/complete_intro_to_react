import React from 'react'
import preload from '../public/data.json'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        {preload.shows.map((show, i) => {
          return (
            <div className='show-card' key={show + i}>
              <img src={`/public/img/posters/${show.poster}`} alt={`${show.title} poster`}/>
              <h3>{show.title}</h3>
              <h4>({show.year})</h4>
              <p>{show.description}</p>
            </div>
          )
        })}
      </div>
    )
  }
})

export default Search
