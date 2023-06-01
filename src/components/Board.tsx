import Word from "./Word";

type BoardProps = {
  word: string[];
  wordArray: any[];
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: any;
};

const Board: React.FunctionComponent<BoardProps> = ({
  word,
  attempts,
  handleOnChange,
  wordArray,
  inputRef,
}) => {
  return (
    <section className="board-section">
      {wordArray.map((elem, index) => (
        <Word
          key={index}
          level={index}
          word={word}
          wordArray={wordArray[index]}
          attempts={attempts}
          handleOnChange={handleOnChange}
          inputRef={inputRef}
        ></Word>
      ))}
      {/* <Word
        word={word}
        wordArray={wordArray}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Word>
      <Word
        word={word}
        wordArray={wordArray}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Word>
      <Word
        word={word}
        wordArray={wordArray}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Word>
      <Word
        word={word}
        attempts={attempts}
        wordArray={wordArray}
        handleOnChange={handleOnChange}
      ></Word>
      <Word
        word={word}
        attempts={attempts}
        wordArray={wordArray}
        handleOnChange={handleOnChange}
      ></Word> */}
    </section>
  );
};

export default Board;
