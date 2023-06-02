import { useState, useEffect, useRef, RefObject } from "react";
import Word from "./Word";
import Board from "./Board";
import calculateNextElement from "../helpers/calculateNextElement";

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

  useEffect(() => {
    fetch(`https://random-word-api.vercel.app/api?words=1&length=${wordLength}`)
      .then((res) => res.json())
      .catch((error) => setWord("error".split("")))
      .then((data) => setWord(data.toString().split("")));
  }, []);

  /* handle on change on input */
  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log(event.target);
    /*console.log(event.target.name); */

    console.log(event.target.name);

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

  return (
    <main>
      <h1>hello</h1>
      <Board
        word={word}
        wordArray={wordArray}
        attempts={attempts}
        handleOnChange={handleOnChange}
        refs={refs}
      ></Board>
    </main>
  );
};

export default Game;
