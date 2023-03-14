import React from 'react'
import './Modal.css'

const Modal = (props) => {
  return (
    <div className='backdrop'>
      <div className="modal">
        <div className="image">
          <img src={`https://image.tmdb.org/t/p/original/${props.imageUrl}`} style={{width:"50%", borderRadius:'10px'}}  alt="" />
        </div>
        <header className="header">
          <h2>{props.title}</h2>
          <pre><span className='span'>Rating: {props.rating}    Type: {props.type}    Release Date: {props.date}
          </span>
          </pre>
        </header>
        <div className="content">
          <p>{props.description}</p>
        </div>
        <footer className='actions'>
            <button onClick={props.onConfirm}>Close</button>
        </footer>
      </div>
       
    </div>
  )
}

export default Modal