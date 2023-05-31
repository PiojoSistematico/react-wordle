type SquareProps = {
  index: number;
  word: string[];
  wordArray: any[];
  letter: string;
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

import React, { useRef } from "react";

const Square: React.FunctionComponent<SquareProps> = ({
  index,
  word,
  wordArray,
  letter,
  attempts,
  handleOnChange,
}) => {
  const inputRef = useRef(null);

  return (
    <>
      <input
        className={
          wordArray[index] == "Right"
            ? "square right"
            : wordArray[index] == "Included"
            ? "square included"
            : "square"
        }
        type="text"
        name={index.toString()}
        placeholder={letter}
        maxLength={1}
        onChange={handleOnChange}
        ref={inputRef}
      />
    </>
  );
};

export default Square;
