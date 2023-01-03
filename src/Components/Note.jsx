import React from 'react'

const Note = ({ note, deleteNote }) => {
  return (
    <div 
      className='bg-gray-800 text-white p-6 h-[30vh] rounded-xl cursor-pointer flex flex-col justify-between'
      onClick={() => {deleteNote(note.id)}}>
      <h1>{note.text}</h1>
    </div>
  )
}

export default Note