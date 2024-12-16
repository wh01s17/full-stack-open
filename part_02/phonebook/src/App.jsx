import { useState, useEffect } from "react"
import Persons from "./components/Persons"
import PersonForm from "./components/PersonForm"
import Filter from "./components/Filter"
import numberService from './services/Numbers'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    numberService
      .getAll()
      .then(initialNumbers => {
        setPersons(initialNumbers)
      })
  }, [])

  const addName = (e) => {
    e.preventDefault()

    if (nameExist(newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
        const person = persons.find(p => p.name === newName)
        const changedNumber = { ...person, number: newNumber }

        numberService
          .update(changedNumber.id, changedNumber)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
            alert('number updated')
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      const nameObj = {
        name: newName,
        number: newNumber
      }

      numberService
        .create(nameObj)
        .then(returnedNote => {
          setPersons(persons.concat(returnedNote))
          setNewName('')
          setNewNumber('')
        })
    }
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

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      numberService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id))
        })
    }
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
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App