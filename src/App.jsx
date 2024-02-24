import { useState, useReducer } from 'react';
import jokeReducer from './store/reducer/jokes/jokeReducer.js';
import jokeActions from './store/reducer/jokes/actions';

import JokeForm from './components/Jokes/Form/JokeForm.jsx';
import Joke from './components/Jokes/Joke.jsx';

import './style.css';

export default function App() {
  const [showForm, setShowForm] = useState(false);

  const [jokes, dispatch] = useReducer(jokeReducer, [
    {
      id: 1,
      text: 'I used to be a banker, but then lost my interest.',
      like: 0,
    },
    {
      id: 2,
      text: "I'm affraid for the calender it's days are numbered.",
      like: 0,
    },
    {
      id: 3,
      text: 'I used to be a banker, but then lost my interest.',
      like: 0,
    },
    {
      id: 4,
      text: "I'm affraid for the calender it's days are numbered.",
      like: 0,
    },
  ]);

  const handleLike = id => {
    dispatch({ type: jokeActions.LD_JOKE, payload: { id } });
  };
  const handleDislike = id => {
    dispatch({ type: jokeActions.LD_JOKE, payload: { id, op: '-' } });
  };

  const handleJokeText = text => {
    dispatch({ type: jokeActions.ADD_JOKE, payload: { text } });
    setShowForm(false);
  };
  const handleDelete = id => {
    dispatch({ type: jokeActions.DELETE_JOKE, payload: { id } });
  };
  const handleSort = () => {
    dispatch({ type: jokeActions.SORT_JOKES });
  };
  const handleNewForm = () => {
    setShowForm(true);
  };

  return (
    <div id="container">
      <h1>Dad Jokes</h1>
      {showForm ? (
        <JokeForm submitText={handleJokeText} />
      ) : (
        <>
          <button onClick={handleNewForm}>Add joke</button>
          {jokes.reduce(
            (acc, { ...j }, i) => [
              ...acc,
              <Joke
                onLike={handleLike}
                onDislike={handleDislike}
                onDelete={handleDelete}
                onSort={handleSort}
                key={i}
                {...j}
              />,
            ],
            [],
          )}
        </>
      )}
    </div>
  );
}
