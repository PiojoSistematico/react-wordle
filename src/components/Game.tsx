import { useState, useEffect } from "react";
import Word from "./Word";
import Board from "./Board";

/* import wordList from "../wordsapi_sample.json"; */

const Game = () => {
  const wordLength: number = 5;
  const [word, setWord] = useState(Array(wordLength).fill(null));
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    fetch(`https://random-word-api.vercel.app/api?words=1&length=${wordLength}`)
      .then((res) => res.json())
      .catch((error) => setWord("error".split("")))
      .then((data) => setWord(data.toString().split("")));
  }, []);

  /* handle on change on input */
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.value);

    /* if the square has been selected do nothing */
    /* if (keyboardArray[index]) return; */

    /* create a copy of the array to modify */
    /* let newKeyboardArray = keyboardArray.slice();
    let newWordArray = wordArray.slice(); */

    /* Check if the clicked letter is in the password */
    /* let letter = keyboard.charAt(index);
    if (word.toString().includes(letter)) {
      newKeyboardArray[index] = "Right";
      for (let i = 0; i < word.toString().length; i++) {
        if (word.toString().charAt(i) == letter) newWordArray[i] = "Right";
      }
    } else {
      newKeyboardArray[index] = "Wrong";
      setAttempts((current) => current - 1);
    }
    setKeyboardArray(newKeyboardArray);
    setWordArray(newWordArray); */

    /* console.log(newKeyboardArray);
    console.log(newWordArray); */

    /* if the current move is a  */
    /* if (calculateWinner(newSquares)) return;
    setIsXNext(!isXNext); */
  }

  /* refresh page for a new game */
  /* function refreshPage() {
    window.location.reload();
  }*/

  /* const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null)); */

  /* calculate a winner from the current set of values of squares */
  /* const isThereAWinner = calculateWinner(squares); */

  /* if there is a winner change the h1 and add a new game button */
  /* let header;
  if (isThereAWinner) {
    header = (
      <>
        <p>
          The winner is{" "}
          <span className={isXNext ? "x-symbol" : "o-symbol"}>
            {isXNext ? "X" : "O"}
          </span>
        </p>
        <button onClick={() => refreshPage()}>New game</button>
      </>
    );
  } else { */
  /* if there is not a winner show the next move */
  /* header = (
      <p>
        Next player{" "}
        <span className={isXNext ? "x-symbol" : "o-symbol"}>
          {isXNext ? "X" : "O"}
        </span>
      </p>
    );
  } */

  return (
    <main>
      <h1>hello</h1>
      <Board
        word={word}
        attempts={attempts}
        handleOnChange={handleOnChange}
      ></Board>
    </main>
  );
};

export default Game;
