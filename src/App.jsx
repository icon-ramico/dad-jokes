import { useReducer, useEffect } from 'react';
import jokeReducer from './store/reducer/jokes/jokeReducer.js';
import jokeActions from './store/reducer/jokes/actions';

import JokeForm from './components/Jokes/Form/JokeForm.jsx';
import Joke from './components/Jokes/Joke.jsx';

import './style.css';

export default function App() {
  const [jokes = [], dispatch] = useReducer(jokeReducer, []);

  useEffect(() => {
    (async () => {
      const jokes = await Promise.all(
        Array(10).fill(
          fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' },
          }).then(d => d.json()),
        ),
      );
      dispatch({
        type: jokeActions.INIT,
        payload: { jokes: jokes.map(({ joke }) => ({ text: joke })) },
      });
    })();
  }, []);

  const handleLike = id => {
    dispatch({ type: jokeActions.LD_JOKE, payload: { id } });
  };
  const handleDislike = id => {
    dispatch({ type: jokeActions.LD_JOKE, payload: { id, op: '-' } });
  };
  const handleJokeText = text => {
    dispatch({ type: jokeActions.ADD_JOKE, payload: { text } });
  };
  const handleDelete = id => {
    dispatch({ type: jokeActions.DELETE_JOKE, payload: { id } });
  };
  const handleSort = () => {
    dispatch({ type: jokeActions.SORT_JOKES });
  };
  return (
    <div id="container">
      <h1>Dad Jokes</h1>
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
      <JokeForm submitText={handleJokeText} />
    </div>
  );
}
