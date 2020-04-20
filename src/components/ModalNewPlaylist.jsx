import React from 'react'

export default function ModalNewPlayList ( props ) {

  const classname = props.hide ? 'modal-playlist' : 'modal-playlist active'
  const classnamebackdrop = props.hide ? 'modal-playlist--backdrop' : 'modal-playlist--backdrop active'
  const classnamecontainer = props.hide ? 'modal-playlist--container' : 'modal-playlist--container active'

  return (
    <div className={classname} id="modalPlayList" data-modal>
      <div className={classnamebackdrop}></div>
      <div className={classnamecontainer} data-modal>
        <div className="modal-playlist--content">
          <div data-modal className="modal-playlist--content--header">
            <span data-modal>Create Playlist</span>
            <span><i className="las la-times"></i></span>
          </div>
          <div data-modal className="modal-playlist--content--inputs">
            <div data-modal className="file">
              <input type="file" data-modal/>
              <div data-modal>
                <i className="las la-music" data-modal></i>
                <p data-modal>Choose image</p>
              </div>
            </div>
            <div data-modal className="inputs">
              <p data-modal>Name</p>
              <input data-modal type="text" placeholder="My playlist #2" />
              <p data-modal>Description</p>
              <textarea data-modal type="text" placeholder="Giver your playlist a catchy description" rows="6"></textarea>
            </div>
          </div>
          <div data-modal>
            <button>Create</button>
          </div>
        </div>
      </div>
    </div>
  )
}