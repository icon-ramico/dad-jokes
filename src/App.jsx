import Joke from './components/Jokes/Joke.jsx';
import './style.css';

export default function App() {
  const jokes = [
    {
      joke: 'I used to be a banker, but then lost my interest.',
      rating: 3,
      is_valid: true,
    },
    {
      joke: "I'm affraid for the calender it's days are numbered.",
      rating: 4,
      is_valid: true,
    },
    {
      joke: 'I used to be a banker, but then lost my interest.',
      rating: 3,
      is_valid: true,
    },
    {
      joke: "I'm affraid for the calender it's days are numbered.",
      rating: 4,
      is_valid: false,
    },
  ];
  return (
    <div id='container'>
      <h1>Dad Jokes</h1>
      {jokes.reduceRight(
        (acc, {is_valid, ...j}, i) => (true === is_valid ? [...acc, <Joke key={i} id={i + 1} {...j} />] : acc),
        []
      )}
    </div>
  );
}
