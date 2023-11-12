import { HEAD,
    LEFT_LEG,
    RIGHT_LEG,
    LEFT_ARM,
    RIGHT_ARM,
    BODY
} from "../utils/bodyparts";

const Hangman = () => {
    return (
        <div className="hangman">
            {HEAD}
            <div className="hangman-rope"></div>
            <div className="hangman-support-bar"></div>
            <div className="hangman-bar"></div>
            <div className="hangman-wall"></div>
            <div className="hangman-floor"></div>
        </div>
    )
}

export default Hangman