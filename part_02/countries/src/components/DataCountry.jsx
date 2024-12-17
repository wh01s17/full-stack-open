import Weather from "./Weather"

const DataCountry = ({ country }) => {
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <h4>languages:</h4>
            <ul>
                {Object.values(country.languages).map((lang, index) => <li key={index}>{lang}</li>)}
            </ul>
            <img src={country.flags.png} alt={country.name.common} />

            <h2>Weather in {country.capital}</h2>
            <Weather capital={country.capital[0]} country={country.cca2} />
        </div>
    )
}

export default DataCountry