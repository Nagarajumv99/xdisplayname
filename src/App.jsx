import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleInput(e) {
    e.preventDefault();
    if (firstName !== "" && lastName !== "") {
      setFullName(`${firstName} ${lastName}`); // no "Full Name:" prefix
    } else {
      setFullName(""); // clear if incomplete
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

      {/* Static heading always present */}
      <h2>Full Name Display</h2>

      {/* Show full name only if both fields filled */}
      {fullName && <p>{fullName}</p>}
    </>
  );
}

export default App;
