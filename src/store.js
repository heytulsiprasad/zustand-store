import create from "zustand"
import { devtools, persist } from "zustand/middleware"

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
  addPerson: (person) => set((state) => ({ people: [...state.people, person ]}))
})

peopleStore = devtools(peopleStore);

const useSettingsStore = create(settingsStore)
const usePeopleStore = create(peopleStore);

export { useSettingsStore, usePeopleStore };