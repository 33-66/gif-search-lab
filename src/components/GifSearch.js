import React, {useState} from 'react'

function GifSearch({onSubmit}) {
  const [search,setSearch]= useState("")
  
  function handlechange(e){
   setSearch(e.target.value)
   //console.log(inputing)
  }
function handleSubmit(e){
e.preventDefault()
onSubmit(search)
}

  return (

    <>
    <form onSubmit={handleSubmit} id='today'>
      <label >
      GIF SEARCH
     <input type="text" 
            value={search} 
            placeholder='search ....'
            onChange={handlechange}/>
      </label>
      <button type='submit'>search</button>
    </form>




    
    </>
  )
}

export default GifSearch