import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

export default function Sigin () {

  const [ isPwd, setIsPwd ] = useState( true )
  const [ remember, setRemeber ] = useState( false )
  const [ redirect, setRedirect ] = useState( false )

  if ( redirect ) {
    return <Redirect push to="/" />
  }

  return (
    <div className="login">
      <div className="login__container">
        <div className="form">
          <img src="/images/spotify_full_logo_white.png" alt="Spotify Logo White" />
          <h1>Music for everyone</h1>
          <div className="container-input">
            <label className="container-input__icon">
              <i className="lar la-envelope"></i>
            </label>
            <input
              type="text"
              className="container-input__input"
              placeholder="Email or username" />
          </div>
          <div className="container-input">
            <label className="container-input__icon" onClick={ () => setIsPwd( !isPwd ) }>
              <i className={ `lar la-${ isPwd ? 'eye-slash' : 'eye' }` }></i>
            </label>
            <input
              type={ isPwd ? 'password' : 'text' }
              className="container-input__input"
              placeholder="Password" />
          </div>
          <div className="container-toggle" onClick={ () => setRemeber( !remember ) }>
            <span className="container-toggle__label">
              Remember me
            </span>
            <div className="container-toggle__toggle">
              <input type="checkbox" checked={ remember } onChange={ () => { } } />
              <span></span>
            </div>
          </div>
          <button
            onClick={ () => setRedirect( true ) }
            className="btn btn-rounded full-width hover-scale form__btn-login">
            Log In
            </button>
          <span className="span_line">or</span>
          <button
            className="btn btn-rounded bg-default-green-light full-width hover-scale form__btn-login--facebook">
            <i data-menu className="lab la-facebook-f"></i>
            Log In with facebook
            </button>
          <a href="#">Don't have an account? <span>Sign up</span></a>
          <div className="footer-form">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.spotify.com/br/password-reset/?utm_source=spotify&utm_medium=login_box&utm_campaign=forgot_password">
              Reset password
              </a>
            <a href="#">Settings</a>
          </div>
        </div>
      </div>
    </div>
  )
}