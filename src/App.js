import React, {useState, useEffect} from 'react'
import Navbar from './compoments/Navbar';
import Movies from './compoments/Movies'
import AddMovie from './compoments/AddMovie';
import Banner from './compoments/Banner';
import axios from './compoments/axios/axios'
import requests from './compoments/axios/Requests'

function App() {
  const [movieData, setMovieData] = useState([])
  const [addMovieBtn, setAddMovieBtn] = useState(false)





useEffect(() => {
  async function fetchData(){
    const request = await axios.get(requests.fetchTrending)
    setMovieData(request.data.results)
    return request
}

fetchData()
}, [])
console.log(movieData)

// useEffect(()=>{

//   if (movieData.length !== 0) {
//     setMovieArray(movieData)
//   }
  
// },[movieData])


// const truncate=(string, n)=>{ return string?.length>n?string.substr(0,n-1)+'...':string
// }


const movieBtnHandler = ()=>{
  setAddMovieBtn(!addMovieBtn)
}
const movieDataHandler = (data)=>{
  setMovieData((prevMovieArray)=>{
    return [{id:Math.random().toString(),...data},...prevMovieArray]
  })
}
const dltMovieHandler = (movieId)=>{
  setMovieData((prevMovieArray)=>{
   return prevMovieArray.filter(movie=>movie.id!==movieId)       
  })
}


  return (
    <>
    <Navbar movieAddBtn={movieBtnHandler}/>
    <Banner/>
    {addMovieBtn && <AddMovie movieAddBtn={movieBtnHandler} onMovieAdd={movieDataHandler} />}
    <Movies data={movieData} onMovieDelete={dltMovieHandler}/>
    </>
  );
}

export default App;
