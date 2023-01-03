import React, { useState } from 'react'
import AddNote from './AddNote'
import Note from './Note'
import Search from './Search'

const Notes = ({ notes, setNotes, addNote, deleteNote }) => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Search 
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      <div className='grid grid-cols-3 items-center justify-center gap-10 w-[80%] m-auto mt-10'>
      {notes.filter((note, i) => {
        if (search === '') {
          return note
        } else if (note.text.toLowerCase().includes(search.toLowerCase())) {
          return note
        }
      }).map((note, i) => {
        return <Note 
          note={note} 
          setNotes={setNotes} 
          key={i} 
          deleteNote={deleteNote} 
        />
      })}
      <AddNote 
        addNote={addNote}  
      />
      </div>
    </div>
    
  )
}

export default Notes