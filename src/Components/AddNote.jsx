import { useState } from "react"

const AddNote = ({ addNote }) => {
    const charCount = 200

    const [text, setText] = useState('')
    
    const handleTextChange = (e) => {
        if ( text.length >= 200) return
        setText(e.target.value)
    }
    
    const handleTextSave = () => {
        if (text.length > 1) {
            addNote(text)
            setText('')
        }
    }

  return (
    <div className='h-[30vh] bg-black text-white mb-10 p-3 flex flex-col rounded-xl gap-5 mt-10'>
        <textarea 
            className='bg-transparent outline-none' 
            value={text} onChange={handleTextChange} 
            name="note" 
            cols="30" 
            rows="10"
            placeholder="Type a note..."
        >
        </textarea>
        <div className="flex items-center justify-between">
            <button className='self-start border px-6 rounded-xl py-2' onClick={handleTextSave}>Add</button>
            <h1>{charCount - text.length} Remaining</h1>
        </div>
    </div>
  )
}

export default AddNote