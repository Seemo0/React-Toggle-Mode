import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';
import './App.css';
import Form from "./components/Form"

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className='App' id={theme}>
       <Form />
       <div className='switch'> 
         <label> {theme === "light" ? "Light Mode" : "Dark Mode"} </label>
         <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
       </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
