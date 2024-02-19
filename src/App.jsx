import Joke from './components/Jokes/Joke.jsx';
import './style.css';
import {useState} from 'react';

export default function App() {
  const [favorete, setFavorete] = useState(1);

  const jokes = [
    {
      id: 1,
      text: 'I used to be a banker, but then lost my interest.',
    },
    {id: 2, text: "I'm affraid for the calender it's days are numbered."},
    {id: 3, text: 'I used to be a banker, but then lost my interest.'},
    {id: 4, text: "I'm affraid for the calender it's days are numbered."},
  ];
  const handleFav = id => {
    setFavorete(id);
  };
  return (
    <div id='container'>
      <h1>Dad Jokes</h1>
      {jokes.reduce(
        (acc, {...j}, i) => [...acc, <Joke fav={favorete === j.id} setFav={handleFav} key={i} {...j} />],
        []
      )}
    </div>
  );
}
