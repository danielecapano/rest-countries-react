/* eslint-disable react-hooks/exhaustive-deps */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage";
import Details from "./pages/Details"
import Header from "./components/Header";
import useLocalStorage from "use-local-storage";




function App() {
  
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  

  const toggleTheme = () => {
    setIsDark(!isDark);
    console.log(isDark);
  }

  
  

  return (
    
    <Router>
        <div data-theme={isDark ? "dark" : "light"}>
          <Header isDark={isDark} setIsDark={setIsDark} toggleTheme={toggleTheme} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/details/:countryName" element={<Details />} />
            </Routes>
          </main>
       
        </div>
      </Router>
    
  )
}

export default App
