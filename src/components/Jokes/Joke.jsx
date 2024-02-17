// eslint-disable-next-line react/prop-types
export default function Joke({joke, ...props}) {
  return (
    <>
      <p>{joke}</p>
      {/* eslint-disable-next-line react/prop-types */}
      <p>{props.rating}</p>
    </>
  );
}
