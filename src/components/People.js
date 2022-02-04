import React from 'react'
import { usePeopleStore } from '../store'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

const People = () => {
  const people = usePeopleStore((state) => state.people)
  const toggleCancel = usePeopleStore((state) => state.toggleCancel)

  return (
    <div>
      <p>We have {people.length} people in our DB</p>
      <ul style={{ padding: 0 }}>
        {people.map((p, id) => (
          <li style={{ listStyle: 'none' }} key={id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  marginTop: '5px',
                  marginRight: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => toggleCancel(id)}
              >
                {p.cancelled ? (
                  <MdCheckBox size="1.5rem" />
                ) : (
                  <MdCheckBoxOutlineBlank size="1.5rem" />
                )}
              </div>
              <p
                style={{
                  margin: '0.5rem',
                  textDecoration: p.cancelled ? 'line-through' : 'none',
                }}
              >
                {p.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default People
