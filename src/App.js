import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [inputType, setInputType] = useState("infix");
  const [displayData, setDisplayData] = useState({"infix" : '', "prefix" : '', "postfix" : '', "eval" : ""});

  function handleSubmit (e) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    

    var raw = JSON.stringify({
    "data": inputText
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://pn-microservice.herokuapp.com/${inputType}`, requestOptions)
      .then(response => response.json())
      .then(result => setDisplayData(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <h1>Polish Notation Calculator</h1>
      <h2>What kind of expression do you want to convert?</h2>
      <p>Enter with spaces between each token or it will <strong>not</strong> work</p>
      <p>For an <strong>infix</strong> expression use <strong>parentheses</strong> to designate order of operations</p>
      <p>Expressions without <strong>atleast one pair</strong> of parentheses cannot be evaluated</p>
      <form onSubmit={handleSubmit}>
        <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
          <option value="infix">Infix</option>
          <option value="prefix">Prefix</option>
          <option value="postfix">Postfix</option>
        </select>
        <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" placeholder='enter an expression' required/>
        <button type="submit">Submit</button>
      </form>

      <h2>Results</h2>
      <ul>
        <li>{inputText} evaluates to {displayData["eval"]}</li>
        <li>Infix: {displayData["infix"]}</li>
        <li>Prefix: {displayData["prefix"]}</li>
        <li>Postfix: {displayData["postfix"]}</li>
      </ul>

      <footer>
        <p>Created by: Rory James</p>
        <a href="https://github.com/rjames187/Polish-Notation-Frontend">View Source</a>
      </footer>
    </div>
  );
}

export default App;
