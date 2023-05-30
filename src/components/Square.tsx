type SquareProps = {
  index: number;
  word: string[];
  letter: string;
  attempts: number;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Square: React.FunctionComponent<SquareProps> = ({
  index,
  word,
  letter,
  attempts,
  handleOnChange,
}) => {
  return (
    <>
      <input
        className="square"
        type="text"
        placeholder={letter}
        maxLength={1}
        onChange={handleOnChange}
      />
    </>
  );
};

export default Square;
