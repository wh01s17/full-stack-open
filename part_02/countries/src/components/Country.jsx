
const Country = ({ country, handleShow }) => {
    return (
        <li>
            {country.name.common}
            <button onClick={() => handleShow(country)}>
                show
            </button>
        </li>
    )
}

export default Country