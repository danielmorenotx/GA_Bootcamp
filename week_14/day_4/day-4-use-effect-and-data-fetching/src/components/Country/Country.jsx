import './Country.css'
const Country = ({country, addToPlanBook, th}) => {

  return (
    <div className="country-card">
      <h3>{country.name.common}</h3>
      <img src={country.flags.png} alt={country.flags.alt} />
      
      {
        addToPlanBook && <button onClick={() => {
          addToPlanBook(country)
        }}>Add to plan</button>
      }
    </div>
  )
}

export default Country;