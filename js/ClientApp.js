import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div


var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
  render: function () {
    return (
      div(null,
        MyTitleFactory({title: '🐕 dog', color: 'peru'}),
        MyTitleFactory({title: '🐱 cat', color: 'mediumaquamarine'}),
        MyTitleFactory({title: '💰 $$$', color: 'papayawhip'}),
        MyTitleFactory({title: '🍕 pizza', color: 'rebeccapurple'})
      )
    )
  }
})

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))
