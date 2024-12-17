import Country from "./Country"

const CountryList = ({ countries, handleShow }) => {
    return (
        <ul>
            {countries.map(c => <Country key={c.cca3} country={c} handleShow={handleShow} />)}
        </ul>
    )
}

export default CountryList