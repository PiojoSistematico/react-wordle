import { useState, useEffect, useRef, RefObject } from "react";
import Board from "./Board";
import calculateNextElement from "../helpers/calculateNextElement";
import calculateWinner from "../helpers/calculateWinner";
import disableAllElements from "../helpers/disableAllElements";

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

  // Create object to hold the refs for each input
  const refs: RefObject<{ [key: string]: any }> = useRef({});

  // Enable and Focus the first input element
  useEffect(() => {
    const firstInputRef =
      refs.current && (refs.current["00"] as HTMLInputElement);
    if (firstInputRef) {
      firstInputRef.focus();
      firstInputRef.disabled = false;
    }
  }, []);

  // Fetching random word
  useEffect(() => {
    fetch(`https://random-word-api.vercel.app/api?words=1&length=${wordLength}`)
      .then((res) => res.json())
      .catch((error) => setWord("error".split("")))
      .then((data) => setWord(data.toString().split("")));
  }, []);

  let isThereAWinner: boolean = calculateWinner(wordArray);
  let header: string = "Guess the word";
  if (isThereAWinner) header = "Good Guess, try again!!";
  if (attempts >= 5) header = "Bad Luck, try again!!";

  /* handle on change on input */
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    /* create a copy of the array to modify */
    let newWordArray = wordArray.slice();

    let letter: string = event.target.value;
    let position: number = Number(event.target.name.slice(-1));

    if (word[position] == letter) {
      /* Check if the letter is in the right position */
      newWordArray[attempts][position] = "Right";
    } else if (word.includes(letter)) {
      /* Check if the letter is in the word */
      newWordArray[attempts][position] = "Included";
    }

    setWordArray(newWordArray);

    if (position == 4) setAttempts((value) => value + 1);

    //disable the current input
    const currentInputRef =
      refs.current && (refs.current[event.target.name] as HTMLInputElement);
    if (currentInputRef) {
      currentInputRef.disabled = true;
    }

    //enable and moving the focus to the next input
    const inputName: string = calculateNextElement(5, event.target.name);
    const nextInputRef =
      refs.current && (refs.current[inputName] as HTMLInputElement);
    if (nextInputRef) {
      nextInputRef.disabled = false;
      nextInputRef.focus();
    }
  }

  /* refresh page for a new game */
  function refreshPage() {
    window.location.reload();
  }

  if (isThereAWinner) disableAllElements(refs);

  return (
    <main>
      <header>
        <h1>{header}</h1>
        <button onClick={refreshPage}>New Game</button>
      </header>
      <Board
        word={word}
        wordArray={wordArray}
        handleOnChange={handleOnChange}
        refs={refs}
      ></Board>
    </main>
  );
};

export default Game;
