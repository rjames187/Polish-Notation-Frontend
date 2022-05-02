import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({"text" : "", "expType" : ""});
  const [displayData, setDisplayData] = useState({"infix" : '', "prefix" : '', "postfix" : '', "eval" : ""});

  return (
    <div className="App">
      <h1>Polish Notation Calculator</h1>
      <h2>What kind of expression do you want to convert?</h2>
      <form>
        <input type="radio" id="infix-rb" name="expression-type" value="infix" checked></input>
        <label for="infix-rb">Infix</label>
        <input type="radio" id="prefix-rb" name="expression-type" value="prefix"></input>
        <label for="prefix-rb">Prefix</label>
        <input type="radio" id="postfix-rb" name="expression-type" value="postfix"></input>
        <label for="postfix-rb">Postfix</label>
        <input type="text" placeholder='enter an expression' required/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
