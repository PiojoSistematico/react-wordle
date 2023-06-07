import Word from "./Word";
import { RefObject } from "react";

type BoardProps = {
  word: string[];
  wordArray: any[];
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  refs: RefObject<{ [key: string]: any }>;
};

const Board: React.FunctionComponent<BoardProps> = ({
  word,
  handleOnChange,
  wordArray,
  refs,
}) => {
  return (
    <section className="board-section">
      {wordArray.map((elem, index) => (
        <Word
          key={index}
          level={index}
          word={word}
          wordArray={wordArray[index]}
          handleOnChange={handleOnChange}
          refs={refs}
        ></Word>
      ))}
    </section>
  );
};

export default Board;
