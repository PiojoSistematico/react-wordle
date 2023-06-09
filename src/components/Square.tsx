import { RefObject } from "react";

type SquareProps = {
  level: number;
  column: number;
  wordArray: any[];
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  refs: RefObject<{ [key: string]: any }>;
};

const Square: React.FunctionComponent<SquareProps> = ({
  level,
  column,
  wordArray,
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
        maxLength={1}
        onChange={handleOnChange}
        ref={(el) => {
          if (refs.current) {
            refs.current[`${level}${column}`] = el;
          }
        }}
        disabled={`${level}${column}` == "00" ? false : true}
      />
    </>
  ) : null;
};

export default Square;
