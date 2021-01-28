import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

import axios from 'axios';


import './App.css';

function App() {
  const [data, setData] = useState({});

  useEffect(() =>{
    axios.get('/api')
    .then((resp)=> {
      console.log(resp.data)
      setData(resp.data)
    });
  },[]);
  


  return ( 
    <Router>
    <div className="App">

      <header>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Blog'>Blog</Link>
      </header>

      <Switch>
      <Route exact path='/'>
      <Home data={data}/>
      </Route>
      <Route path='/About'>
      <About/>
      </Route>
      <Route path='/Blog'>
      <Blog/>
      </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;
