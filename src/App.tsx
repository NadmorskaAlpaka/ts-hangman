import { useState, useEffect } from "react";
import axios from "axios";
import Hangman from "./components/Hangman";
import SecretWord from "./components/SecretWord";
import Keyboard from "./components/Keyboard";
import GameStatusPopOut from "./components/GameStatusPopOut";

function App() {

  type GameStatusType = "isPlaying" | "winner" | "looser" | "waiting";

  const [startGame, setStartGame] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<GameStatusType>("waiting")
  const [secretWord, setSecretWord] = useState<string>("");
  const [goodGuesses, setGoodGuesses] = useState<number>(0);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  let numberOfWrongGuesses = guessedLetters.filter((letter) => !secretWord.includes(letter)).length;

  useEffect(() => {
    const getRandomWord = async () => {
      await axios.get("https://random-word-api.herokuapp.com/word")
      .then((response) => (setSecretWord(response.data[0])))
      .catch((error) => (alert("Sorry, we cannot get response from API"), console.log(error)));
    }

    getRandomWord();
  },[])

  useEffect(() => {
    if(numberOfWrongGuesses === 6){
      setGameStatus("looser")
    }
  },[guessedLetters])

  const addGuessedLetters = (letter: string) => {

    if(guessedLetters.includes(letter)){
      return;
    }

    secretWord.toLowerCase().split("").map((secretWordLetter) => {
      if(secretWordLetter === letter){
        setGoodGuesses(prevVal => prevVal + 1);
      }
    })

    setGuessedLetters(prevLetters => [...prevLetters, letter]);
  }

  useEffect(() => {
    if(goodGuesses === secretWord.length && goodGuesses !== 0){
      setGameStatus("winner");
    }
  },[goodGuesses])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const clickedKey = e.key;

      if(!clickedKey.match(/^[a-z]$/)){
        return;
      }

      e.preventDefault();
      addGuessedLetters(clickedKey);
    }

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress)
    }
  })

  return (
    <div className="container">
      {secretWord}
      <Hangman numberOfWrongGuesses={numberOfWrongGuesses}/>
      <SecretWord secretWord={secretWord} guessedLetters={guessedLetters}/>
      <Keyboard addGuessedLetters={addGuessedLetters} guessedLetters={guessedLetters} secretWord={secretWord}/>
      <GameStatusPopOut gameStatus={gameStatus}/>
    </div>
  )
}

export default App
