import { useState, useEffect } from "react";
import axios from "axios";
import Hangman from "./components/Hangman";

function App() {

  const [secretWord, setSecretWord] = useState<string>("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  useEffect(() => {
    axios.get("https://random-word-api.herokuapp.com/word")
    .then((response) => setSecretWord(response.data))
    .catch((error) => (alert("Sorry, we cannot get response from API"), console.log(error)));
  },[])

  console.log(secretWord)

  return (
    <div className="container">
      {secretWord}
      <Hangman />
    </div>
  )
}

export default App
