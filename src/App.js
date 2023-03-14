import React, { useState, useEffect } from 'react'
import Navbar from './compoments/navbar/Navbar'
import Movies from './compoments/movielist/Movies'
import AddMovie from './compoments/addmovie/AddMovie'
import Banner from './compoments/banner/Banner'
import axios from './compoments/axios/Axios'
import requests from './compoments/axios/Requests'

function App() {
  const [movieData, setMovieData] = useState([])
  const [addMovieBtn, setAddMovieBtn] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending)
      setMovieData(request.data.results)
      return request
    }

    fetchData()
  }, [])
  console.log(movieData)

  const movieBtnHandler = () => {
    setAddMovieBtn(!addMovieBtn)
  }
  const movieDataHandler = (data) => {
    setMovieData((prevMovieArray) => {
      return [{ id: Math.random().toString(), ...data }, ...prevMovieArray]
    })
  }
  const dltMovieHandler = (movieId) => {
    setMovieData((prevMovieArray) => {
      return prevMovieArray.filter((movie) => movie.id !== movieId)
    })
  }

  return (
    <>
      <Navbar movieAddBtn={movieBtnHandler} />
      <Banner />
      {addMovieBtn && (
        <AddMovie movieAddBtn={movieBtnHandler} onMovieAdd={movieDataHandler} />
      )}
      <Movies data={movieData} onMovieDelete={dltMovieHandler} />
    </>
  )
}

export default App
