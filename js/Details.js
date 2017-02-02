import React from 'react'

const Details = React.createClass({
  render () {
    return (
      <pre><code>
        {JSON.stringify(this.props, null, 4)}
      </code></pre>
    )
  }
})

// const Details = (props) => {
//   return (
//     <div>
//       <h1>{props.params.id}</h1>
//     </div>
//   )
// }

export default Details
