import React from 'react'
import axios from 'axios'
const { shape, string } = React.PropTypes
import Header from './Header'

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string,
      omdbData: string
    })
  },
  getInitialState () {
    return {
      omdbData: {}
    }
  },
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.props.show.imdbID}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((error) => console.error('axios error', error))
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3>{this.state.omdbData.imdbRating}</h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicator' />
    }
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} alt={`${title} poster`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;showinfo=0`}
            frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
})

// STATELESS FUNCTIONAL COMPONENT
// const Details = (props) => {
//   return (
//     <div>
//       <h1>{props.params.id}</h1>
//     </div>
//   )
// }

export default Details
