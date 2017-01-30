import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'
import Landing from './Landing'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        {/* Avoid using <HashRouter> if can */}
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
