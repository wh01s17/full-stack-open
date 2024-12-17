import React from 'react'
import { useState, useEffect } from 'react'
import countryServices from './services/Countries'
import DataCountry from './components/DataCountry'
import CountryList from './components/CountryList'

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    countryServices
      .getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSelectedCountry(null)
  }

  const handleShow = (country) => {
    setSelectedCountry(country)
  }

  const countriesToShow = search
    ? countries.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
    : countries

  return (
    <div>
      find countries
      <input value={search} onChange={handleSearch} />

      {
        countriesToShow.length > 10
          ? <p>Too many matches, specify another filter</p>
          : countriesToShow.length === 1
            ? <DataCountry country={countriesToShow[0]} />
            : <div>
              <CountryList countries={countriesToShow} handleShow={handleShow} />
              {selectedCountry && <DataCountry country={selectedCountry} />}
            </div>
      }

    </div>
  )
}

export default App