type SquareProps = {
  level: number;
  column: number;
  word: string[];
  wordArray: any[];
  letter: string;
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
};

const Square: React.FunctionComponent<SquareProps> = ({
  level,
  column,
  word,
  wordArray,
  letter,
  attempts,
  handleOnChange,
  inputRef,
}) => {
  /* console.log(level, column); */
  return inputRef.current ? (
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
        placeholder={`${level}${column}`}
        maxLength={1}
        onChange={handleOnChange}
        ref={(elem) => (inputRef.current[level][column] = elem)}
      />
    </>
  ) : null;
};

export default Square;
