import Square from "./Square";

type WordProps = {
  word: string[];
  wordArray: any[];
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

/* import React, { useState } from 'react';

const YourComponent = () => {
  const [disabled, setDisabled] = useState(false);

  const handleInputChange = (event) => {
    const { value, maxLength } = event.target;
    if (value.length >= maxLength) {
      setDisabled(true);
    }
  };

  const handleBlur = () => {
    setDisabled(true);
  };

  return (
    <div>
      <input
        type="text"
        maxLength={10} // Replace with the desired maximum length
        onChange={handleInputChange}
        onBlur={handleBlur}
        disabled={disabled}
      />
    </div>
  );
};

export default YourComponent;
 */

/* import React, { useRef } from 'react';

const YourComponent = () => {
  const inputRef = useRef(null);

  const handleInputChange = (event) => {
    const { value, maxLength } = event.target;
    if (value.length >= maxLength) {
      inputRef.current.disabled = true;
      if (inputRef.current.nextElementSibling) {
        inputRef.current.nextElementSibling.focus();
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        maxLength={10} // Replace with the desired maximum length
        onChange={handleInputChange}
        ref={inputRef}
      />
      <input type="text" />
      <input type="text" />
    </div>
  );
};

export default YourComponent; */

const Word: React.FunctionComponent<WordProps> = ({
  word,
  attempts,
  handleOnChange,
  wordArray,
}) => {
  return (
    <section className="word-section">
      {word.map((letter, index) => (
        <Square
          key={index}
          index={index}
          word={word}
          wordArray={wordArray}
          letter={letter}
          attempts={attempts}
          handleOnChange={handleOnChange}
        ></Square>
      ))}
    </section>
  );
};

export default Word;
