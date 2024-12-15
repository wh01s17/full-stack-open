import { useState, useEffect } from "react"
import './App.css'
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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