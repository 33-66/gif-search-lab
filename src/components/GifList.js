import React from 'react'

function GifList({gifs}) {
    const displayGifts = gifs.map((gif)=>(
      <img key={gif.id} src={gif.images.fixed_height.url} alt="gif unavailable" />
      //console.log(gif.images.fixed_width.url)
    ))
  
    

  return (
    <ul>
        <li>{displayGifts}</li>
        </ul>
  )
}

export default GifList