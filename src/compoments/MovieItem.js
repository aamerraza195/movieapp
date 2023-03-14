import React, {useState} from 'react'
import Modal from './modal/Modal'
import './MovieItem.css'

const MovieItem = (props) => {
  const [showModal, setShowModal] = useState(false)

  const modalHandler=()=>{
    setShowModal(!showModal)
  }


  const deleteHandler =()=>{
    props.onMovieDelete(props.id)
  }
  const truncate=(string, n)=>{ return string?.length>n?string.substr(0,n-1)+'...':string}
  return (
    <div>
      {showModal && <Modal imageUrl={props.imageUrl} title={props.title} description={props.description} date={props.date} type={props.type} rating={props.rating} onConfirm={modalHandler}/>}
        <div className="card2">
          <img src={`https://image.tmdb.org/t/p/original/${props.imageUrl}`} style={{width:"75%", borderRadius:'10px'}} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-description">{truncate(props.description,200)}</p>
            <span className="card-text">Release Date: {props.date}
            </span>
            <span className="card-text">Type: {props.type}
            </span>
            <button onClick={modalHandler}>Read More</button>
            <button onClick={deleteHandler}>Delete</button>
          </div>
        </div>
      </div>
  )
}

export default MovieItem