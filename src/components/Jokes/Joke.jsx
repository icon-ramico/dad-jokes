/* eslint-disable react/prop-types */
export default function Joke({ onDelete, onLike, onDislike, onSort, ...joke }) {
  const handleLike = id => {
    onLike(id);
  };
  const handleDislike = id => {
    onDislike(id);
  };
  const handleDelete = id => {
    onDelete(id);
  };
  return (
    <div className="Joke">
      <p>{joke.text}</p>
      <p style={{ marginBottom: '5px' }}>Likes: {joke.like}</p>
      <div>
        <button onClick={() => handleLike(joke.id)}>👍</button>
        <button onClick={() => handleDislike(joke.id)}>👎</button>
        <button onClick={() => handleDelete(joke.id)}> ❌ </button>
        <button onClick={() => onSort()}> ⏬ </button>
      </div>
    </div>
  );
}
