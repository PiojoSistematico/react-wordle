import { useState, useEffect, useRef } from "react";
import Word from "./Word";
import Board from "./Board";

/* import wordList from "../wordsapi_sample.json"; */

const Game = () => {
  const maxAttempts: number = 5;
  const wordLength: number = 5;
  const [word, setWord] = useState(Array(wordLength).fill(null));
  const [wordArray, setWordArray] = useState(
    Array(maxAttempts)
      .fill(undefined)
      .map(() => Array(wordLength).fill(null))
  );
  const [attempts, setAttempts] = useState(0);

  /* const inputRef = Array(maxAttempts)
    .fill(undefined)
    .map(() => Array(wordLength).fill(useRef())); */

  // Create a matrix of refs using useRef
  const inputRef = useRef<React.RefObject<HTMLInputElement>[][] | null>(null);

  // Initialize the matrix of refs
  useEffect(() => {
    inputRef.current = Array.from(Array(maxAttempts), () =>
      Array(wordLength).fill(null)
    );
  }, [maxAttempts, wordLength]);

  // Focus the first input element
  useEffect(() => {
    if (
      inputRef.current &&
      inputRef.current[0] &&
      inputRef.current[0][0] &&
      inputRef.current[0][0].current
    ) {
      inputRef.current[0][0].current.focus();
    }
  }, []);

  useEffect(() => {
    fetch(`https://random-word-api.vercel.app/api?words=1&length=${wordLength}`)
      .then((res) => res.json())
      .catch((error) => setWord("error".split("")))
      .then((data) => setWord(data.toString().split("")));
  }, []);

  /* handle on change on input */
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    /* console.log(event.target.value);
    console.log(event.target.name); */

    console.log(event.target.name);

    /* if the square has been selected do nothing */
    /* if (keyboardArray[index]) return; */

    /* create a copy of the array to modify */
    let newWordArray = wordArray.slice();

    let letter: string = event.target.value;
    let position: number = Number(event.target.name);
    let length: number = letter.length;

    /* Check if the letter is in the right position */
    if (word[position] == letter) {
      newWordArray[attempts][position] = "Right";
    } else if (word.includes(letter)) {
      /* Check if the letter is in the word */
      newWordArray[attempts][position] = "Included";
    }

    setWordArray(newWordArray);
  }

  /* refresh page for a new game */
  function refreshPage() {
    window.location.reload();
  }

  return (
    <main>
      <h1>hello</h1>
      <Board
        word={word}
        wordArray={wordArray}
        attempts={attempts}
        handleOnChange={handleOnChange}
        inputRef={inputRef}
      ></Board>
    </main>
  );
};

export default Game;
