import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      <div>
        <MyTitle title='🐴 horse' color='gainsboro' />
        <MyTitle title='🐱 cat' color='peru' />
        <MyTitle title='🐕 dog' color='lightsalmon' />
        <MyTitle title='💰 $$$' color='peachpuff' />
      </div>
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
