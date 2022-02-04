import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import axios from 'axios'

// Employee store
const initialEmployeeData = [
  {
    name: 'Kunal Agrawal',
    cancelled: false,
  },
  {
    name: 'Mohit Nairobi',
    cancelled: false,
  },
  {
    name: 'Ahmed Brutal',
    cancelled: true,
  },
]

const getUser = async () => {
  const users = await axios.get('https://randomuser.me/api')
  const user = users.data.results[0].name

  // return users.data;
  return `${user.title} ${user.first} ${user.last}`
}

// Function that creates the store
let settingsStore = (set) => ({
  dark: false,
  switchDark: () => set((state) => ({ dark: !state.dark })),
})

settingsStore = devtools(settingsStore)
settingsStore = persist(settingsStore, { name: 'settings' })

// People store
let peopleStore = (set) => ({
  people: [...initialEmployeeData],
  addPerson: (person) =>
    set((state) => ({
      people: [...state.people, { name: person, cancelled: false }],
    })),
  requestMoreUsers: async () => {
    const response = await getUser()
    set((state) => ({
      people: [...state.people, { name: response, cancelled: false }],
    }))
  },
  toggleCancel: (id) =>
    set((state) => ({
      people: state.people.map((p, idx) => {
        if (idx === id) {
          const dx = state.people[id]
          dx.cancelled = !dx.cancelled
          return dx
        }

        return p
      }),
    })),
})

peopleStore = devtools(peopleStore)
// peopleStore = persist(peopleStore, { name: "people" })

const useSettingsStore = create(settingsStore)
const usePeopleStore = create(peopleStore)

export { useSettingsStore, usePeopleStore }
