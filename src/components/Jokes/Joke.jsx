// eslint-disable-next-line react/prop-types
export default function Joke({joke, id, rating}) {
  const ratingString = '⭐'.repeat(rating) + '🌟'.repeat(5 - rating);

  return (
    <>
      <p>
        {id} {joke}
      </p>
      <p>{ratingString}</p>
    </>
  );
}
