import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';
// import Chessboard from 'chessboardjsx';
import * as tf from '@tensorflow/tfjs';

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
    const [model, setModel] = useState("");
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
    useEffect(() => {
        async function load() {
            const loadedModel = await tf.loadLayersModel('/models/test_model/model.json')
            setModel(loadedModel);
        }
        load();
    }, []);

    
    const evaluateBoard = (boardFen) => {
        const encodedBoard = fastEncode(boardFen);
        const prediction = model.predict(encodedBoard);
        console.log(prediction)
        return prediction;
    };

    const fastEncode = (boardFen) => {
        const pieceIndex = {
            'P': 0, 'R': 1, 'N': 2, 'B': 3, 'Q': 4, 'K': 5, // White Pieces
            'p': 6, 'r': 7, 'n': 8, 'b': 9, 'q': 10, 'k': 11 // Black Pieces
        };
    
        let encodedBoard = Array(8).fill().map(() => Array(8).fill().map(() => Array(13).fill(0)));
    
        const chess = new Chess(boardFen);
        const board = chess.board();
    
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const piece = board[i][j];
                if (piece != null) {
                    encodedBoard[i][j][pieceIndex[piece.type.toUpperCase()]] = piece.color === 'w' ? 1 : -1;
                } else {
                    encodedBoard[i][j][12] = 1;
                }
            }
        }
    
        return tf.tensor4d([encodedBoard]); // Convert the 3D array to a 4D tensor
    };    
    
    const minimaxAlphaBeta = (chess, depth, alpha, beta, maximizingPlayer) => {
        if (depth === 0 || chess.isCheckmate() || chess.isStalemate()) {
            console.log(depth)
            return [evaluateBoard(chess.fen()), null];
        }
    
        const moves = chess.moves();
        let bestMove = null;
        if (maximizingPlayer) {
          let maxEval = Number.NEGATIVE_INFINITY;
          for (const move of moves) {
            chess.move(move);
            const [evaluation] = minimaxAlphaBeta(chess, depth - 1, alpha, beta, false);
            chess.undo();
    
            if (evaluation > maxEval) {
              maxEval = evaluation;
              bestMove = move;
            }
    
            alpha = Math.max(alpha, evaluation);
            if (beta <= alpha) {
              break;
            }
          }
          return [maxEval, bestMove];
        } else {
          let minEval = Number.POSITIVE_INFINITY;
          for (const move of moves) {
            chess.move(move);
            const [evaluation] = minimaxAlphaBeta(chess, depth - 1, alpha, beta, true);
            chess.undo();
    
            if (evaluation < minEval) {
              minEval = evaluation;
              bestMove = move;
            }
    
            beta = Math.min(beta, evaluation);
            if (beta <= alpha) {
              break;
            }
          }
          return [minEval, bestMove];
        }
    };
    
    const makeAIMove = (fen) => {
        const gameCopy = new Chess(fen);
        // console.log(gameCopy.turn() === (playerColor === "white" ? "w" : "b"))
        const [centipawn, bestMove] = minimaxAlphaBeta(gameCopy, depth, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, gameCopy.turn() !== (playerColor === "white" ? "w" : "b"));
        console.log(centipawn, bestMove)
        if (bestMove) {
            gameCopy.move(bestMove);
            console.log(bestMove);
            setGame(gameCopy.fen());
            setMoveHistory((moveHistory) => [...moveHistory, bestMove]);


            if (gameCopy.isCheckmate()) {
                setGameStatus("checkmate");
                setMessage("Checkmate! AI wins.");
            } else if (gameCopy.isStalemate()) {
                setGameStatus("stalemate");
                setMessage("Stalemate! Game is over.");
            }
        }
    };

    function onDrop(sourceSquare, targetSquare, promote) {
        if(!gameStarted) return;

        // if((game.turn && playerColor !== 'white') || (!game.turn && playerColor !== 'black')) return;

        const gameCopy = new Chess(game);
        setError(false);
        try {
            // console.log('Player: ' + gameCopy.moves())
            let move;
            console.log("Player move:", gameCopy.turn())
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
            console.log("Player move:", gameCopy.turn())
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

            if(!gameCopy.isCheckmate() && !gameCopy.isStalemate()) {
                makeAIMove(gameCopy.fen());
            }
        } catch(err) {
            setError(true);
            setErrorMessage(`Invalid move: ${sourceSquare} to ${targetSquare}`);
            return;
        }


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
                                <div className="tooltip tooltip-primary tooltip-top" data-tip="Trained on 100 games">
                                    <button className={buttonStyle(model, '100_games_model')} onClick={() => setModel('100_games_model')}>
                                        Simple
                                    </button>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-top" data-tip="Trained on 1000 games">
                                    <button className={buttonStyle(model, '100_games_model')} onClick={() => setModel('100_games_model')}>
                                        Medium
                                    </button>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-top" data-tip="Trained on 10000 games">
                                    <button className={buttonStyle(model, '1000_games_model')} onClick={() => setModel('1000_games_model')}>
                                        Advanced
                                    </button>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-bottom" data-tip="Trained on my Lichess games (~78 games)">
                                    <button className={buttonStyle(model, 'personal_model')} onClick={() => setModel('personal_model')}>
                                        Amor Bot
                                    </button>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-bottom" data-tip="Trained on exactly 1 board position">
                                    <button className={buttonStyle(model, 'test_chess_model')} onClick={() => setModel('test_chess_model')}>
                                        Untrained AI
                                    </button>
                                </div>
                                <div className="tooltip tooltip-primary tooltip-bottom" data-tip="Trained on exactly 1 board position">
                                    <button className={buttonStyle(model, 'model-best.h5')} onClick={() => setModel('model-best.h5')}>
                                        Best Model
                                    </button>
                                </div>
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