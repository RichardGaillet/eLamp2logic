import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MainPage from './components/MainPage'

class App extends Component {

  render() {
    return (
      <BrowserRouter basename='/'>
        <div className='app'>
          <Switch>
            <Route
              exact
              path='/'
              component={MainPage}
            />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App