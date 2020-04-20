import React from 'react'
import { useState } from 'react'

export default function PlayZone ( props ) {

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
            <i class="las la-random"></i>
          </span>
          <span className="backward disabled"><i class="las la-step-backward"></i></span>
          <span className="play disabled"> <i class="las la-play"></i></span>
          <span className="forward disabled"><i class="las la-step-forward"></i></span>
          <span className={ repeat ? 'repeat active' : 'repeat' } onClick={ changeRepeat }>
            { labelRepeat }
            <i class="las la-redo-alt"></i>
          </span>
        </div>
        <div className="progress-bar"></div>
      </div>
      <div className="playing-zone--actions"></div>
    </div>
  )
}