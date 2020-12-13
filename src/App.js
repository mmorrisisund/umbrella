import AtmosphereDisplay from './components/AtmosphereDisplay'
import DetailDisplay from './components/DetailDisplay'
import SearchBox from './components/SearchBox'
import TempDisplay from './components/TempDisplay'

function App () {
  return (
    <div className='bg-gradient-to-b from-blue-600 to-blue-300 min-h-screen min-w-max'>
      <header className='h-16 border-b border-blue-900'>
        <h1>umbrella</h1>
      </header>
      <main>
        <SearchBox />

        <TempDisplay />

        <div className='pt-6 container mx-auto flex justify-center'>
          <div className='w-1/2 flex text-blue-100'>
            <AtmosphereDisplay />
            <DetailDisplay />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
