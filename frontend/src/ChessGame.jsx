import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
// import Chessboard from 'chessboardjsx';


function buttonStyle(currentColor, buttonColor) {
    return currentColor === buttonColor ?
        "border border-gold bg-gold text-primary ease-in-out w-32 h-12 rounded-lg place-self-center" :
        "border border-gold hover:bg-gold text-gold hover:text-primary ease-in-out transition duration-200 w-32 h-12 rounded-lg place-self-center";
}

function ChessHistory({ moveHistory }) {
    return (
        <div>
            {moveHistory.map((move, index) => {
                if (index % 2 === 0) {
                    const blackMove = moveHistory[index + 1] || "";
                    const turnNumber = (index / 2) + 1;

                    return (
                        <span key={index} className='text-lg text-white text-center'>
                            <b className=''>{turnNumber}.</b>&nbsp;{`${move} ${blackMove}`}&nbsp;&nbsp;&nbsp;
                        </span>)
                }
                return null;
            })}
        </div>
    );
}



const ChessGame = () => {
    const [playerColor, setPlayerColor] = useState('random');
    const [model, setModel] = useState('normalized_model.h5');
    // const [model, setModel] = useState('model-best.h5');
    const [game, setGame] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error");
    const [message, setMessage] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [gameStatus, setGameStatus] = useState('waiting');
    const [moveHistory, setMoveHistory] = useState([]);
    const [depth, setDepth] = useState(3);

    // const [gameOver, setGameOver] = useState(null);
    

    function onDrop(sourceSquare, targetSquare, promote) {
        if(!gameStarted) return;

        // if((game.turn && playerColor !== 'white') || (!game.turn && playerColor !== 'black')) return;

        const gameCopy = new Chess(game);
        setError(false);
        try {
            // console.log('Player: ' + gameCopy.moves())
            let move;
            if (promote !== null) {
                move = gameCopy.move({
                    from: sourceSquare,
                    to: targetSquare,
                    promotion: promote.at(1).toLowerCase()
                });
            } else {
                move = gameCopy.move({
                    from: sourceSquare,
                    to: targetSquare
                });
            }

            setMoveHistory(moveHistory => [...moveHistory, move.san]);
            // console.log("Player Move: " + move.san);
    
            setGame(gameCopy.fen());
            setMessage("Player's Turn");
            setError(false);
            
            if (gameCopy.isCheckmate()) {
                setGameStatus("checkmate");
                setMessage("Checkmate! Game is over.");
            } else if(gameCopy.isStalemate()) {
                setGameStatus("stalemate");
                setMessage("Stalemate! Game is over.");
            }

            if(!gameCopy.isCheckmate()) {
                makeAIMove(gameCopy.fen());
            }
        } catch(err) {
            setError(true);
            setErrorMessage(`Invalid move: ${sourceSquare} to ${targetSquare}`);
            return;
        }


    }

    function makeAIMove(fen) {
        const payload = {
            board: fen,
            model: model,
            depth: depth,
        }

        setMessage("AI is thinking...");
        // fetch('https://j34vmzowjzvvavh7g2io7clfeu0azbsq.lambda-url.us-east-1.on.aws/', {
        // fetch('https://0zp17qa817.execute-api.us-east-1.amazonaws.com/default/chess-InferenceFunction-2SHp6v4vswpr', {
        // fetch('http://127.0.0.1:5000/move', {
        // fetch('https://kg3bfmfkg7jveb4nj2udajuvkm0qmrva.lambda-url.us-east-1.on.aws/', {
        fetch('https://rzvpsqpevl.execute-api.us-east-1.amazonaws.com/default/chess-app-InferenceFunction-gFflrTRazqPD', {
        // fetch('http://127.0.0.1:3000/', {
            method: 'POST',
            // mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                const gameCopy = new Chess(fen);
                const uci = data.uci;
                let move;
                if (uci.length === 5) {
                    move = gameCopy.move({
                        from: uci.slice(0, 2),
                        to: uci.slice(2, 4),
                        promotion: uci.slice(4)
                   });
                } else {
                    move = gameCopy.move({
                        from: uci.slice(0, 2),
                        to: uci.slice(2)
                    });
                }
                setGame(gameCopy.fen());
                // console.log("Computer Move: " + move.san);

                setMessage("Player's Turn");
                setMoveHistory(moveHistory => [...moveHistory, move.san]);

                if (gameCopy.isCheckmate()) {
                    setGameStatus("checkmate");
                    setMessage("Checkmate! Game is over.");
                } else if(gameCopy.isStalemate()) {
                    setGameStatus("stalemate");
                    setMessage("Stalemate! Game is over.");
                }
            }
        })
        .catch(error => {
            console.log(error)
            setMessage("");
            setError(true);
            setErrorMessage("Fetch has failed. The backend server may be down.");
        })
    }

    function startGame() {
        setGameStarted(true);
        setGameStatus('ongoing');
        if (playerColor === 'black' || (playerColor === 'random' && Math.random() < 0.5)) {
            setPlayerColor('black')
            setMessage("Player will start as Black. AI will take the first move.")
            makeAIMove(game);
        } else {
            setPlayerColor('white')
            setMessage("Player will start as White. Make your move.")
        }
    }

    function startNewGame() {
        setGameStarted(false);
        setGameStatus('waiting');
        setPlayerColor('random')
        setMoveHistory([]);
        setGame("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    }

    const handleDepth = (event) => {
        const value = parseInt(event.target.value);
        setDepth(value);
    }

    return (
        <>
            <Navbar />
            
            <div className='block text-center mb-8'>
                <div className="card w-11/12 md:w-1/2 bg-secondary custom-shadow mx-auto mb-16">
                    <div className="card-body">
                        <h1 className='text-white text-4xl text-center font-semibold mb-4'>Chess Neural Network</h1>
                        <a href="https://github.com/RodzAmor/Chess-Neural-Network" className="text-important text-2xl hover:underline mb-2" target="_blank" rel="noopener noreferrer">Source Code</a>
                        <p className="text-white text-center mb-2">
                        Chess engines are perhaps my most favorite application of artificial intelligence on board games.
                        This project is my attempt to develop an AI based chess engine that is skilled enough to beat me. 
                        It consists of a chess engine that utilizes a convolutional neural network to rapidly evaluate thousands of positions along with the&nbsp;
                        <a className="text-important hover:underline" href="https://www.youtube.com/watch?v=l-hh51ncgDI" target="_blank" rel="noopener noreferrer">minimax algorithm with alpha-beta pruning</a>
                        &nbsp;to explore potential positions and determine the optimal move.
                        </p>
                        <p className="text-white text-center mb-2">
                            Neural network trained on over 100,000,000 games provided by the Lichess database.
                        </p>
                        <p className="text-white text-center">
                            Feel free to play it and don't be afraid to give me feedback. Thanks!
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-10/12 mx-auto md:container'>
            {!gameStarted && 
                    <div className='text-center mx-auto my-4 100vw'>
                        <div className={ window.innerWidth <= 760 ? 
                            'flex flex-col align-center justify-center items-center card bg-secondary custom-shadow' :
                            'flex flex-col align-center justify-center items-center card bg-secondary custom-shadow w-1/2 2 mx-auto p-8'}>
                            <p className="text-3xl text-white text-center mb-6">Player Color</p>
                            <div className={window.innerWidth <= 760 ? 'flex flex-col gap-2' : 'grid grid-cols-3 gap-2'}>
                                <button className={buttonStyle(playerColor, 'white')} onClick={() => setPlayerColor('white')}>
                                    White
                                </button>
                                <button className={buttonStyle(playerColor, 'random')} onClick={() => setPlayerColor('random')}>
                                    Random
                                </button>
                                <button className={buttonStyle(playerColor, 'black')} onClick={() => setPlayerColor('black')}>
                                    Black
                                </button>
                            </div>
                            
                            <p className="text-3xl text-white text-center my-6">Model</p>
                            <div className={window.innerWidth <= 760 ? 'flex flex-col gap-2' : 'grid grid-cols-3 gap-2'}>
                                <div className="tooltip tooltip-primary tooltip-top" data-tip="Trained on my personal Lichess games">
                                    <button className={buttonStyle(model, 'personal_model.h5')} onClick={() => setModel('personal_model.h5')}>
                                        Human
                                    </button>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-top" data-tip="Trained on normalized ELO data">
                                    <button className={buttonStyle(model, 'normalized_model.h5')} onClick={() => setModel('normalized_model.h5')}>
                                        Normalized
                                    </button>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-top" data-tip="Combined best aspects of type 1 and 2 models">
                                    <button className={buttonStyle(model, 'model_3.h5')} onClick={() => setModel('model_3.h5')}>
                                        Model 3
                                    </button>
                                </div>
                                {/* <div className="tooltip tooltip-primary tooltip-top" data-tip="Trained on 10000 games">
                                    <button className={buttonStyle(model, '1000_games_model')} onClick={() => setModel('1000_games_model')}>
                                        Advanced
                                    </button>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-bottom" data-tip="Trained on exactly 1 board position">
                                    <button className={buttonStyle(model, 'test_chess_model')} onClick={() => setModel('test_chess_model')}>
                                        Untrained AI
                                    </button>
                                </div> */}
                                {/* <div className="tooltip tooltip-primary tooltip-bottom" data-tip="Trained on exactly 1 board position">
                                    <button className={buttonStyle(model, 'model-best.h5')} onClick={() => setModel('model-best.h5')}>
                                        Best Model
                                    </button>
                                </div> */}
                            </div>
                            
                            <p className="text-3xl text-white text-center my-6">Depth</p>
                            <input type="range" min="1" max="5" value={depth} onChange={handleDepth} className="bg-umd-red" />
                            <p className="text-sm text-white text-center mt-2">Depth: {depth}</p>
                            {/* <p className="text-sm text-red-500 text-center">AWS Lambda times out for long computations. Currently working to optimize code and use load balancing for more intense operations.</p> */}
                            <button className="border border-gold hover:bg-gold text-gold hover:text-primary ease-in-out transition duration-200 px-8 py-4 rounded-lg mt-8" 
                                onClick={startGame}>
                                    Start Game
                            </button>
                            
                            
                        </div>
                    </div>
                }
                <div className=''>
                    {gameStarted && (gameStatus !== 'checkmate' || gameStatus !== 'stalemate') && 
                        <>
                            <p className="text-lg text-white text-center mb-6">You are playing as <b>{playerColor}</b></p>
                            <div className='text-center text-important block my-4'>{message}</div>
                        </>
                    }
                    {error && 
                        <div className='text-center text-important my-4'>{errorMessage}</div>
                    }
                    {(gameStatus === 'checkmate' || gameStatus === 'stalemate') && 
                        <div className="flex justify-center">
                            <button className="border border-gold hover:bg-gold text-gold hover:text-primary ease-in-out transition duration-200 px-8 py-4 rounded-lg"
                            onClick={() => startNewGame()}>
                                Start New Game
                            </button>
                        </div>
                    }
                    <div className={window.innerWidth <= 760 ? 'my-8 w-11/12 flex flex-col mx-auto' : 'my-8 w-1/2 flex flex-col mx-auto'}>
                        <Chessboard 
                            position={game} 
                            onPieceDrop={onDrop} 
                            boardOrientation={(playerColor === 'random' || playerColor === 'white' ? 'white' : 'black')} 
                            className="mx-auto"/>
                            
                            {gameStatus === 'ongoing' && 
                                <div className="flex justify-center my-8">
                                    <button className="border border-gold hover:bg-gold text-gold hover:text-primary ease-in-out transition duration-200 px-8 py-4 rounded-lg"
                                    onClick={() => startNewGame()}>
                                        End Game
                                    </button>
                                </div>
                            }
                            {gameStarted &&
                                <div className="card bg-secondary custom-shadow mx-auto mb-16 w-full">
                                    <div className="card-body">
                                        <p className="text-lg text-white text-center">Move History</p>
                                        <ChessHistory moveHistory={moveHistory} />
                                    </div>
                                </div>
                            }
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    );
}



export default ChessGame;