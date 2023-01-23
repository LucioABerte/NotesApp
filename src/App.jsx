//import './App.css'  
import './components/NotesApp/styles.css' 
import NoteApp from './components/NotesApp/NoteApp'
//import Navbar from "./components/Toggle/Navbar"
//import Main from "./components/Toggle/Main"
import { useState } from 'react'

function App() {

  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className="container">
          
          {/* <Navbar 
                    darkMode={darkMode} 
                    toggleDarkMode={toggleDarkMode}
              />
              <Main 
                    darkMode={darkMode} 
              />
          */}

          <NoteApp />


    </div>
  )
}

export default App
