import React from 'react'
import './App.css';
import { useState } from 'react';
import Red from './components/Red';
import Blue from './components/Blue';
import Green from './components/Green';

function App() {
  const [color, setColor] = useState('')
  console.log(color)

  const getColor =(color)=>{
    console.log(color)
    setColor(color)
  }
  return (
    <div className="App" style={{backgroundColor:color}}>
    <Red getColor={getColor}/>
    <Blue getColor={getColor}/>
    <Green getColor={getColor}/>
    </div>
  );
}

export default App;
