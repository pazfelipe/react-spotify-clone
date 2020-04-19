import React from 'react'

import Menu from '../components/Menu'

export default function App ( props ) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="main">
          <div className="searchbar">
            <div className="searchbar--icon">
              <span> &lsaquo; </span>
              <span> &rsaquo; </span>
            </div>
            <div className="searchbar--input">input</div>
            <div className="searchbar--middle">middle</div>
            <div className="searchbar--user">user</div>
          </div>
          {props.children}
        </div>
        <div className="side-left"></div>
        <div className="footer"></div>
      </div>
    </React.Fragment>
  )
}