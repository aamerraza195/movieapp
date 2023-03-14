import React,{useState, useEffect} from 'react'
import axios from './axios/axios'
import requests from './axios/Requests'
import './Banner.css'

const Banner = () => {
const [movie, setMovie] = useState([])

useEffect(() => {
  async function fetchData(){
    const request = await axios.get(requests.fetchNetflixOriginals)
    setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
    return request
}

fetchData()
}, [])

const truncate=(string, n)=>{ return string?.length>n?string.substr(0,n-1)+'...':string
}


  return (
    <div className='banner' style={{backgroundSize:'cover', backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition:'center center', height:'30vw', width:'100vw',}}>
        <h1 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <p className='banner_overview' >{truncate(movie?.overview,300)}</p>
    </div>
  )
}

export default Banner