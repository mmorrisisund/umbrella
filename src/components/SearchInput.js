import React from 'react'
import { HiOutlineSearch } from 'react-icons/hi'

const SearchInput = () => {
  return (
    <div className='relative'>
      <input
        type='text'
        className='mt-3 w-full block rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
        placeholder='New York'
      />
      <button type='submit' className='absolute top-0 right-0 mt-2 mr-2'>
        <HiOutlineSearch className='text-gray-400 h-6 w-6' />
      </button>
    </div>
  )
}

export default SearchInput
