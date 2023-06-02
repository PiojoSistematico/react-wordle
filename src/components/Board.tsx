import Word from "./Word";

type BoardProps = {
  word: string[];
  wordArray: any[];
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  refs: any;
};

const Board: React.FunctionComponent<BoardProps> = ({
  word,
  attempts,
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
          attempts={attempts}
          handleOnChange={handleOnChange}
          refs={refs}
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
