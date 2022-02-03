import React from 'react';
import { usePeopleStore } from "../store";

const People = () => {
  const people = usePeopleStore((state) => state.people);
  
  return (
    <div>
      <p>We have {people.length} people in our DB</p>
      <ul>
        {people.map((p, id) => (
          <li key={id}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;
