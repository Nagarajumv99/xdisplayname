import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setlastName] = useState("");
  const [fullName, setFullName] = useState("");
  function handleInput(e){
    e.preventDefault();
    if(firstName !== "" && lasttName !== ""){
      setFullName(`Full Name: ${firstName} ${lasttName}`);
    }
  }

  return (
     

    <>
      <form onSubmit={handleInput}>
        <div>First Name: <input type="text" onChange={(e) => setFirstName(e.target.value)} required/></div>
        <div>Last Name: <input type="text" onChange={(e) => setlastName(e.target.value)} required/></div>
        <div><button type="submit">submit</button></div>
      </form>
      {fullName&&<p>{fullName}</p>}
    </>
  )
}

export default App
