import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Match } from 'react-router'
import '../public/normalize.css'
import '../public/style.css'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        {/* Avoid using <HashRouter> if can, instead use BrowserRouter */}
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
          <Match pattern='/details/:id' component={Details} />
        </div>
      </BrowserRouter>
    )
  }
})

render(<App />, document.getElementById('app'))
