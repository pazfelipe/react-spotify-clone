import React, { Component } from 'react'

export default class Searchbar extends Component {

  state = {
    search: ''
  }

  render () {
    const { search } = this.state

    return (
      <div className="searchbar">
        <div className="searchbar--icon">
          <span> &lsaquo; </span>
          <span> &rsaquo; </span>
        </div>
        <div className="searchbar--input">
          <i>O</i>
          <input
            type="search"
            onChange={event => this.setState( { search: event.target.value } )}
            value={search} onFocus={() => this.setState( { search: '' } )} />
        </div>
        <div className="searchbar--middle"></div>
        <div className="searchbar--user">user</div>
      </div>
    )
  }
}