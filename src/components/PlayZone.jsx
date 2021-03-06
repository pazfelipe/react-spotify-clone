import React from 'react'
import { useState, useEffect } from 'react'
import { requestFullscreen, exitFullscreen } from '../utils/utils'

export default function PlayZone ( props ) {

  const [ hasFullScreen, setHasFullScreen ] = useState()
  const [ mute, setMute ] = useState( null )
  const [ playing, setPlay ] = useState( 'play' )
  const [ volumeLevel, setVolumeLevel ] = useState( 100 )
  const [ posMusic, setPosMusic ] = useState( 0 )

  const checkFullscreen = () => {
    if ( document.fullscreenElement === null ) {
      return setHasFullScreen( null )
    }
    setHasFullScreen( 'full-screen' )
  }

  const icon = ( volumeLevel < 1 || mute !== null ) ? <i className="las la-volume-mute"></i> :
    volumeLevel < 51 ? <i className="las la-volume-down"></i>
      : <i className="las la-volume-up"></i>

  const toggleMute = () => {
    if ( volumeLevel < 1 ) return
    if ( !mute ) {
      setMute( volumeLevel )
    } else {
      setVolumeLevel( mute )
      setMute( null )
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
            <i className="las la-sync"></i>
          </span>
        </div>
        <div className="progress-bar">
          <span className="volume-range-indicator" style={ { width: ( posMusic ) + '%' } }></span>
          <input
            type="range"
            value={ posMusic }
            onChange={ event => setPosMusic( event.target.value ) } />
        </div>
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
            <span onClick={ () => toggleMute() }>
              { icon }
            </span>
            {
              mute
                ? null
                :
                <span className="volume--bar">
                  <span className="volume-range"
                    style={ { width: ( volumeLevel > 96 ? 96 : 100 ) + '%' } }
                  ></span>
                  <span className="volume-range-indicator"
                    style={ { width: ( volumeLevel > 96 ? 96 : volumeLevel ) + '%' } }></span>
                  <input
                    type="range"
                    value={ volumeLevel }
                    onChange={ event => setVolumeLevel( event.target.value ) } />
                </span>
            }
          </div>
          {
            hasFullScreen === 'full-screen'
              ? <span className="fullscreen" onClick={ () => exitFullscreen() }>
                <i className="las la-compress-arrows-alt"></i>
              </span>
              : <span className="fullscreen" onClick={ () => requestFullscreen() }>
                <i className="las la-compress"></i>
              </span>
          }
        </div>
      </div>
    </div>
  )
}