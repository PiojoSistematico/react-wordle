import { RefObject } from "react";

type SquareProps = {
  level: number;
  column: number;
  word: string[];
  wordArray: any[];
  letter: string;
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  refs: RefObject<{ [key: string]: any }>;
};

const Square: React.FunctionComponent<SquareProps> = ({
  level,
  column,
  word,
  wordArray,
  letter,
  attempts,
  handleOnChange,
  refs,
}) => {
  return refs.current ? (
    <>
      <input
        className={
          wordArray[column] == "Right"
            ? "square right"
            : wordArray[column] == "Included"
            ? "square included"
            : "square"
        }
        type="text"
        name={`${level}${column}`}
        placeholder={letter}
        maxLength={1}
        onChange={handleOnChange}
        ref={(el) => {
          if (refs.current) {
            refs.current[`${level}${column}`] = el;
          }
        }}
        disabled={true}
      />
    </>
  ) : null;
};

export default Square;
