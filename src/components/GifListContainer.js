import React,{useEffect, useState} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
const [gifs ,setGifs] = useState([])    
  
  
  useEffect(() => {
      fetch("https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=fcOFkCCXGB18XxXRqI19kBioma8PMhfQ")
      .then(response => response.json())
      .then((data)=>{
       const firstThreeGifs = data.data.slice(0,3)
       setGifs(firstThreeGifs)
          
      })
    },[])
   // const displayGifts = gifs.map((gif)=>(
     // <img key={gif.id} src={gif.images.fixed_width.url} alt="gif unavailable" />
      //console.log(gif.images.fixed_width.url)
   // ))
    

  return (
    <>
     <GifSearch />
     <GifList gifs={gifs}/>
    </>
  )
}

export default GifListContainer