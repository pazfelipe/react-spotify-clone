import React, { useState, useEffect } from 'react'

export default function Announcements ( { thumbnail, title, description } ) {

  const [isHiding, setIsHiding] = useState( false )
  const [top, setTop] = useState( -3000 )
  const [left, setLeft] = useState( -3000 )
  const [following, setFollow] = useState( false )
  const [labelFollow, setLabelFollow] = useState( 'follow' )

  const _hide = () => {
    setIsHiding( true )
  }

  const _setMenuPosition = () => {
    const el = document.getElementById( 'annoucementsMenu' ).getBoundingClientRect()
    setTop( el.top + 35 )
    setLeft( el.left - 170 )
  }

  const _top = () => {
    return top
  }

  const _setLabelFollowOnOver = () => {
    if ( following ) {
      return setLabelFollow( 'unfollow' )
    }
    setLabelFollow( 'follow' )
  }
  const _setLabelFollowOnLeave = () => {
    if ( following ) {
      setLabelFollow( 'unfollow' )
    }
    setLabelFollow( 'follow' )
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
      <div className="announcements">
        <div className="announcements-container">
          <div className="announcements-container--close" onClick={_hide} >Hide announcements</div>
          <div className="announcements-background" style={{ backgroundImage: `url(${thumbnail})` }}></div>
          <div className="announcements-container--thumbnail" style={{ backgroundImage: `url(${thumbnail})` }}></div>
          <div className="announcements-container--info">
            <div className="title">
              <p>Playlist</p>
              <h1>{title}</h1>
              <span>{description}</span>
            </div>
            <div className="actions">
              <button className="actions--button play">Play</button>
              <button
                onMouseOver={_setLabelFollowOnOver}
                onMouseLeave={_setLabelFollowOnLeave}
                onClick={() => setFollow( !following )}
                className={following
                  ? 'actions--button follow text-green'
                  : 'actions--button follow'}>
                {labelFollow}
                {
                  following && labelFollow === 'unfollow' ? ''
                    : following && labelFollow !== 'unfollow' ? 'ing  ' : ''
                }
              </button>
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
        className="announcements--menu"
        style={{ top: `${top}px`, left: `${left}px` }}>
        <ul data-menu>
          <li data-menu>Go to Playlist Radio</li>
          <li data-menu className="separator"></li>
          <li data-menu>Report</li>
          <li data-menu>Save to Your Library</li>
          <li data-menu className="separator"></li>
          <li data-menu className="disabled">Create similar Playlist</li>
          <li data-menu className="separator"></li>
          <li data-menu className="submenu">
            <span data-menu>Share</span>
            <i data-menu className="las la-angle-right"></i>
            <div
              data-menu
              className="announcements--menu"
              style={{ top: `${_top + 140}px`, left: `${left + 400}px` }}>
              <ul data-menu>
                <li data-menu>
                  <i data-menu className="lab la-facebook-f" style={{ backgroundColor: '#3b5999' }}></i>
                  <span data-menu>Facebook</span>
                </li>
                <li data-menu>
                  <i className="lab la-facebook-messenger" style={{ backgroundColor: '#0084ff' }}></i>
                  <span data-menu>Messenger</span>
                </li>
                <li data-menu>
                  <i className="lab la-twitter" style={{ backgroundColor: '#55acee' }}></i>
                  <span data-menu>Twitter</span>
                </li>
                <li data-menu>
                  <i className="lab la-telegram" style={{ backgroundColor: '#0088cc' }}></i>
                  <span data-menu>Telegram</span>
                </li>
                <li data-menu>
                  <i className="lab la-skype" style={{ backgroundColor: '#00AFF0' }}></i>
                  <span data-menu>Skype</span>
                </li>
                <li data-menu>
                  <i className="lab la-tumblr" style={{ backgroundColor: '#34465d' }}></i>
                  <span data-menu>Tumblr</span>
                </li>
                <li data-menu>
                  <i className="las la-link"></i>
                  <span data-menu>Copy Playlist Link</span>
                </li>
                <li data-menu style={{ padding: '10px 30px', paddingLeft: '60px' }}>
                  <span data-menu>Copy Embeded Code</span>
                </li>
                <li data-menu style={{ padding: '10px 30px', paddingLeft: '60px' }}>
                  <span data-menu>Copy Spotify URI</span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )

  const conditional = isHiding ? null : content

  return conditional
}