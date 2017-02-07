import React from 'react'
const { shape, string } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string
    })
  },
  render () {
    const { title, description, year, poster, trailer } = this.props.show
    return (
      <div className='details'>
        <header>
          <h1>Really Good Video Player</h1>
        </header>
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
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
