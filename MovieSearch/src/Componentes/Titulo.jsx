import React from 'react'
import { MdMovieFilter } from "react-icons/md";
import './Titulo.css'

const Titulo = () => {
  return (
    <header className='titulo'>
        <MdMovieFilter/>
        <h1>MovieSearch</h1>
    </header>
  )
}

export default Titulo