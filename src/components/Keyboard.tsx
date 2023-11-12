import { alphabet } from "../utils/alphabet";

const Keyboard = () => {
    return (
        <div className="keyboard">
            {
                alphabet.map((letter) => (
                    <button className="key" key={letter}>
                        {letter}
                    </button>
                ))
            }
        </div>
    )
}

export default Keyboard;