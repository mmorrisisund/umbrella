const LocationTitle = ({ location }) => {
  const locationName =
    location.country === 'US'
      ? `${location.city}, ${location.state}`
      : `${location.city}, ${location.country}`

  return (
    <section className='flex justify-center'>
      <h2 className='text-5xl text-blue-100'>{locationName}</h2>
    </section>
  )
}

export default LocationTitle
