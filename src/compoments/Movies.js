import React from 'react'
import MovieItem from './MovieItem'
import './Movies.css'

const Movies = (props) => {
  return (
    <div className='card1'>
        {props.data.map((element)=>{
            return (
            <MovieItem  
            key={element.id} id={element.id} 
            onMovieDelete={props.onMovieDelete} 
            title={element?.title || element?.name || element?.original_name} 
            imageUrl={element.backdrop_path?element.backdrop_path:'https://static.independent.co.uk/2022/11/28/22/SEI135515409.jpg?quality=75&width=1200&auto=webp'} 
            date={element.first_air_date || element.release_date} 
            type={element.media_type?element.media_type:''} 
            description={element.overview?element.overview:'N/A'}
            rating={element.vote_average?element.vote_average:'N/A'}
            />
            )     
          })}
    </div>
  )
}

export default Movies