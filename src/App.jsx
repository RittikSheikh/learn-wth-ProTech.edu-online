import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './routes/Router'
import { createContext, useState } from 'react'

export  const DarkContext = createContext()

function App() {
  const [dark, setDark] = useState(false)

  return (
    <DarkContext.Provider value={{dark, setDark}}>
      <div className={dark ? 'dark' : 'light'}>
        <RouterProvider router={router} />
      </div>
    </DarkContext.Provider>
  )
}

export default App
