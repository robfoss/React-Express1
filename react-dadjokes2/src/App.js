import React, { useState} from 'react'
import Axios from 'axios'


function App() {
  const [joke, setJoke] = useState('')

  const getJoke = () => {
   
    Axios.get('https://official-joke-api.appspot.com/random_joke')
    .then(response => setJoke(response.data.setup + ' ... ' + response.data.punchline))
  }
    
  
  return (
   <>
   <div>
     Joke <button onClick={getJoke}>Get Joke</button>
     {joke}
   </div>
   </>
  );
}

export default App;
