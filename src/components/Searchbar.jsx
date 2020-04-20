import React, { Component } from 'react'

export default class Searchbar extends Component {

  state = {
    search: '',
    showModalUser: false
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
    const modalUser = this.state.showModalUser ? 'searchbar--menu-user modal-user active' : 'searchbar--menu-user modal-user'

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
          <span><i className="lar la-user-circle"></i></span>
          <span onClick={ () => document.documentElement.requestFullscreen() } >username</span>
          <span onClick={ () => this.setState( { showModalUser: true } ) } > <i className="las la-angle-down modal-user"></i> </span>
          <div className={ modalUser }>
            <ul className="modal-user">
              <li className="modal-user">Private session</li>
              <li className="modal-user">Account</li>
              <li className="modal-user">Settings</li>
              <li className="modal-user">Log out</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}