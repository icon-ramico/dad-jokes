import Joke from './components/Jokes/Joke.jsx';

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
      is_valid: false,
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
    <div style={{width: '768px', border: '1px solid black'}}>
      <h1>Dad Jokes</h1>
      {jokes.reduceRight((acc, {is_valid, ...j}, i) => (is_valid ? [...acc, <Joke key={i} id={i + 1} {...j} />] : acc), [])}
    </div>
  );
}
