// eslint-disable-next-line react/prop-types
export default function Joke({ onFav, onDelete,onLike,onDislike,...joke }) {


  const handleLike = (id) => {
    onLike(id);
  };
  const handleDislike = (id) => {
    onDislike(id);
  };
  const handleFav = () => {
    onFav(joke.id);
  };
  const handleDelete = id => {
    onDelete(id);
  };
  return (
    <div className="Joke">
      <p>{joke.text}</p>
      <p>
        Likes: {joke.like}
      </p>
      <div>
        <button onClick={() => handleLike(joke.id)}>👍</button>
        <button onClick={() => handleDislike(joke.id)}>👎</button>
        <button onClick={handleFav}>{joke.fav ? '💘' : '🤯'}</button>
        <button onClick={() => handleDelete(joke.id)}> ❌ </button>
      </div>
    </div>
  );
}
