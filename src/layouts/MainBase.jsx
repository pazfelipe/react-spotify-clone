import React from 'react'

import Menu from '../components/Menu'
import Searchbar from '../components/Searchbar'

export default function App ( props ) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="main">
          <Searchbar />
          {props.children}
        </div>
        <div className="side-left"></div>
        <div className="footer"></div>
      </div>
    </React.Fragment>
  )
}