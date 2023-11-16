import { BODYPARTS } from "../utils/bodyparts";

type HangmanPropsTypes = {
    numberOfWrongGuesses: number;
}

const Hangman = ({numberOfWrongGuesses} :HangmanPropsTypes) => {
    return (
        <div className="hangman">
            {
                BODYPARTS.slice(0, numberOfWrongGuesses)
            }
            <div className="hangman-rope"></div>
            <div className="hangman-support-bar"></div>
            <div className="hangman-bar"></div>
            <div className="hangman-wall"></div>
            <div className="hangman-floor"></div>
        </div>
    )
}

export default Hangman