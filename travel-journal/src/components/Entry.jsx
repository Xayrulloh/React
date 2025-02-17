export default function Entry({countries}) {
  // { mainImage, countryName, locationName, date, description }[]
  // const articleChildren = countries.map((country, index) => (
    
  // ))

  return (
    countries.map((country, index) => (
      <article className="journal-entry" key={index}>
        <div className="main-image-container">
          <img className="main-image" src={country.mainImage} alt="Japan img" />
        </div>
        <div className="entry-location">
          <img className="marker" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png" alt="icon" />
          <span>{country.countryName}</span>
          <a href="https://www.google.maps">View on Google Maps</a>
          <h2>{country.locationName}</h2>
          <p>{country.date}</p>
          <p>{country.description}</p>
        </div>
      </article>
    ))
  )
}