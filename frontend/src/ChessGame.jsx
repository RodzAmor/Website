import { useState } from 'react';
// import React from 'react';
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
                            <b className=''>{turnNumber}.</b>{` ${move} ${blackMove}`}&nbsp;&nbsp;&nbsp;
                        </span>)
                }
                return null;
            })}
        </div>
    );
}



const ChessGame = () => {
    const [playerColor, setPlayerColor] = useState('random');
    const [model, setModel] = useState('test');
    const [game, setGame] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("Error");
    const [message, setMessage] = useState("");
    const [gameStarted, setGameStarted] = useState(false);
    const [gameStatus, setGameStatus] = useState('waiting');
    const [moveHistory, setMoveHistory] = useState([]);

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
            model: model
        }
        setMessage("AI is thinking...");
        fetch('http://127.0.0.1:5000/move', {
            method: 'POST',
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


    return (
        <>
            <Navbar />
            <h1 className='text-white text-4xl text-center font-semibold mb-6'>Play Chess Neural Network</h1>
            <div className={gameStarted ? 'w-10/12 mx-auto md:container' : 'w-10/12 mx-auto md:container'}>
                <div className=''>
                    {gameStarted && (gameStatus !== 'checkmate' || gameStatus !== 'stalemate') && 
                        <div className='text-center text-important block my-4'>{message}</div>
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

                {!gameStarted && 
                    <div className='text-center mx-auto my-4 100vw'>
                        <div className={ window.innerWidth <= 760 ? 
                            'flex flex-col align-center justify-center items-center card bg-secondary custom-shadow' :
                            'flex flex-col align-center justify-center items-center card bg-secondary custom-shadow w-2/3 2 mx-auto p-8'}>
                            <p className="text-3xl text-white text-center my-6">Player Color</p>
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
                                <button className={buttonStyle(model, 'simple')} onClick={() => setModel('simple.h5')}>
                                    Simple
                                </button>
                                <button className={buttonStyle(model, 'test')} onClick={() => setModel('test.h5')}>
                                    Medium
                                </button>
                                <button className={buttonStyle(model, 'advanced')} onClick={() => setModel('advanced.h5')}>
                                    Advanced
                                </button>
                            </div>

                            <button className="border border-gold hover:bg-gold text-gold hover:text-primary ease-in-out transition duration-200 px-8 py-4 rounded-lg my-8" 
                                onClick={startGame}>
                                    Start Game
                            </button>
                            
                            
                        </div>
                    </div>
                }
                
            </div>
            <Footer />
        </>
    );
}



export default ChessGame;