
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [username , setUsername] = useState("")

  function handleChange(e){
    setUsername(e.target.value)
  }
  return (

      <div>
        {/* Do not remove the main div */}
        <h1>Enter your name</h1>
        <form>
          <input onChange={handleChange}

          />
          {username.length > 0 &&(
            <h3>Hello {username}</h3>
          )}
          
        </form>
    </div>
  )
}

export default App