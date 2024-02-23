import Joke from './components/Jokes/Joke.jsx';
import './style.css';
import React, { useState } from 'react';
import { defaultJokes, updateJokes } from './jokes.js';

export default function App() {
  const cssClass = 'align'
  const [jokes, setJokes] = useState(defaultJokes)
 
  return (
    <div id='container'>
      <h1 className={cssClass}>Dad Jokes</h1>
      {(jokes ?? []).map(j => (<Joke className={cssClass} key={j.id} id={j.id} {...j} />))}
      <p><button onClick={() => updateJokes(setJokes)}>Refresh</button></p>
    </div>
  );
}
