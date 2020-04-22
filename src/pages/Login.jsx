import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sigin () {
  return (
    <div className="login">
      <p>Login page</p>
      <NavLink to="/">Home</NavLink>
    </div>
  )
}