import Joke from './components/Jokes/Joke.jsx';

export default function App() {
  const jokes = [
    {
      joke: 'I used to be a banker, but then lost my interest.',
      rating: 3,
    },
    {
      joke: "I'm affraid for the calender it's days are numbered.",
      rating: 4,
    },
  ];
  return (
    <div style={{width: '768px', border: '1px solid black'}}>
      <h1>Dad Jokes</h1>
      {jokes.map(j => (
        <Joke {...j} />
      ))}
    </div>
  );
}
