import React from 'react'
import { useState, useEffect } from 'react'

export default function PlayZone ( props ) {

  const [ hasFullScreen, setHasFullScreen ] = useState()
  const [ mute, setMute ] = useState( false )
  const [ playing, setPlay ] = useState( 'play' )
  const [ volumeLevel, setVolumeLevel ] = useState( 100 )

  const checkFullscreen = () => {
    if ( document.fullscreenElement === null ) {
      return setHasFullScreen( null )
    }
    setHasFullScreen( 'full-screen' )
  }

  const icon = ( volumeLevel < 1 ) ? <i className="las la-volume-mute"></i> :
    volumeLevel < 51 ? <i className="las la-volume-down"></i>
      : <i className="las la-volume-up"></i>

  const toogleFullscreen = () => {
    // - FIXME - exitFullscreen não está funcionando
    if ( document.documentElement.requestFullscreen ) {
      document.documentElement.requestFullscreen()
    } else if ( document.documentElement.mozRequestFullScreen ) { /* Firefox */
      document.documentElement.mozRequestFullScreen()
    } else if ( document.documentElement.webkitRequestFullscreen ) { /* Chrome, Safari & Opera */
      document.documentElement.webkitRequestFullscreen()
    } else if ( document.documentElement.msRequestFullscreen ) { /* IE/Edge */
      document.documentElement.msRequestFullscreen()
    }

    else if ( document.exitFullscreen ) {
      document.exitFullscreen()
    } else if ( document.mozCancelFullScreen ) { /* Firefox */
      document.mozCancelFullScreen()
    } else if ( document.webkitExitFullscreen ) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen()
    } else if ( document.msExitFullscreen ) { /* IE/Edge */
      document.msExitFullscreen()
    }
  }

  useEffect( () => {
    [ "fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "msfullscreenchange" ].forEach(
      event => document.addEventListener( event, function ( e ) {
        checkFullscreen()
      }, false )
    )
  }, [] )

  useEffect( () => {
    checkFullscreen()
  }, [] )

  const changePlayStatus = () => {
    if ( playing === 'play' ) {
      setPlay( 'pause' )
    } else if ( playing === 'pause' ) {
      setPlay( 'play' )
    }
  }

  const [ repeat, setRepeat ] = useState( '' )
  const [ shuffle, setShuffle ] = useState( false )

  const labelRepeat = repeat === 'one' ? <span className="label-repeat">1</span> : null

  const changeRepeat = () => {
    if ( repeat === '' ) {
      setRepeat( 'all' )
    } else if ( repeat === 'all' ) {
      setRepeat( 'one' )
    } else {
      setRepeat( '' )
    }
  }

  return (
    <div className="playing-zone">
      <div className="playing-zone--thumbnail">
        <div className="thumbnail"></div>
      </div>
      <div className="playing-zone--control">
        <div className="buttons">
          <span
            onClick={ () => setShuffle( !shuffle ) }
            className={ shuffle ? 'shuffle active' : 'shuffle' }>
            <i className="las la-random"></i>
          </span>
          <span className="backward disabled"><i className="las la-step-backward"></i></span>
          <span
            className="play disabled"
            onClick={ () => changePlayStatus() }>
            {
              playing === 'play'
                ? <i className="lar la-play-circle"></i>
                : <i className="lar la-pause-circle"></i>
            }
          </span>
          <span className="forward disabled"><i className="las la-step-forward"></i></span>
          <span className={ repeat ? 'repeat active' : 'repeat' } onClick={ changeRepeat }>
            { labelRepeat }
            <i className="las la-redo-alt"></i>
          </span>
        </div>
        <div className="progress-bar"></div>
      </div>
      <div className="playing-zone--actions">
        <div className="container">
          <span className="list">
            <i className="las la-tasks"></i>
          </span>
          <span className="devices">
            <i className="lar la-window-restore"></i>
          </span>
          <div className="volume">
            <span onClick={ () => setVolumeLevel( 0 ) }>
              { icon }
            </span>
            {
              mute
                ? null
                :
                <span className="volume--bar">
                  <span className="volume-range"></span>
                  <span className="volume-range-indicator" style={ { width: ( volumeLevel ) + '%' } }></span>
                  <input type="range" value={ volumeLevel } onChange={ event => setVolumeLevel( event.target.value ) } />
                </span>
            }
          </div>
          <span className="fullscreen" onClick={ () => toogleFullscreen() }>
            { hasFullScreen === 'full-screen'
              ? <i className="las la-compress-arrows-alt"></i>
              : <i className="las la-compress"></i>
            }
          </span>
        </div>
      </div>
    </div>
  )
}