const SecretWord = () => {
    const tempWord = "mOuse";
    const temp = ["m", "o", "u", "e"];
    return (
        <div className="secret-word__box">
            {
                tempWord.toLocaleLowerCase().split("").map((letter, index) => (
                    <span className="letter">
                        <span className={temp.includes(letter) ? "letter-visible" : "letter-invisible"}
                            key={index}
                        >
                            {letter}
                        </span>
                    </span>
                ))
            }
        </div>
    )
}

export default SecretWord;