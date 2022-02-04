import React, { useState } from 'react'
import { usePeopleStore } from '../store'

const Input = () => {
  const [title, setTitle] = useState('')
  const addPerson = usePeopleStore((state) => state.addPerson)
  const requestMoreUsers = usePeopleStore((state) => state.requestMoreUsers)

  const submitHandler = (e) => {
    e.preventDefault()

    if (title !== '') {
      console.log({ title })
      addPerson(title)
      setTitle('')
    }
  }

  // Delete person possibility
  // Like dislike
  // Rearrange according to likes and dislikes

  return (
    <form onSubmit={submitHandler}>
      <label>
        Input Here
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter person here"
        />
      </label>
      <div>
        <button type="submit" onClick={submitHandler}>
          Add Person
        </button>
        <button type="button" onClick={requestMoreUsers}>
          Request More
        </button>
      </div>
    </form>
  )
}

export default Input
