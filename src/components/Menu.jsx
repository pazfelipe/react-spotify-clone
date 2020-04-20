import React, { useState, useEffect } from 'react'

import ModalPlaylist from './ModalNewPlaylist'

export default function Menu ( props ) {

  const [hideModal, setHideModal] = useState( true )

  useEffect( () => {
    window.addEventListener( 'click', function ( event ) {
      const elementClicked = event.target
      if ( elementClicked.hasAttribute( 'data-modal' ) ) return
      setHideModal( true )
    } )
  }, [] )


  return (
    <div className="main-menu">
      <div className="menu-header">
        <ul>
          <li className="menu-header--item active">Home</li>
          <li className="menu-header--item">Browse</li>
          <li className="menu-header--item">Radio</li>
        </ul>
      </div>
      <div className="menu-library">
        <ul>
          <li className="menu-library--label">Your Library</li>
          <li className="menu-library--item">Made for you</li>
          <li className="menu-library--item">Recently played</li>
          <li className="menu-library--item">Liked songs</li>
          <li className="menu-library--item">Albums</li>
          <li className="menu-library--item">Artists</li>
          <li className="menu-library--item">Podcasts</li>
        </ul>
      </div>
      <div className="menu-playlists">
        <ul>
          <li className="menu-playlists--label">Playslits</li>
        </ul>
        <ul>
          <li className="menu-playlists--item">Discover weekly</li>
          <li className="menu-playlists--item">Discover weekly</li>
          <li className="menu-playlists--item">Discover weekly</li>
          <li className="menu-playlists--item">Discover weekly</li>
          <li className="menu-playlists--item">Discover weekly</li>
          <li className="menu-playlists--item">Discover weekly</li>
          <li className="menu-playlists--item">Discover weekly</li>
          <li className="menu-playlists--item">Discover weekly</li>
          <li className="menu-playlists--item">Discover weekly</li>
        </ul>
      </div>
      <div className="new-playlist" onClick={() => setHideModal( false )} data-modal>
        <span className="new-playlist--icon" data-modal>
          <i className="las la-plus-circle" data-modal></i>
        </span>
        <span className="new-playlist--label" data-modal>New playlist</span>
      </div>
      <ModalPlaylist hide={hideModal} />
    </div>
  )
}