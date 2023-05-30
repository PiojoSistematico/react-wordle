import Word from "./Word";

type BoardProps = {
  word: string[];
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Board: React.FunctionComponent<BoardProps> = ({
  word,
  attempts,
  handleOnChange,
}) => {
  return (
    <section className="board-section">
      <Word
        word={word}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Word>
      <Word
        word={word}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Word>
      <Word
        word={word}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Word>
      <Word
        word={word}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Word>
      <Word
        word={word}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Word>
    </section>
  );
};

export default Board;
