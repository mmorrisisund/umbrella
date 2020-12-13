import React from 'react'
import SearchInput from './SearchInput'

const SearchBox = () => {
  return (
    <div className='container mx-auto flex justify-center'>
      <form className='mx-auto mt-4 w-1/2'>
        <label className='block'>
          <span className='text-blue-100 text-2xl tracking-wide'>
            Enter a city
          </span>
          <SearchInput />
        </label>
      </form>
    </div>
  )
}

export default SearchBox
