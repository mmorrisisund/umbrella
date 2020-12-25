import { WiUmbrella } from 'react-icons/wi'

const Header = () => {
  return (
    <header className='px-5 py-2'>
      <span className='flex items-center justify-center text-3xl font-thin text-blue-100 md:justify-start'>
        <h1 className='inline uppercase'>umbrella</h1>
        <WiUmbrella />
      </span>
    </header>
  )
}

export default Header
