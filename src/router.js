import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './pages/App'
import Browse from './pages/Browse'
import Radio from './pages/Radio'

export default function () {
  return <BrowserRouter>
    <Switch>
      <Route component={App} path="/" exact />
      <Route component={Browse} path="/browse"  />
      <Route component={Radio} path="/radio"  />
    </Switch>
  </BrowserRouter>
}