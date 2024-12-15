import React from 'react'
import SinglePerson from './SinglePerson'

const Persons = ({ persons }) => {
    return (
        <ul>
            {
                persons.map(person => <SinglePerson key={person.name} name={person.name} number={person.number} />)
            }
        </ul>
    )
}

export default Persons