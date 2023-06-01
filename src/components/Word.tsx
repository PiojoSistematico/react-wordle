import Square from "./Square";

type WordProps = {
  level: number;
  word: string[];
  wordArray: any[];
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /* inputRef: React.RefObject<HTMLInputElement>[][]; */
  inputRef: any;
};

const Word: React.FunctionComponent<WordProps> = ({
  level,
  word,
  attempts,
  handleOnChange,
  wordArray,
  inputRef,
}) => {
  return (
    <section className="word-section">
      {word.map((letter, index) => (
        <Square
          key={index}
          level={level}
          column={index}
          word={word}
          wordArray={wordArray}
          letter={letter}
          attempts={attempts}
          handleOnChange={handleOnChange}
          inputRef={inputRef}
        ></Square>
      ))}
    </section>
  );
};

export default Word;
