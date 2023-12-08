import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
   const myname = 'Vinnie'

   const [nameValue,setNameValue] = useState('');
   const inputChange = (event) => {
    setNameValue(event.target.value);
   };

   return ( 
    <div className="App"> 
    <input type="text" palceholder="Type your name..." value={nameValue} onChange = {inputChange}></input>
    
    <h1>Hello, {nameValue}</h1>
    
    </div>
   );
}

export default App;
