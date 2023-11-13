interface SecretWordPropsTypes  {
    secretWord: string;
    guessedLetters: string[];
}

const SecretWord = ({secretWord, guessedLetters} : SecretWordPropsTypes) => {
    return (
        <div className="secret-word__box">
            {
                secretWord.toLocaleLowerCase().split("").map((letter, index) => (
                    <span className="letter" key={index}>
                        <span className={guessedLetters.includes(letter) ? "letter-visible" : "letter-invisible"}>
                            {letter}
                        </span>
                    </span>
                ))
            }
        </div>
    )
}

export default SecretWord;