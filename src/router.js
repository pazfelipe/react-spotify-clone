import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './pages/App'
import Browse from './pages/Browse'
import Radio from './pages/Radio'
import Profile from './pages/Profile'
import Login from './pages/Login'

export default function () {
  return <BrowserRouter>
    <Switch>
      <Route component={App} path="/" exact />
      <Route component={Browse} path="/browse"  />
      <Route component={Radio} path="/radio"  />
      <Route component={Profile} path="/profile"  />
      <Route component={Login} path="/signin"  />
    </Switch>
  </BrowserRouter>
}