export const requestFullscreen = () => {
  if ( document.documentElement.requestFullscreen ) {
    document.documentElement.requestFullscreen()
  } else if ( document.documentElement.mozRequestFullScreen ) { /* Firefox */
    document.documentElement.mozRequestFullScreen()
  } else if ( document.documentElement.webkitRequestFullscreen ) { /* Chrome, Safari & Opera */
    document.documentElement.webkitRequestFullscreen()
  } else if ( document.documentElement.msRequestFullscreen ) { /* IE/Edge */
    document.documentElement.msRequestFullscreen()
  }
}

export const exitFullscreen = () => {
  if ( document.exitFullscreen ) {
    document.exitFullscreen()
  } else if ( document.mozCancelFullScreen ) { /* Firefox */
    document.mozCancelFullScreen()
  } else if ( document.webkitExitFullscreen ) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen()
  } else if ( document.msExitFullscreen ) { /* IE/Edge */
    document.msExitFullscreen()
  }
}