import { useState, useEffect } from "react";
import axios from "axios";
import Hangman from "./components/Hangman";
import SecretWord from "./components/SecretWord";
import Keyboard from "./components/Keyboard";

function App() {

  const [secretWord, setSecretWord] = useState<string>("hangman");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    const getRandomWord = async () => {
      await axios.get("https://random-word-api.herokuapp.com/word")
      .then((response) => setSecretWord(response.data[0]))
      .catch((error) => (alert("Sorry, we cannot get response from API"), console.log(error)));
    }

    getRandomWord();
  },[])

  const addGuessedLetters = (letter: string) => {
    if(guessedLetters.includes(letter)){
      return;
    }

    setGuessedLetters(prevLetters => [...prevLetters, letter]);
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const clickedKey = e.key;
      console.log("ty")

      if(!clickedKey.match(/^[a-z]$/)){
        return;
      }

      e.preventDefault();
      console.log("added");
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
      <Hangman numberOfWrongGuesses={guessedLetters.filter((letter) => !secretWord.includes(letter)).length}/>
      <SecretWord secretWord={secretWord} guessedLetters={guessedLetters}/>
      <Keyboard />
    </div>
  )
}

export default App
