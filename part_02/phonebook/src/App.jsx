import { useState } from "react"
import './App.css'
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const addName = (e) => {
    e.preventDefault()

    if (nameExist(newName)) {
      return alert(`${newName} is already added to phonebook`)
    }

    const nameObj = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(nameObj))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const nameExist = (n) => {
    return persons.some(person => person.name === n)
  }

  const personsToShow = search
    ? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
    : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChangeSearch={handleSearchChange} valueSearch={search} />
      <h2>add a new</h2>
      <PersonForm
        formSubmit={addName}
        onChangeName={handleNameChange}
        nameValue={newName}
        onChangeNumber={handleNumberChange}
        numberValue={newNumber}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App