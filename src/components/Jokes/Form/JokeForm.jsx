import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export default function JokeForm({ submitText }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (5 > text.length) {
      setError('Joke must be 5 chars long');
      return;
    }

    submitText(text);
    setText('');
    setError('');
  };
  return (
    <form
      id="new_joke_form"
      style={{ marginTop: '20px' }}
      onSubmit={handleSubmit}>
      <label htmlFor="text">New Joke</label>
      <input
        id="text"
        type="text"
        value={text}
        placeholder="Enter a Joke"
        onChange={e => setText(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button type="submit">Add joke</button>
    </form>
  );
}
