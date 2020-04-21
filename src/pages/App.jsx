import React, { Component } from 'react'
import MainBase from '../layouts/MainBase'

import Announcement from '../components/Announcements'

export default class App extends Component {
  render () {
    return (
      <MainBase>
        <Announcement
          title="Só tem hit! | Dua Lipa | Future Nostalgia"
          description="É hit que você quer? Nós temos! Dua Lipa, Twenty One Pilots e muito mais."
          thumbnail="/images/albums/dualipa.jpg"
        />
      </MainBase>
    )
  }
}