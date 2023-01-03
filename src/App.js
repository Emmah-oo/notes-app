import { useState } from "react";
import Notes from "./Components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      'id': 0,
      'text': 'Hello, This is my first note'
    },
    {
      'id': 1,
      'text': 'Second Note Created'
    }
  ])

  const addNote = (text) => {
    const id = Math.floor(Math.random()*100)
    const newNote = {
      id : id,
      text: text
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const note = notes.filter((note) => note.id !== id )
    setNotes(note)
  }
  
  return (
    <div className="App">
      <Notes 
      notes={notes} 
      setNotes={setNotes} 
      addNote={addNote} 
      deleteNote={deleteNote} 
      />
    </div>
  );
}

export default App;
