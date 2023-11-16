interface GameStatusPopOutPropTypes {
    gameStatus: "isPlaying" | "winner" | "looser" | "waiting";
}

const GameStatusPopOut = ({gameStatus}: GameStatusPopOutPropTypes) => {
    return (
        <div className="game-status__pop-out">
            {gameStatus}     
        </div>
    )
}

export default GameStatusPopOut;