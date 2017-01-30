import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'
import Landing from './Landing'
import Search from './Search'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        {/* Avoid using <HashRouter> if can */}
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
