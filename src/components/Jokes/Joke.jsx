// eslint-disable-next-line react/prop-types
export default function Joke({joke, id, rating, className}) {
  const ratingString = '⭐'.repeat(rating) + '🌟'.repeat(5 - rating);

  return (
    <div>
      <p className={className}>
        {id} {joke}
      </p>
      <p className={className}>{ratingString}</p>
    </div>
  );
}
