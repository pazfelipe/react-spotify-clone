import React from 'react'

import Menu from '../components/Menu'
import Searchbar from '../components/Searchbar'
import PlayZone from '../components/PlayZone'

export default function App ( props ) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="menu">
          <Menu />
        </div>
        <div className="main">
          <Searchbar />
          { props.children }
        </div>
        <div className="side-left">
          <p>See what your friend are playing</p>
          <button>Find friends</button>
        </div>
        <PlayZone />
      </div>
    </React.Fragment>
  )
}