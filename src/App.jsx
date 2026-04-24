import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");   // fixed typo
  const [fullName, setFullName] = useState("");

  function handleInput(e) {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      setFullName(`Full Name: ${firstName} ${lastName}`);
    }
  }

  return (
    <>
      <form onSubmit={handleInput}>
        <div>
          First Name:{" "}
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          Last Name:{" "}
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {fullName && <p>{fullName}</p>}
    </>
  );
}

export default App;
