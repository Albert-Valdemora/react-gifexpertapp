import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

  const [categoria, setCategoria] = useState(['One Punch'])

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategoria={setCategoria}/>
      <hr />
      

      <ol>
        {
          categoria.map(category => (
            <GifGrid
                key={category} 
                category={ category} 
              />
          ))
        }
      </ol>
    </>
  )
}

export default GifExpertApp