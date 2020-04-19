import React from 'react'

export default function Menu ( props ) {
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
      <div className="new-playlist" onClick={() => alert( 'Vai abrir uma modal' )}>
        <p>
          <span className="new-playlist--icon">+</span>
          <span className="new-playlist--label">New playlist</span>
        </p>
      </div>
    </div>
  )
}