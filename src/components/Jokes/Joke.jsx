import {useState} from 'react';
// eslint-disable-next-line react/prop-types
export default function Joke({text, id, fav, setFav}) {
  const [likes, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLikes = () => {
    setLike(likes + 1);
    console.log(`Liked id ${id} total is ${likes}`);
  };
  const handleDisLikes = () => {
    setDislike(dislike + 1);
    console.log(`Disiked id ${id} total is ${dislike}`);
  };
  const handleFavorete = () => {
    setFav(id);
  };
  return (
    <div className='Joke'>
      <p> {text}</p>
      <p>
        Likes: {likes} Dislikes: {dislike}
      </p>
      <div>
        <button onClick={handleLikes}>👍</button>
        <button onClick={handleDisLikes}>👎</button>
        <button onClick={handleFavorete}>{fav ? '💘' : '🤯'}</button>
      </div>
    </div>
  );
}
