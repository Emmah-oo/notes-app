import React from 'react'

const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className='w-[80%] mx-auto text-center mt-5'>
        <input
            className='w-[80%] p-5 rounded-lg' 
            type="text"
            placeholder='Search Note....' 
            value={search}
            onChange={handleSearch}
        />
    </div>
  )
}

export default Search