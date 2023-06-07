import Square from "./Square";
import { RefObject } from "react";

type WordProps = {
  level: number;
  word: string[];
  wordArray: any[];
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  refs: RefObject<{ [key: string]: any }>;
};

const Word: React.FunctionComponent<WordProps> = ({
  level,
  word,
  handleOnChange,
  wordArray,
  refs,
}) => {
  return (
    <section className="word-section">
      {word.map((letter, index) => (
        <Square
          key={index}
          level={level}
          column={index}
          wordArray={wordArray}
          handleOnChange={handleOnChange}
          refs={refs}
        ></Square>
      ))}
    </section>
  );
};

export default Word;
