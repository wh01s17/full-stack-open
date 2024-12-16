import React from 'react'
import SinglePerson from './SinglePerson'

const Persons = ({ persons, handleDelete }) => {
    return (
        <ul>
            {
                persons.map(person => <SinglePerson
                    key={person.name}
                    name={person.name}
                    number={person.number}
                    handleDelete={() => handleDelete(person.id, person.name)}
                />)
            }
        </ul>
    )
}

export default Persons