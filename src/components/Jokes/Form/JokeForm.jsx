import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function JokeForm({ submitText }) {
  const [text, setText] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    submitText(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Joke"
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add joke</button>
    </form>
  );
}
