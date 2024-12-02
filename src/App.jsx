import React from "react"
import Weather from "./components/Weather"

function App() {
  return(
    <div className='app'>
      {window.innerWidth >= 500 && window.innerHeight >= 600 ? <Weather/> : <h1 className="pc-only">Please, Use Desktop/Laptop to Enter this web page!</h1>}
      
    </div>
  )
}

export default App
