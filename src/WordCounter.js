import React, { useState } from 'react';

function WordCounter() {
  const [text, setText] = useState('');

  const countWords = () => {
    const words = text.split(/\s+/).filter(word => word !== '');
    return words.length;
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="word-counter">
      <textarea
        placeholder="Type or paste your text here..."
        onChange={handleTextChange}
        value={text}
        rows="16" // Adjust the number of rows (vertical size)
        cols="20" // Adjust the number of columns (horizontal size)
        style={{ width: '80%' }} // Use CSS for more precise sizing
      />
      <p className="word-count">Word Count: {countWords()}</p>
    </div>
  );
}

export default WordCounter;
