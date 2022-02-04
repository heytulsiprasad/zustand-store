import create from "zustand"
import { devtools, persist } from "zustand/middleware"
import axios from "axios";


const getUser = async () => {
  const users = await axios.get("https://randomuser.me/api");
  const user = users.data.results[0].name;

  // return users.data;
  return `${user.title} ${user.first} ${user.last}`;
}

// Function that creates the store
let settingsStore = (set) => ({
  dark: false,
  switchDark: () => set((state) => ({ dark: !state.dark }))
});

settingsStore = devtools(settingsStore);
settingsStore = persist(settingsStore, { name: "settings" });

// People store
let peopleStore = (set) => ({
  people: ['John Doe', 'Jane Doe', "Mary Dane"],
  addPerson: (person) => set((state) => ({ people: [...state.people, person ]})),
  requestMoreUsers: async () => {
    const response = await getUser()
    set((state) => ({ people: [...state.people, response ]}))
  }
})

peopleStore = devtools(peopleStore);
// peopleStore = persist(peopleStore, { name: "people" })

const useSettingsStore = create(settingsStore)
const usePeopleStore = create(peopleStore);

export { useSettingsStore, usePeopleStore };