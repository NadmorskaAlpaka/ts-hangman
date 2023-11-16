import { alphabet } from "../utils/alphabet";

interface KeyboardPropsTypes {
    addGuessedLetters: (letter: string) => void;
    guessedLetters: string[];
    secretWord: string;
}

const Keyboard = ({addGuessedLetters, guessedLetters, secretWord} : KeyboardPropsTypes) => {

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let target = e.target as Element;
        
        addGuessedLetters(target.innerHTML);
    }

    const checkLetters = (letter: string): string | void => {
        if(secretWord.includes(letter) && guessedLetters.includes(letter)){
            return "correct-letter";
        } else if(!secretWord.includes(letter) && guessedLetters.includes(letter)) {
            return "incorrect-letter";
        }
    }

    return (
        <div className="keyboard">
            {
                alphabet.map((letter) => (
                    <button className={`key ${checkLetters(letter)}`} 
                            key={letter} 
                            onClick={handleOnClick}>
                        {letter}
                    </button>
                ))
            }
        </div>
    )
}

export default Keyboard;