import Joke from './components/Jokes/Joke.jsx';
import './style.css';
import React, { useState, useEffect } from 'react';

let ran = false;
const fetchedJokes = []

const getJoke = async () => {
  const resp = await fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json' }
  });
  const json = await resp.json();
  return json.joke;
}

const updateJokes = async (set) => {
  if (ran) return;
  ran = true;
  await delay(5000);
  const jokes = fetchedJokes
  for (const j of defaultJokes) {
    const nj = {...j}
    nj.joke =  await getJoke();
    jokes.push(nj)
  }
  set(jokes);
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const defaultJokes = [
  {
    id: 0,
    joke: 'I used to be a banker, but then lost my interest.',
    rating: 3,
    is_valid: true,
  },
  {
    id: 1,
    joke: "I'm affraid for the calender it's days are numbered.",
    rating: 4,
    is_valid: true,
  },
  {
    id: 2,
    joke: 'I used to be a banker, but then lost my interest.',
    rating: 3,
    is_valid: true,
  },
  {
    id: 3,
    joke: "I'm affraid for the calender it's days are numbered.",
    rating: 4,
    is_valid: false,
  },
];

export default function App() {
  const cssClass = 'align'
  const [jokes, setJokes] = useState(defaultJokes)
  updateJokes(setJokes);

  console.log('jokes: ', jokes)
  
  return (
    <div id='container'>
      <h1 className={cssClass}>Dad Jokes</h1>
      {(jokes ?? []).map(j => (<Joke className={cssClass} key={j.id} id={j.id} {...j} />))}
    </div>
  );
}
