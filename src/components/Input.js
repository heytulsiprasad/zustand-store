import React, { useState } from 'react';
import { usePeopleStore } from '../store';

const Input = () => {
  const [title, setTitle] = useState("");
  const addPerson = usePeopleStore((state) => state.addPerson);

  const submitHandler = (e) => {
    e.preventDefault();
    
    
    if (title !== "") {
      console.log({title});
      addPerson(title);
      setTitle("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Input Here
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          placeholder='Enter person here'
        />
      </label>
      <button type="submit" onClick={submitHandler}>Add Person</button>
    </form>
  );
};

export default Input;
