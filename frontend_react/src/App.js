import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { Table } from "react-bootstrap";

function App() {
  const [characterRes, setCharacterRes] = useState(false);
  const [characterName, setCharacterName] = useState("Jon_Snow");

  const handleInputChange = e => {
    const value = e.target.value;
    setCharacterName(value);
  };

  const handleClick = e => {
    axios
      .get(
        `http://${window.location.hostname}:7000/callapi?character=${characterName}`
      )
      .then(res => {
        console.log(res.data);
        setCharacterRes(res.data[0]);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{window.token}</p>
        <h1>what character do you want info on?</h1>
        <input type="text" onChange={handleInputChange} value={characterName} />
        <button onClick={handleClick}>give character info</button>
        {characterRes && (
          <Table variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actor</th>
                <th>Titles</th>
                <th>Born</th>
                <th>Culture</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{characterRes.name}</td>
                <td>{characterRes.playedBy.toString()}</td>
                <td>{characterRes.titles.toString()}</td>
                <td>{characterRes.born}</td>
                <td>{characterRes.culture}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </header>
    </div>
  );
}

export default App;
