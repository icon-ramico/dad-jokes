import {useState} from 'react';
// eslint-disable-next-line react/prop-types
export default function Joke({text, id, fav, setFav}) {
  const [likes, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLikes = () => {
    const prevCB = p => ++p;
    setLike(prevCB);
    setLike(prevCB);
    setLike(prevCB);
    setLike(prevCB);
    console.log(`Liked id ${id} total is ${likes}`);
  };
  const handleDisLikes = () => {
    const prevCB = p => --p;
    setDislike(prevCB);
    setDislike(prevCB);
    setDislike(prevCB);
    setDislike(prevCB);

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
        <p>{fav}</p>
        <button onClick={handleLikes}>👍</button>
        <button onClick={handleDisLikes}>👎</button>
        <button onClick={handleFavorete}>{fav ? '💘' : '🤯'}</button>
      </div>
    </div>
  );
}
