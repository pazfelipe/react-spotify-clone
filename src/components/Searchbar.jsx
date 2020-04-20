import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Searchbar extends Component {

  state = {
    search: '',
    showModalUser: false,
    private: false
  }

  componentDidMount () {
    window.addEventListener( 'click', event => {
      const el = event.target
      this.setState( {
        showModalUser: el.classList.contains( 'modal-user' )
      } )
    } )
  }

  render () {
    const { search } = this.state
    const modalUser = this.state.showModalUser
      ? 'searchbar--menu-user modal-user active'
      : 'searchbar--menu-user modal-user'

    return (
      <div className="searchbar">
        <div className="searchbar--icon">
          <span> <i className="las la-angle-left"></i> </span>
          <span> <i className="las la-angle-right"></i> </span>
        </div>
        <div className="searchbar--input">
          <i className="las la-search"></i>
          <input
            placeholder="Search"
            type="search"
            onChange={ event => this.setState( { search: event.target.value } ) }
            value={ search } onFocus={ () => this.setState( { search: '' } ) } />
        </div>
        <div className="searchbar--middle"></div>
        <div className="searchbar--user">
          <div>
            <NavLink to="/profile">
              <span
                style={ { position: 'relative' } }>
                {
                  this.state.private
                    ? <span className="lock"><i class="las la-lock"></i></span>
                    : null
                }
                <i className="lar la-user-circle"></i>
              </span>
              <span >username</span>
            </NavLink>
          </div>
          <span
            onClick={ () => this.setState( { showModalUser: true } ) } >
            <i className="las la-angle-down modal-user"></i>
          </span>
          <div className={ modalUser }>
            <ul className="modal-user">
              <li
                onClick={ () => this.setState( { private: !this.state.private } ) }
                className={ this.state.private ? 'text-green-light' : '' }
              >
                {
                  this.state.private
                    ? <i class="las la-check" style={ { marginRight: '10px', fontSize: '1em' } }></i>
                    : null
                }
                Private session
                </li>
              <li className="modal-user">Account</li>
              <li className="modal-user">Settings</li>
              <li className="modal-user" onClick={ () => alert( 'I think you shouldn\'t do that' ) }>Log out</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}