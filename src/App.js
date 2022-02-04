import React from 'react'

import People from './components/People'
import Input from './components/Input'
import { useSettingsStore } from './store'

const App = () => {
  // Don't fall for destructuring by hampering performance
  // Each slice should have its own variable ideally

  const switchDark = useSettingsStore((state) => state.switchDark)
  const dark = useSettingsStore((state) => state.dark)

  return (
    <div className={['body', dark ? 'dark' : null].join(' ')}>
      <button style={{ width: 'max-content' }} onClick={switchDark}>
        Toggle Dark Mode
      </button>
      <h1>Employees</h1>
      <Input />
      <People />
    </div>
  )
}

export default App
