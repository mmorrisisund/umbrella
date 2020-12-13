import { useState } from 'react'

import SearchInput from './SearchInput'

const SearchBox = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(searchTerm)
  }

  return (
    <div className='container mx-auto flex justify-center'>
      <form className='mx-auto mt-4 w-1/2' onSubmit={handleSubmit}>
        <label className='block'>
          <span className='text-blue-100 text-2xl tracking-wide'>
            Enter a city
          </span>
          <SearchInput onTermChange={setSearchTerm} />
        </label>
      </form>
    </div>
  )
}

export default SearchBox
