import React, {useState} from 'react'
import './AddMovie.css'

const AddMovie = (props) => {
    const [title, setTitle] = useState('')
    const [rating, setRating] = useState('')
    const [date, setDate] = useState('')
    const [type, setType] = useState('')
    
    
   

    
    const titleHandler = (event)=>{
        setTitle(event.target.value)
    }
    const ratingHandler = (event)=>{
        setRating(event.target.value)
    }
    const dateHandler = (event)=>{
        setDate(event.target.value)
    }
    const typeHandler = (event)=>{
        setType(event.target.value)
    }
    const submitHandler = (event)=>{
        event.preventDefault()
        const movieData = {
            title: title,
            Rating: +rating,
            // date: new Date(date),
            first_air_date: date,
            media_type: type
        }
        props.onMovieAdd(movieData)
        setTitle('')
        setRating('')
        setDate('')
        setType('')
        props.movieAddBtn()
        
    }
  return (
    <form onSubmit={submitHandler}>
        
     <>
     <div className='new-expense'>
     <div className='new-expense__controls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={title} onChange={titleHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Year Release</label>
            <input type='number' min='1900' max='2023' value={date} onChange={dateHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Type</label>
            <input type='text' value={type} onChange={typeHandler}/>
        </div>
        <div className='new-expense__control'>
            <label>Rating</label>
            <input type='number' min='0.01' step='0.01' value={rating} onChange={ratingHandler}/>
        </div>
        
        </div>
        <div>
            <button type='submit' disabled={title===''|| rating===''|| date==='' || type===''}>Add New Movie</button>
            <button onClick={()=>{props.movieAddBtn()}}>Cancel</button>
        </div>
        </div>
        
        </>
        
    </form>
  )
}

export default AddMovie