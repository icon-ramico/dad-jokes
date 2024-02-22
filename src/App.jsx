import JokeForm from './components/Jokes/Form/JokeForm.jsx';
import Joke from './components/Jokes/Joke.jsx';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [favorete, setFavorete] = useState(1);
  const [jokes, setJokes] = useState([
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

  const handleFav = id => {
    setFavorete(id);
  };
  const handleLike = id => {
    setJokes(
      jokes.reduce(
        (acc, curr) => [
          ...acc,
          { ...curr, like: curr.id === id ? curr.like + 1 : curr.like },
        ],
        [],
      ),
    );
    console.table(jokes);
  };
  const handleDislike = id => {
    setJokes(
      jokes.reduce(
        (acc, curr) => [
          ...acc,
          { ...curr, like: curr.id === id ? curr.like - 1 : curr.like },
        ],
        [],
      ),
    );
    console.table(jokes);
  };
  const handleJokeText = text => {
    const joke = {
      id: self.crypto.randomUUID(),
      text,
      like: 0,
    };
    setJokes([joke, ...jokes]);
  };
  const handleDelete = id => {
    setJokes(jokes.filter(j => j.id !== id));
  };
  const handleSort = () => {
    setJokes([...jokes].sort((a, b) => b.like - a.like));
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
            onFav={handleFav}
            onSort={handleSort}
            fav={favorete === j.id}
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
