import React, { useState, useEffect } from 'react'

export default function Annoucements ( { thumbnail, title, description } ) {

  const [isHiding, setIsHiding] = useState( false )
  const [top, setTop] = useState( -3000 )
  const [left, setLeft] = useState( -3000 )

  const _hide = () => {
    setIsHiding( true )
  }

  const _setMenuPosition = () => {
    const el = document.getElementById( 'annoucementsMenu' ).getBoundingClientRect()
    setTop( el.top + 35 )
    setLeft( el.left - 170 )
  }

  useEffect( () => {
    document.addEventListener( 'click', function ( event ) {
      const elClicked = event.target
      if ( !elClicked.hasAttribute( 'data-menu' ) ) {
        setTop( -3000 )
        setLeft( -3000 )
        return
      }
    } )
  }, [] )

  const content = (
    <React.Fragment>
      <div className="annoucements">
        <div className="annoucements-container">
          <div className="annoucements-container--close" onClick={_hide} >Hide annoucements</div>
          <div className="annoucements-background" style={{ backgroundImage: `url(${thumbnail})` }}></div>
          <div className="annoucements-container--thumbnail" style={{ backgroundImage: `url(${thumbnail})` }}></div>
          <div className="annoucements-container--info">
            <div className="title">
              <p>Playlist</p>
              <h1>{title}</h1>
              <span>{description}</span>
            </div>
            <div className="actions">
              <button className="actions--button play">Play</button>
              <button className="actions--button follow">Follow</button>
              <div data-menu className="actions--button menu" id="annoucementsMenu" onClick={_setMenuPosition}>
                <span data-menu>...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-menu
        id="annoucementsMenuContainer"
        className="annoucements--menu"
        style={{ top: `${top}px`, left: `${left}px` }}>
        <ul data-menu>
          <li data-menu>Go to playlist radio</li>
          <li data-menu>Go to playlist radio</li>
        </ul>
      </div>
    </React.Fragment>
  )

  const conditional = isHiding ? null : content

  return conditional
}